import React from 'react'
import { useAuth } from '../contexts/AuthContext';

export default function ProductItem({ i }) {

   const { AddCartModel, isAuthenticated } = useAuth();
   return (<>
      <div className="col">
         <div className="card rounded-4 pro-item card-hover overflow-hidden h-100">
            <a href="/product-page"><div className="p-2 item-offer "><div className="badge"><p className="m-0">{i.discount} % OFF</p></div></div></a>
            <div className="card-image card-one position-relative">
               <a href="/product-page">
                  <img src={i.img1} className="card-img-top img1 border-0 rounded-0 rounded-top" alt={i.name} />
                  <img src={i.img2} className="card-img-top img2 border-0 rounded-0 rounded-top" alt={i.name} />
               </a>
               <ul className="option-wrap ">
                  {isAuthenticated &&
                     <li className="option-round" data-bs-toggle="tooltip" data-bs-title="Wishlist" data-bs-placement="left">
                        <a className="heart-icon btn btn-wishlist p-1" href=" #" title="Add to Wishlist"><i className="fa-regular fa-heart" /></a>
                     </li>
                  }
                  <li className="option-round" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="View">
                     <a href='/product-page' className="wishlist-btn"><i className="fa-regular fa-eye" /></a>
                  </li>
                  <li className="option-round" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add To Cart">
                     <a onClick={AddCartModel} className="addtocart-btn wishlist-btn"> <i className="fa fa-basket-shopping" /></a>
                  </li>
               </ul>
            </div>
            <div className="card-body pb-0">
               <div className="pb-1 cat-span d-flex justify-content-between">
                  <span className="text-muted">{i.category}</span>
                  <div className="d-flex align-items-center gap-1 pro_item_rating">
                     <i className="fa-solid fa-star text-warning" />
                     <a href="/product-page" className="cursor-pointer text-dark"><p className="m-0 fs-8 fw-600">{i.rating.toFixed(1)}</p></a>
                  </div>
               </div>
               <h5 className="item-card-title fs-7 fw-600"><img src="/assets/img/about/veg.svg" alt='' className="me-1 mb-1 item-type-img" />{i.name}</h5>
               <p className="m-0 fs-8 text-success fw-600">{i.stockStatus}</p>
            </div>
            <div className="item-card-footer">
               <div className="d-flex justify-content-between align-items-center pro_price">
                  <p className="m-0">₹{i.price}<span> <del className="text-muted">₹{i.originalPrice}</del></span></p>
               </div>
            </div>
         </div>
      </div>

   </>)
}
