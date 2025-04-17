import React from 'react'
import AuthLayout from '../../components/AuthLayout'
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
];

export default function FavouriteList() {
   return (
      <AuthLayout title={'Favourite List'} body={
         <div className="col-xl-9 col-lg-8 d-flex fav-menu">
            <div className="user-content-wrapper">
               <p className="title pb-2 border-bottom">Favourite List</p>
               <div className="menu my-0">
                  <div className="row row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-sm-3 g-2">
                     {groceryItems.map((i) => (
                        <ProductItem i={i} />
                     ))}
                  </div>
               </div>
               <div className="mt-2 d-flex justify-content-center">
               </div>
            </div>
         </div>
      } />
   )
}
