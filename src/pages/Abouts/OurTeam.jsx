import React from 'react'
import Layout from '../../components/Layout'

export default function OurTeam() {
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item "><a className="text-primary fw-bold" href="javascript:void(0)">Our Team</a> </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="blog-wrapper">
               <div className="container">
                  <h3 className="fw-bold fs-2 mb-4 truncate-2">Our Team</h3>
                  <div className="row g-3">
                     <div className="col-xl-3 col-md-4 col-sm-6 d-flex">
                        <div className="review">
                           <img src="https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/team-66a73d477a944.jpg" className="img-circle img-responsive" />
                           <h4 className="title">Diana R Wilmot</h4>
                           <h6 className="fs-7">Tradewell</h6>
                           <div className="d-flex gap-2">
                              <a href="https://www.facebook.com/" target="_blank">
                                 <div className="team-icon fac"><i className="fa-brands fa-facebook-f" /></div>
                              </a>
                              <a href="https://www.instagram.com/" target="_blank">
                                 <div className="team-icon twi"><i className="fa-brands fa-twitter" /></div>
                              </a>
                              <a href="https://www.google.com/" target="_blank">
                                 <div className="team-icon ins"><i className="fa-brands fa-instagram" /></div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-4 col-sm-6 d-flex">
                        <div className="review">
                           <img src="https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/team-66a73d187b615.jpg" className="img-circle img-responsive" />
                           <h4 className="title">Hector L Holst</h4>
                           <h6 className="fs-7">Webcom Business Services</h6>
                           <div className="d-flex gap-2">
                              <a href="https://www.facebook.com/" target="_blank">
                                 <div className="team-icon fac">
                                    <i className="fa-brands fa-facebook-f" />
                                 </div>
                              </a>
                              <a href="https://www.instagram.com/" target="_blank">
                                 <div className="team-icon twi">
                                    <i className="fa-brands fa-twitter" />
                                 </div>
                              </a>
                              <a href="https://www.google.com/" target="_blank">
                                 <div className="team-icon ins">
                                    <i className="fa-brands fa-instagram" />
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-4 col-sm-6 d-flex">
                        <div className="review">
                           <img src="https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/team-66a73cc8b31d1.jpg" className="img-circle img-responsive" />
                           <h4 className="title">Donald W Hembree</h4>
                           <h6 className="fs-7">Health Educator</h6>
                           <div className="d-flex gap-2">
                              <a href="https://www.facebook.com/" target="_blank">
                                 <div className="team-icon fac">
                                    <i className="fa-brands fa-facebook-f" />
                                 </div>
                              </a>
                              <a href="https://www.instagram.com/" target="_blank">
                                 <div className="team-icon twi">
                                    <i className="fa-brands fa-twitter" />
                                 </div>
                              </a>
                              <a href="https://www.google.com/" target="_blank">
                                 <div className="team-icon ins">
                                    <i className="fa-brands fa-instagram" />
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-4 col-sm-6 d-flex">
                        <div className="review">
                           <img src="https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/team-63b51038c233c.jpg" className="img-circle img-responsive" />
                           <h4 className="title">James K Taber</h4>
                           <h6 className="fs-7">Legal Adviser</h6>
                           <div className="d-flex gap-2">
                              <a href="https://www.facebook.com/" target="_blank">
                                 <div className="team-icon fac">
                                    <i className="fa-brands fa-facebook-f" />
                                 </div>
                              </a>
                              <a href="https://www.youtube.com/" target="_blank">
                                 <div className="team-icon twi">
                                    <i className="fa-brands fa-twitter" />
                                 </div>
                              </a>
                              <a href="https://www.instagram.com/" target="_blank">
                                 <div className="team-icon ins">
                                    <i className="fa-brands fa-instagram" />
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   )
}
