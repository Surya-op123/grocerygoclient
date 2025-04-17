import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ProductItemLG({ i }) {
   const { AddCartModel, isAuthenticated } = useAuth();
   return (
      <div className="col">
         <div className="card pro-item rounded h-100 rounded-4 card-hover overflow-hidden">
            <div className="d-flex h-100">
               <div className="card-image card-second d-flex align-items-center col-auto position-relativ">
                  <Link><img src={i.img} className="card-img-top border-0 rounded-4 p-2" alt="dishes" /></Link>
               </div>
               <div className="card-body py-2 col-auto">
                  <div>
                     <div className="d-flex item-offer-2 mb-1"><div className="badge"><p className="m-0">{i.discount}</p></div></div>
                     <div className="pb-1 cat-span d-flex justify-content-between">
                        <span className="text-muted">{i.category}</span>
                        <div className="d-flex align-items-center gap-1 pro_item_rating">
                           <i className="fa-solid fa-star text-warning" />
                           <Link className="cursor-pointer text-dark"><p className="m-0 fs-8 fw-600">{i.rating.toFixed(1)}</p></Link>
                        </div>
                     </div>
                     <Link><h5 className="item-card-title fs-7 fw-600"><img src="/assets/img/about/veg.svg"  alt=''className="me-1 mb-1 item-type-img" />{i.title}</h5></Link>
                     <p className="m-0 fs-8 text-success fw-600">{i.stockStatus}</p>
                  </div>
                  <div className="item-card-footer-2 pt-md-1 pt-0">
                     <div className="d-flex justify-content-between align-items-center pro_price">
                        <p className="fs-6 m-0">₹{i.price.toFixed(2)}<span><del className="text-muted">₹{i.originalPrice.toFixed(2)}</del></span></p>
                     </div>
                  </div>
               </div>
               <ul className="option-wrap-2">
                  {isAuthenticated && <li className="option-round" data-bs-toggle="tooltip" data-bs-title="Wishlist" data-bs-placement="left"><a className="heart-icon btn btn-wishlist p-1" href="javascript:void(0)" title="Add to Wishlist"><i className="fa-regular fa-heart" /></a></li>}
                  <li className="tooltip-left option-round" data-bs-toggle="tooltip" data-bs-title="View"><a href="/product-page" className="wishlist-btn"><i className="fa-regular fa-eye" /></a></li>
                  <li onClick={AddCartModel} className="tooltip-left option-round" data-bs-toggle="tooltip" data-bs-title="Add To Cart"><a className="addtocart-btn wishlist-btn"> <i className="fa-solid fa-basket-shopping fs-7" /></a></li>
               </ul>
            </div>
         </div>
      </div>
   )
}
