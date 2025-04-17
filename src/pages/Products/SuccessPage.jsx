import React from 'react'
import Layout from '../../components/Layout'

export default function SuccessPage() {

   const message = `
    Hi,
    
    I would like to place an order 👇
    Delivery Order No: PITS1015
    
    ---------------------------  
    
    🔵 Nescafe Classic Instant Coffee - Pack of 60 Sachet X 1 - ₹88.00
    
    --------------------------- 
    
    👉SGST: ₹7.92
    👉CGST: ₹7.92
    👉Delivery charge: ₹60.00
    👉Discount: - ₹0.00
    
    --------------------------- 
    📃 Total: ₹163.84
    --------------------------- 
    📄 Comment:
    
    ✅ Customer Info  
    
    Customer name: sssss
    Customer phone: 9653388914
    
    📍 Delivery Address: sss , ewe , wqq, sssd, rqr, 234112
    
    --------------------------- 
    
    💳 Payment type: RazorPay
    💳 Order type: Delivery
    
    We will confirm your order upon receiving the message.  
    
    Track your order 👇
    https://grocerygo.infotechgravity.com/order-PITS1015
    
    Click here for next order 👇
    https://grocerygo.infotechgravity.com
  `;

   const encodedMessage = encodeURIComponent(message.trim());
   const whatsappLink = `https://api.whatsapp.com/send?phone=919651100914&text=₹{encodedMessage}`;

   return (
      <Layout>
         <section className="success">
            <div className="container">
               <div className="row justify-content-center text-center">
                  <div className="col-xxl-8 col-xl-9 col-md-10">
                     <div className="success-image">
                        <img src="/assets/img/success.gif"  alt=''/>
                     </div>
                     <div >
                        <h4 className="fw-600 mb-3 mt-2">Order placed</h4>
                        <p>Thank you for your order. Your order is on its way to delight your taste buds!</p>
                     </div>
                     <div className="row g-3 justify-content-center mt-3">
                        <div className="col-sm-auto col-12"><a href="/" className="btn w-100 btn-secondary px-4 py-2 text-capitalize">Continue Shopping</a></div>
                        <div className="col-sm-auto col-12"><a href={whatsappLink} target="_blank" className="btn w-100 btn-outline-primary px-4 py-2 text-capitalize">Send order on whatsapp</a></div>
                        <div className="col-sm-auto col-12"><a href="/order-details" className="btn w-100 btn-primary px-4 py-2 text-capitalize">Track Order Now</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   )
}
