import React from 'react'
import Layout from './Layout'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

export default function AuthLayout({ title, body }) {
   const location = useLocation();
   const { logout, user } = useAuth();
   const isPath = (url) => location.pathname === url ? "active" : "";
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item ">
                           <a className="text-dark" href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item  text-primary fw-bold active" aria-current="page">{title}</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">

                     <div className="user-sidebar">
                        <div className="user-info d-xl-flex pb-3 mb-3">
                           <div className="col-xl-3 col-12 mb-xl-0 mb-3">
                              <div className="avatar-upload mx-auto d-flex justify-content-center">
                                 <div className="avatar-preview-two ">
                                    <div id="imagepreview-two">
                                       <img src={user?.profileImage ?? '/assets/img/unknown.png'} alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="px-xl-3 col-xl-10 col-12 d-flex align-items-center">
                              <div className="col-12">
                                 <p className="mb-0 text-xl-start text-center fw-bold">{user?.name ?? 'user'}</p>
                                 <p className="mb-0 text-xl-start text-center">{user?.email ?? 'user@gmail.com'}</p>
                              </div>
                           </div>
                        </div>

                        <li><a className={`${isPath('/profile')}`} href="/profile"><i className="mx-2 far fa-user" />My Profile </a></li>
                        <li><a className={`${isPath('/orders')}`} href="/orders"><i className="mx-2 fa fa-list-check" />My Orders </a></li>
                        <li><a className={`${isPath('/favouritelist')}`} href="/favouritelist"><i className="mx-2 fa-regular fa-heart" />Favourite List </a></li>
                        <li><a className={`${isPath('/address')}`} href="/address"><i className="mx-2 far fa-map" />My Addresses </a></li>
                        <li><a className={`${isPath('/wallet')}`} href="/wallet"><i className="mx-2 fa fa-wallet" />My Wallet </a></li>
                        <li><a className={`${isPath('/refer-earn')}`} href="/refer-earn"><i className="mx-2 fa fa-share-nodes" />Refer &amp; Earn </a></li>
                        <li><a className={`${isPath('/delete')}`} href="/delete"><i className="mx-2 fa fa-trash" />Delete Account </a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); logout(); }}><i className="mx-2 fa fa-arrow-right-from-bracket" />Logout </a></li>

                     </div>

                     {/*------- PROFILE CARD -------*/}
                     <div className="d-lg-none mb-3 w-100">
                        <div className="accordion accordion-flush d-lg-none" id="mobileaccountmenu">
                           <div className="accordion-item border rounded-2 overflow-hidden my-0">
                              <h2 className="accordion-header">
                                 <button className="accordion-button fw-500 bg-light accordion_button d-flex gap-2 align-items-center mb-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <i className="fa fa-bars-staggered" /><p className="fw-600 mb-0">Navigation</p>
                                 </button>
                              </h2>
                              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#mobileaccountmenu" style={{}}>
                                 <div className="accordion-body border-top pt-2">
                                    {/*------- ACCOUNT MENU -------*/}
                                    <div className="account_menu">
                                       <ul>
                                          <li><a className={`${isPath('/profile')}`} href="/profile"><i className="far fa-user" /><span className="px-3">My Profile</span></a></li>
                                          <li><a className={`${isPath('/orders')}`} href="/orders"><i className="fa fa-list-check" /><span className="px-3">My Orders</span></a></li>
                                          <li><a className={`${isPath('/favouritelist')}`} href="/favouritelist"><i className="fa-regular fa-heart" /><span className="px-3">Favourite List</span></a></li>
                                          <li><a className={`${isPath('/address')}`} href="/address"><i className="fa-regular fa-map" /><span className="px-3">My Addresses</span></a></li>
                                          <li><a className={`${isPath('/wallet')}`} href="/wallet"><i className="fa fa-wallet" /><span className="px-3">My Wallet </span></a></li>
                                          <li><a className={`${isPath('/refer-earn')}`} href="/refer-earn"><i className="fa fa-share-nodes" /><span className="px-3">Refer &amp; Earn</span></a></li>
                                          <li><a className={`${isPath('/delete')}`} href="/delete"><i className="fa fa-trash" /><span className="px-3">Delete Account</span></a></li>
                                          <li><a href="#" onClick={(e) => { e.preventDefault(); logout(); }}><i className="fa fa-arrow-right-from-bracket" /><span className="px-3">Logout</span></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {body}
               </div>
            </div>
         </section>
      </Layout>
   )
}
