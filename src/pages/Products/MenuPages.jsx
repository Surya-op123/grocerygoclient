import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import ProductItem from '../../components/ProductItem';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const groceryItems = [
   {
      discount: 50.0,
      img1: "/assets/img/item/item-66728e7c30ec4.jpg",
      img2: "/assets/img/item/item-66728e7c308b1.jpg",
      category: "Snacks",
      rating: 3.8,
      name: "Chheda's Salt-n-Pepper Banana Chips - 170 g",
      price: 45.00,
      originalPrice: 90.00,
      stockStatus: null,
   },
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66728df63d2e3.jpg",
      img2: "/assets/img/item/item-66728df63dbed.jpg",
      category: "Snacks",
      rating: 4.0,
      name: "Lay's India's Magic Masala Potato Chips (40 g)",
      price: 40.00,
      originalPrice: 50.00,
      stockStatus: null,
   },
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66728d022f587.jpg",
      img2: "/assets/img/item/item-66728d022f1e0.jpg",
      category: "Snacks",
      rating: 4.7,
      name: "Uncle Chipps Spicy Treat Flavour Potato Chips",
      price: 40.00,
      originalPrice: 50.00,
      stockStatus: "In Stock",
   },
];

export default function MenuPages() {
   const { getAllSubCategories } = useAuth();
   const [subCategories, setSubCategories] = useState([]);

   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const selectedCategory = queryParams.get("category");

   // const [allItems, setAllItems] = useState([]);
   const [activeTab, setActiveTab] = useState('all');

   useEffect(() => {
      const fetchData = async () => {
         const data = await getAllSubCategories(); // API: subcategories
         // const items = await getAllItems();              // API: all items
         setSubCategories(data);
         // setAllItems(items);
      };

      fetchData();
   }, [getAllSubCategories]);

   // const filteredItems = activeTab === 'all' ? allItems : allItems.filter(item => item.subcategoryId === activeTab);


   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark" href="/">Home</a></li>
                        <li className="breadcrumb-item text-primary fw-bold active" aria-current="page">{selectedCategory}</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="menu-section">
            <div className="container">
               <div className="row mb-5">

                  <div className="filter-sidebar mb-3">
                     <div className="sidebar-wrap" id="style-3">
                        <div>
                           <a href='#' onClick={(e) => { e.preventDefault(); setActiveTab('all'); }} className={`${activeTab === 'all' ? "active" : ""}`}>All</a>
                        </div>
                        {subCategories.map((item) => (<>
                           {item.category?.name === selectedCategory &&
                              <div key={item._id}>
                                 <a href='#' onClick={(e) => { e.preventDefault(); setActiveTab(item.name); }} className={`${activeTab === item.name ? "active" : ""}`}>{item.name}</a>
                              </div>
                           }
                        </>))}
                     </div>
                  </div>

                  {groceryItems.length > 0 ? (<>
                     <div className="menu my-0">
                        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-sm-3 g-2">
                           {groceryItems.map((i) => (<ProductItem i={i} />))}
                        </div>
                     </div>
                     <div className="mt-5 d-flex justify-content-center"></div>
                  </>) : (
                     <div className="d-grid no-data justify-items-center my-3">
                        <img src="/assets/img/no_data_image.png" alt='' className=" mb-3 " />
                        <h4>No data found</h4>
                     </div>
                  )}
               </div>
            </div>
         </section>
      </Layout>
   )
}
