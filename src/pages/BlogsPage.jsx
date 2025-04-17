import React from 'react'
import Layout from '../components/Layout'
import { Link, useLocation } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';

export default function BlogsPage() {
   const location = useLocation();
   const isBlogs = location.pathname === "/blogs";
   const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
         0: { items: 1 },
         570: { items: 2 },
         768: { items: 3 },
         1000: { items: 4 }
      }
   };
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">

                     <ol className="breadcrumb">
                        {isBlogs ? <>
                           <li className="breadcrumb-item "><Link className="text-dark" href="/">Home</Link></li>
                           <li className="breadcrumb-item "><Link className="text-primary fw-bold">Blogs</Link></li>
                        </> : <>
                           <li className="breadcrumb-item "><a className="text-dark" href="/">Home</a></li>
                           <li className="breadcrumb-item "><a className="text-primary fw-bold" href="/blogs">Blogs</a></li>
                           <li className="breadcrumb-item text-primary fw-bold active">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese</li>
                        </>}
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         {isBlogs ? <>
            <section className="my-5">
               <div className="blog-wrapper">
                  <div className="container">
                     <h3 className="fw-bold fs-2 mb-4 truncate-2">Latest blogs</h3>
                     <div className="row">
                        {Array.from({ length: 7 }, (_, i) => (
                           <div key={i} className="col-xl-3 col-lg-4 col-md-6  col-auto d-flex mb-4">
                              <div className="card card-hover rounded-4 overflow-hidden">
                                 <a href='/blog-item'><img src="/assets/img/about/blog-800_400.svg" className="card-img-top" alt="..." /></a>
                                 <div className="card-body px-3 pb-0">
                                    <h5 className="card-title fw-bold dark_color"><a href="/blog-item" className="dark_color">Addictive Appetizers: Sausage Cheese Balls</a></h5>
                                    <p className="fs-7 text-muted m-0">Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text....</p>
                                 </div>
                                 <div className="card-footer border-0 bg-transparent px-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="col-auto mb-0 blog-date"><span className="text-dark">May 25, 2022</span></div>
                                       <a href="/blog-item" className="text-primary border-0 fs-7 float-end">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

         </> : <>
            <section className="my-5">
               <div className="container">
                  <h3 className="fw-bold fs-2 mb-4 truncate-2">Blogs Details</h3>
                  <div className="row">
                     <div className="col-lg-12 mb-lg-0 mb-4">
                        <div className="blog-details">
                           <div className="card p-0">
                              <img src="/assets/img/about/blog-800_400.svg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                 <div className="row justify-content-between">
                                    <div className="col-auto blog-date mb-3"><span className="text-muted fw-600">1 July 2022</span></div>
                                 </div>
                                 <h4 className="card-title fw-bold dark_color mb-3">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese</h4>
                                 <p className="card-text">Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsumLorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsumLorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="my-5">
               <div className="blog-wrapper">
                  <div className="container">
                     <div className="row align-items-center justify-content-between my-5 px-2">
                        <div className="col-auto blog-heading"><h2 className="mb-0 fw-800 text-capitalize">Recent blogs</h2></div>
                        <div className="col-auto"><a href="/blogs" className="btn btn-primary px-4">View All <i className="fa fa-arrow-right" /></a></div>
                     </div>

                     <OwlCarousel className='blog-slider' {...options}>
                        {Array.from({ length: 6 }, (_, i) => (
                           <div key={i} className="item m-2">
                              <div className="card card-hover rounded-4 overflow-hidden">
                                 <a href="/blog-item"><img src="/assets/img/about/blog-800_400.svg" className="card-img-top" alt="..." /></a>
                                 <div className="card-body px-3 pb-0">
                                    <h5 className="card-title fw-bold dark_color"><a href="/blog-item" className="dark_color">Small Batch Triple Cheese Loaf Sandwiches</a></h5>
                                    <p className="fs-7 text-muted m-0">Lorem is dummy ipsum text. Lorem is dummy ipsum text. Lorem is dummy ipsum text....</p>
                                 </div>
                                 <div className="card-footer border-0 bg-transparent px-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="col-auto mb-0 blog-date"><span className="text-muted fw-600">May 25, 2022</span></div>
                                       <a href="/blog-item" className="text-primary border-0 fs-7 float-end">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </OwlCarousel>
                  </div>
               </div>
            </section>
         </>}
      </Layout>
   )
}
