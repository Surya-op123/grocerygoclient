import React from 'react'
import Layout from '../../components/Layout'

export default function Faq() {
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item "><a className="text-primary fw-bold" href="javascript:void(0)">FAQs</a> </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container faq">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">FAQs</h3>
               <div className="d-lg-flex justify-content-center">
                  <div className="col-lg-6 col-12 p-2 faq-img">
                     <img src="/assets/img/about/faq_image.png" className="w-100" alt="" />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                     <div className="accordion faq" id="faqleft">
                        <div className="accordion-item border rounded mb-3">
                           <h2 className="accordion-header" id="faq0">
                              <button className="accordion-button rounded mb-0" type="button" data-bs-toggle="collapse" data-bs-target="#faqs0" aria-expanded="true" aria-controls="collapseOne">
                                 Will I get the App in App store or google play?
                              </button>
                           </h2>
                           <div id="faqs0" className="accordion-collapse collapse show" aria-labelledby="faq0" data-bs-parent="#faqleft">
                              <div className="accordion-body fs-7 text-muted fw-600">Yes, we will create the apk as per your name and customers will search you or your store in App store/Google play to download the App.</div>
                           </div>
                        </div>
                        <div className="accordion-item border rounded mb-3">
                           <h2 className="accordion-header" id="faq1">
                              <button className="accordion-button rounded mb-0 collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#faqs1" aria-expanded="false" aria-controls="collapseOne">
                                 How to setup the App for my shop?
                              </button>
                           </h2>
                           <div id="faqs1" className="accordion-collapse collapse " aria-labelledby="faq1" data-bs-parent="#faqleft">
                              <div className="accordion-body fs-7 text-muted fw-600">Implementation will be taken care by our team. If you want we will supply you with the training manuals. Grocers App back-end is user friendly and you can setup the whole operations within few hours.</div>
                           </div>
                        </div>
                        <div className="accordion-item border rounded mb-3">
                           <h2 className="accordion-header" id="faq2">
                              <button className="accordion-button rounded mb-0 collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#faqs2" aria-expanded="false" aria-controls="collapseOne">
                                 Can I customize the solution?
                              </button>
                           </h2>
                           <div id="faqs2" className="accordion-collapse collapse " aria-labelledby="faq2" data-bs-parent="#faqleft">
                              <div className="accordion-body fs-7 text-muted fw-600">We have provided few options to customize the app. For further details, kindly contact our help desk.</div>
                           </div>
                        </div>
                        <div className="accordion-item border rounded mb-3">
                           <h2 className="accordion-header" id="faq3">
                              <button className="accordion-button rounded mb-0 collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#faqs3" aria-expanded="false" aria-controls="collapseOne">
                                 Who will manage customers in the App?
                              </button>
                           </h2>
                           <div id="faqs3" className="accordion-collapse collapse " aria-labelledby="faq3" data-bs-parent="#faqleft">
                              <div className="accordion-body fs-7 text-muted fw-600">Unlike other e-commerce companies, here the customer belongs to you only. You will be managing the customer details, orders and payments. We will supply you mobile app to run your business.</div>
                           </div>
                        </div>
                        <div className="accordion-item border rounded mb-3">
                           <h2 className="accordion-header" id="faq4">
                              <button className="accordion-button rounded mb-0 collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#faqs4" aria-expanded="false" aria-controls="collapseOne">
                                 Will this App white labeled for my store?
                              </button>
                           </h2>
                           <div id="faqs4" className="accordion-collapse collapse " aria-labelledby="faq4" data-bs-parent="#faqleft">
                              <div className="accordion-body fs-7 text-muted fw-600">Yes, Grocers App is for your business. You can put your banners and select the theme as per your discretion.</div>
                           </div>
                        </div>
                        <div className="accordion-item border rounded mb-3">
                           <h2 className="accordion-header" id="faq5">
                              <button className="accordion-button rounded mb-0 collapsed  " type="button" data-bs-toggle="collapse" data-bs-target="#faqs5" aria-expanded="false" aria-controls="collapseOne">
                                 What is Grocers App ?
                              </button>
                           </h2>
                           <div id="faqs5" className="accordion-collapse collapse " aria-labelledby="faq5" data-bs-parent="#faqleft">
                              <div className="accordion-body fs-7 text-muted fw-600">Grocers App is a mobile application developed by Gravity Infotech. The primary goal is to empower small shops, local grocery stores and other businesses that are getting hit because of rise of e-commerce giants. Grocers App will help the local shops to market their products online and managing the complete life cycle of the buying process.</div>
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
