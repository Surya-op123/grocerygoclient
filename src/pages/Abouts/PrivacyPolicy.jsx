import React from 'react'
import Layout from '../../components/Layout'

export default function PrivacyPolicy() {
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item "><a className="text-primary fw-bold" href="javascript:void(0)">Privacy Policy</a> </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container text-justify mb-5">
               <h3 className="fw-bold fs-2 mb-4 text-primary">Privacy Policy</h3>

               {/* 1. Information We Collect */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">1. Information We Collect</h4>
                  <p>
                     We collect personal information you provide when creating an account, placing an order, or contacting our support team. This includes:
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-check-circle text-success me-2"></i> Name, email, and phone number</li>
                     <li><i className="fas fa-check-circle text-success me-2"></i> Shipping and billing addresses</li>
                     <li><i className="fas fa-check-circle text-success me-2"></i> Payment method details (securely processed)</li>
                     <li><i className="fas fa-check-circle text-success me-2"></i> Order history and preferences</li>
                  </ul>
               </div>

               {/* 2. How We Use Your Information */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">2. How We Use Your Information</h4>
                  <p>
                     We use the collected information to improve your shopping experience and fulfill our services. Specifically, we may use your data to:
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-bullseye text-success me-2"></i> Process and deliver your orders</li>
                     <li><i className="fas fa-envelope-open-text text-success me-2"></i> Send updates and promotions (only with your consent)</li>
                     <li><i className="fas fa-user-shield text-success me-2"></i> Enhance security and prevent fraud</li>
                     <li><i className="fas fa-chart-line text-success me-2"></i> Improve our website and customer service</li>
                  </ul>
               </div>

               {/* 3. Sharing & Security */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">3. Sharing & Security</h4>
                  <p>
                     We respect your privacy and never sell or rent your information to third parties. We only share necessary data with:
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-truck text-success me-2"></i> Delivery partners for order fulfillment</li>
                     <li><i className="fas fa-credit-card text-success me-2"></i> Payment gateways to process secure transactions</li>
                     <li><i className="fas fa-cogs text-success me-2"></i> Service providers assisting in technical operations</li>
                  </ul>
                  <p>
                     Your data is protected with encryption and secure servers to prevent unauthorized access or misuse.
                  </p>
               </div>

               {/* 4. Your Rights & Choices */}
               <div className="mb-5">
                  <h4 className="fw-bold mb-3 text-dark">4. Your Rights & Choices</h4>
                  <p>
                     You have full control over your data. You can:
                  </p>
                  <ul className="list-unstyled ps-3">
                     <li><i className="fas fa-edit text-success me-2"></i> Access and update your personal information anytime</li>
                     <li><i className="fas fa-bell-slash text-success me-2"></i> Opt out of marketing emails or SMS</li>
                     <li><i className="fas fa-user-times text-success me-2"></i> Request account deletion or data removal</li>
                  </ul>
                  <p>
                     For any privacy-related concerns, feel free to contact our support team at <a href="mailto:support@yourgrocerybrand.com" className="text-primary">support@yourgrocerybrand.com</a>.
                  </p>
               </div>
            </div>
         </section>


      </Layout>
   )
}
