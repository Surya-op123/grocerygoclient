import React from 'react'
import Layout from '../../components/Layout'

export default function RefundPolicy() {
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item "><a className="text-primary fw-bold" href="javascript:void(0)">Refund Policy</a> </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container text-justify mb-5">
               <h3 className="fw-bold fs-2 mb-4 text-primary">Refund Policy</h3>

               {/* 1. Eligibility for Refunds */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">1. Eligibility for Refunds</h4>
                  <p>
                     We strive to deliver the highest quality products. If you're not satisfied with your order due to damage, spoilage, incorrect items, or quality issues, you're eligible to request a refund or replacement.
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-check-circle text-success me-2"></i> Perishable items must be reported within 24 hours of delivery</li>
                     <li><i className="fas fa-check-circle text-success me-2"></i> Non-perishable items within 3 days of delivery</li>
                     <li><i className="fas fa-check-circle text-success me-2"></i> Proof of issue (photo/video) may be required</li>
                  </ul>
               </div>

               {/* 2. Non-Refundable Items */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">2. Non-Refundable Items</h4>
                  <p>
                     To maintain hygiene and safety standards, the following items are not eligible for refunds:
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-times-circle text-danger me-2"></i> Fresh fruits and vegetables (unless spoiled or damaged)</li>
                     <li><i className="fas fa-times-circle text-danger me-2"></i> Opened or partially used products</li>
                     <li><i className="fas fa-times-circle text-danger me-2"></i> Items purchased during clearance or final sale</li>
                  </ul>
               </div>

               {/* 3. How to Request a Refund */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">3. How to Request a Refund</h4>
                  <p>
                     If you need to request a refund, please follow these simple steps:
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-envelope text-success me-2"></i> Email us at <a href="mailto:support@yourgrocerybrand.com" className="text-primary">support@yourgrocerybrand.com</a></li>
                     <li><i className="fas fa-camera text-success me-2"></i> Attach a photo or description of the issue</li>
                     <li><i className="fas fa-receipt text-success me-2"></i> Include your order number and contact details</li>
                  </ul>
                  <p>
                     Our support team will review your request and respond within 24–48 hours.
                  </p>
               </div>

               {/* 4. Refund Processing */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">4. Refund Processing</h4>
                  <p>
                     Once approved, refunds will be processed through your original payment method or as store credit, depending on your preference.
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-wallet text-success me-2"></i> Refunds typically reflect in your account within 5–7 business days</li>
                     <li><i className="fas fa-gift text-success me-2"></i> Store credits are available immediately upon approval</li>
                     <li><i className="fas fa-info-circle text-success me-2"></i> Delivery charges are non-refundable (unless delivery was unsuccessful)</li>
                  </ul>
                  <p>
                     We appreciate your understanding and are always here to ensure your satisfaction.
                  </p>
               </div>
            </div>
         </section>

      </Layout>
   )
}
