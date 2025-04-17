import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

const paymentMethods = [
   { id: 4, name: 'Stripe', image: '/assets/img/about/payment-65893b4da12e0.png', currency: 'USD', showForm: true },
   { id: 1, name: 'COD', image: '/assets/img/about/payment-65893b4da08fa.png' },
   { id: 5, name: 'Flutterwave', image: '/assets/img/about/payment-65893b4da17ce.png', currency: 'NGN' },
   { id: 3, name: 'RazorPay', image: '/assets/img/about/payment-65893b4da0e7e.png', currency: 'INR' },
   { id: 6, name: 'Paystack', image: '/assets/img/about/payment-65893b4da1ce4.png', currency: 'GHS' },
   { id: 7, name: 'MercadoPago', image: '/assets/img/about/payment-667d4d89d3562.png', currency: 'R$' },
   { id: 8, name: 'MyFatoorah', image: '/assets/img/about/payment-667d4d80d6415.png', currency: 'KWD' },
   { id: 9, name: 'Paypal', image: '/assets/img/about/payment-6673cd38139d5.png', currency: 'USD' },
   { id: 10, name: 'ToyyibPay', image: '/assets/img/about/payment-6673cd40b19dd.png', currency: 'INR' },
   { id: 11, name: 'Paytab', image: '/assets/img/about/payment-6673cd499e08a.png', currency: 'INR' },
   { id: 12, name: 'Phonepe', image: '/assets/img/about/payment-6673cd59717e7.png', currency: 'INR' },
   { id: 13, name: 'Mollie', image: '/assets/img/about/payment-6673cd62a0be5.png', currency: 'EUR' },
   { id: 14, name: 'Khalti', image: '/assets/img/about/payment-6673cf9a147eb.png', currency: 'INR' },
   { id: 15, name: 'Xendit', image: '/assets/img/about/payment-671c98f20d9eb.png', currency: 'INR' },
   { id: 16, name: 'Bank Transfer', image: '/assets/img/about/payment-666c1060c136c.png', currency: 'INR' },
];

export default function AddMoney() {
   const [selectedPayment, setSelectedPayment] = useState(1);

   return (
      <AuthLayout title={'Add Money'} body={
         <div className="col-lg-9">
            <div className="user-content-wrapper">
               <div className="row">
                  <div><p className="title pb-2 border-bottom">Add Money</p></div>
               </div>
               <div className="row mb-2">
                  <div className="form-group">
                     <label  className="form-label">Amount</label>
                     <div className="input-group gap-2 border-bottom mb-3 pb-3">
                        <span className="input-group-text rounded px-4">₹</span>
                        <input type="text" className="form-control rounded" name="amount" id="amount" placeholder="Please enter amount" />
                     </div>
                  </div>
               </div>
               <div className="row justify-content-between align-items-center">
                  <div className="col-xl-6 col-12">
                     <p className="mb-0">Notes :</p>
                     <ul>
                        <li className="text-muted">
                           <i className="fa-regular fa-circle-check mx-2 text-success" />
                           Wallet money Cannot Be Transferred to Your Account.
                        </li>
                        <li className="text-muted">
                           <i className="fa-regular fa-circle-check mx-2 text-success" />
                           You can use Wallet Money only for orders
                        </li>
                     </ul>
                  </div>

                  <div className="col-xl-6 col-12">
                     <div className="col-12 py-4 p-3 my-3 sevirce-trued">
                        <div className="d-flex mb-2 pb-1 flex-wrap gap-2 justify-content-center aling-items-center">
                           <div className="sevirce-tru">
                              <div className="img"><img className="border rounded-2" src="/assets/img/about/payment-65893b4da12e0.png" alt='' /></div>
                           </div>
                           <div className="sevirce-tru">
                              <div className="img"><img className="border rounded-2" src="/assets/img/about/payment-6673cd7ac0a18.png" alt='' /></div>
                           </div>
                           <div className="sevirce-tru">
                              <div className="img"><img className="border rounded-2" src="/assets/img/about/payment-667d4d89d3562.png" alt='' /></div>
                           </div>
                           <div className="sevirce-tru">
                              <div className="img"><img className="border rounded-2" src="/assets/img/about/payment-6673cd40b19dd.png" alt='' /></div>
                           </div>
                           <div className="sevirce-tru">
                              <div className="img"><img className="border rounded-2" src="/assets/img/about/payment-6673cd62a0be5.png" alt='' /></div>
                           </div>
                           <div className="sevirce-tru">
                              <div className="img"><img className="border rounded-2" src="/assets/img/about/payment-671c98f20d9eb.png" alt='' /></div>
                           </div>
                        </div>
                        <h6 className="fs-15 text-center fw-normal" style={{ "color": "#bf1d1d" }}>Your Payment is 100% Secure</h6>
                     </div>
                  </div>
               </div>

               <div className="payment-option mb-3">
                  <div className="paymenterror alert alert-danger my-2 py-1 d-none"> Please select payment type</div>
                  <div className="row g-3 justify-content-between">
                     {paymentMethods.map((method) => (<>
                        <label className="form-check-label col-md-6" htmlFor={`payment${method.id}`} key={method.id}>
                           <input className="form-check-input" type="radio" name="transaction_type" id={`payment${method.id}`} data-payment-type={method.id} value={method.id} data-currency={method.currency || ''} checked={selectedPayment === method.id} onChange={() => setSelectedPayment(method.id)} />
                           <div className="payment-gateway mb-0 justify-content-between">
                              <span><img src={method.image} alt={method.name} />{method.name}</span>
                              <div className="d-flex gap-2"><span className="check-icon fa fa-check" /></div>
                           </div>
                        </label>
                        {method.showForm &&
                           <form id="payment-form" className={`${selectedPayment === 4 ? "" : "d-none"}`}>
                              <div className="my-3 StripeElement StripeElement--empty" id="card-element">
                                 <div className="__PrivateStripeElement" style={{ "margin": "0px !important", "padding": "0px !important", "border": "none !important", "display": "block !important", "background": "transparent !important", "position": "relative !important", "opacity": "1 !important" }}>
                                    <iframe name="__privateStripeFrame4173" frameBorder={0} allowTransparency="true" scrolling="no" role="presentation" allow="payment *" src="https://js.stripe.com/v3/elements-inner-card-c3f32965bf192f734b324c6341db61de.html#__shared_params__[version]=v3&wait=false&mids[guid]=NA&mids[muid]=757f34be-7571-4602-9ff5-34be457db78595df81&mids[sid]=a2acbd49-0972-4b25-a6e0-11c5e7f8a4273413c7&style[base][fontSize]=16px&style[base][color]=%2332325D&rtl=false&componentName=card&keyMode=test&apiKey=pk_test_51IjNgIJwZppK21ZQa6e7ZVOImwJ2auI54TD6xHici94u7DD5mhGf1oaBiDyL9mX7PbN5nt6Weap4tmGWLRIrslCu00d8QgQ3nI&referrer=https%3A%2F%2Fgrocerygo.infotechgravity.com%2Fcheckout%3Fbuynow%3D0&controllerId=__privateStripeController4171" title="Secure card payment input frame" style={{ "margin-top": "-4e-05px" }} />
                                 </div>
                              </div>
                           </form>}
                     </>))}
                  </div>
               </div>

               <div className="d-flex justify-content-end align-items-center">
                  <div className="col-md-auto col-12">
                     <button className="btn btn-primary px-4 d-flex gap-3 justify-content-center align-items-center add_wallet">PROCEED TO PAY
                        <div className="loader d-none add_wallet_loader" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      } />
   )
}
