import React from 'react'
import Layout from '../../components/Layout'

export default function TermsConditions() {
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item "><a className="text-primary fw-bold" href="javascript:void(0)">Terms & Conditions</a> </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container text-justify mb-5">
               <h3 className="fw-bold fs-2 mb-4 text-primary">Terms & Conditions</h3>

               {/* 1. Introduction */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">1. Introduction</h4>
                  <p>
                     Welcome to <strong>Grocery Go</strong>. By accessing or using our website, you agree to comply with the following Terms & Conditions. Please read these terms carefully before using our services.
                  </p>
                  <p>
                     If you do not agree with any part of these terms, you should not access or use our website or services.
                  </p>
               </div>

               {/* 2. Use of Our Website */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">2. Use of Our Website</h4>
                  <p>
                     You agree to use our website for lawful purposes only. You are responsible for ensuring that your activities on our site do not:
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-ban text-danger me-2"></i> Violate any applicable laws or regulations</li>
                     <li><i className="fas fa-ban text-danger me-2"></i> Infringe upon the rights of other users or third parties</li>
                     <li><i className="fas fa-ban text-danger me-2"></i> Engage in any activity that could damage, disable, or impair the website</li>
                  </ul>
                  <p>
                     You must also provide accurate and complete information when creating an account or placing an order.
                  </p>
               </div>

               {/* 3. Orders and Payment */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">3. Orders and Payment</h4>
                  <p>
                     By placing an order on our website, you are making an offer to purchase the items in your cart. We reserve the right to accept or reject any order at our discretion.
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-credit-card text-success me-2"></i> Payment must be made in full before your order is processed</li>
                     <li><i className="fas fa-shipping-fast text-success me-2"></i> We accept various payment methods, including credit cards, debit cards, and online wallets</li>
                     <li><i className="fas fa-clipboard-check text-success me-2"></i> By placing an order, you confirm that the information provided is accurate</li>
                  </ul>
               </div>

               {/* 4. Limitation of Liability */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">4. Limitation of Liability</h4>
                  <p>
                     <strong>Grocery Go</strong> is not liable for any damages arising from the use of our website, including, but not limited to, lost profits, incidental, or consequential damages.
                  </p>
                  <p>
                     In the event of any issues with your order, we will make reasonable efforts to resolve the matter, but our total liability is limited to the amount paid for the order.
                  </p>
               </div>

               {/* 5. Changes to Terms */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">5. Changes to Terms</h4>
                  <p>
                     We reserve the right to modify or update these Terms & Conditions at any time. Any changes will be posted on this page, and the updated terms will be effective immediately upon posting.
                  </p>
                  <p>
                     We encourage you to review this page periodically to stay informed about any updates. Continued use of the website after changes are made indicates your acceptance of the new terms.
                  </p>
               </div>

               {/* 6. Governing Law */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">6. Governing Law</h4>
                  <p>
                     These Terms & Conditions are governed by the laws of Noida Up , India, without regard to its conflict of law principles. Any legal disputes will be resolved in the appropriate courts in Noida.
                  </p>
               </div>

               {/* 7. Contact Information */}
               <div>
                  <h4 className="fw-bold mb-3 text-dark">7. Contact Information</h4>
                  <p>
                     If you have any questions regarding these Terms & Conditions, please contact us at:
                  </p>
                  <p>
                     <strong>Email:</strong> <a href="mailto:support@yourgrocerybrand.com" className="text-primary">support@yourgrocerybrand.com</a>
                  </p>
               </div>
            </div>
         </section>

      </Layout>
   )
}
