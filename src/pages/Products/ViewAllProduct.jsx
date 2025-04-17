import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import ProductItem from '../../components/ProductItem';

const groceryItems = [
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66728f6a5bd4b.jpg",
      img2: "/assets/img/item/item-66728f6a5c3db.jpg",
      category: "Beverage",
      rating: 0.0,
      name: "Nescafe Classic Instant Coffee - Pack of 60 Sachet",
      price: 88.00,
      originalPrice: 110.00,
      stockStatus: null,
   },
   {
      discount: 46.7,
      img1: "/assets/img/item/item-667287fdd1fba.jpeg",
      img2: "/assets/img/item/item-667287ed5fa88.jpeg",
      category: "Meat",
      rating: 4.2,
      name: "Meatzza Fresh Chicken Wings (Frozen)",
      price: 80.00,
      originalPrice: 150.00,
      stockStatus: null,
   },
   {
      discount: 18.2,
      img1: "/assets/img/item/item-66717896db644.jpg",
      img2: "/assets/img/item/item-66717896db10a.jpg",
      category: "Bread Bakery",
      rating: 4.5,
      name: "Baked Whole Wheat Sandwich Bread (Crustless)",
      price: 90.00,
      originalPrice: 110.00,
      stockStatus: null,
   },
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
      discount: 33.3,
      img1: "/assets/img/item/item-664c8ad77300d.jpeg",
      img2: "/assets/img/item/item-664c8ad772415.png",
      category: "Vegetables",
      rating: 3.9,
      name: "Onion",
      price: 100.00,
      originalPrice: 150.00,
      stockStatus: null,
   },
   {
      discount: 15.0,
      img1: "/assets/img/item/item-664c7f00648d3.png",
      img2: "/assets/img/item/item-664c7f0064314.png",
      category: "Fruits",
      rating: 4.6,
      name: "Sinduri Mango",
      price: 85.00,
      originalPrice: 100.00,
      stockStatus: null,
   },
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66755f6c5dd5d.jpg",
      img2: "/assets/img/item/item-66755f6c5d650.jpg",
      category: "Dairy Products",
      rating: 4.1,
      name: "Amul Gold Full Cream Fresh Milk",
      price: 24.00,
      originalPrice: 30.00,
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
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66716a0fda81c.jpg",
      img2: "/assets/img/item/item-66716a0fda577.jpg",
      category: "Bread Bakery",
      rating: 4.3,
      name: "Let's Try Ragi Kaju Pista Cookies",
      price: 144.00,
      originalPrice: 180.00,
      stockStatus: "In Stock",
   },
];

export default function ViewAllProduct() {
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="fw-bold text-dark" href="/">Home</a></li>
                        <li className="breadcrumb-item text-primary fw-bold active">Popular Products</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">Popular Products</h3>
               <div className="menu-section menu-section-header rounded-4">
                  <div className="d-md-flex align-items-center justify-content-md-between justify-content-center p-2">
                     <div className="col-auto d-flex justify-content-center my-2">
                        <h5 className="mb-0 text-capitalize mx-2">Product filter</h5>
                     </div>
                     <div className="sub-cat-tab food-type w-100  d-flex justify-content-md-end justify-content-center">
                        <nav className="nav nav-pills justify-content-center veg align-items-baseline">
                           <Link className="nav-link px-3 mx-2 border"><img src="/assets/img/about/veg.svg" className="pe-1"  alt=''/>Veg </Link>
                           <Link className="nav-link px-3 mx-2 border"><img src="/assets/img/about/nonveg.svg" className="pe-1"  alt=''/>Non-Veg </Link>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="menu my-0">
                     <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-sm-3 g-2">
                        {groceryItems.map((i) => (<ProductItem i={i} />))}
                     </div>
                     <div className="mt-5 d-flex justify-content-center">
                        <nav>
                           <ul className="pagination">
                              <li className="page-item disabled" aria-disabled="true" aria-label="« Previous"><span className="page-link" aria-hidden="true">‹</span></li>
                              <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                              <li className="page-item"><a className="page-link" href="/view-all">2</a></li>
                              <li className="page-item"><a className="page-link" href="/view-all">3</a></li>
                              <li className="page-item"><a className="page-link" href="/view-all" rel="next" aria-label="Next »">›</a></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   )
}
