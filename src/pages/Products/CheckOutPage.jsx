import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout'
import CheckOutTimer from '../../components/CheckOutTimer'

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


export default function CheckOutPage() {
   const [orderType, setOrderType] = useState(1);
   const DeliveryDate = useRef(null);
   const PickupDate = useRef(null);

   const [selectedPayment, setSelectedPayment] = useState(1);

   useEffect(() => {
      if (window.flatpickr) {
         if (orderType === 1 && DeliveryDate.current) {
            window.flatpickr(DeliveryDate.current, {
               dateFormat: "M d, Y",
               minDate: "today",
            });
         }

         if (orderType === 2 && PickupDate.current) {
            window.flatpickr(PickupDate.current, {
               dateFormat: "M d, Y",
               minDate: "today",
            });
         }
      }
   }, [orderType]);


   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark" href="/">Home</a></li>
                        <li className="breadcrumb-item  text-primary fw-bold active" aria-current="page">Checkout</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-4">
            <div className="container">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">Checkout</h3>

               <CheckOutTimer />

               <div className="cart-view">
                  <div className="row">
                     <div className="col-lg-8 order-md2">
                        <div className="card mb-3 address-view">
                           <div className="card-body">
                              <div className="heading mb-3 border-bottom"><h2>Order Type</h2></div>
                              <div className="order-option gap-3">
                                 <div className="col-12 d-flex gap-3">
                                    <div className="form-check form-check-inline mb-0">
                                       <input className="form-check-input" type="radio" name="order_type" value={1} id="delivery" checked={orderType === 1} onChange={() => setOrderType(1)} />
                                       <label className={`form-check-label fs-7 fw-500 tab-style`} htmlFor="delivery"> Delivery</label>
                                    </div>

                                    <div className="form-check form-check-inline mb-0">
                                       <input className="form-check-input" type="radio" name="order_type" value={2} id="pickup" checked={orderType === 2} onChange={() => setOrderType(2)} />
                                       <label className={`form-check-label fs-7 fw-500 tab-style`} htmlFor="pickup"> Take away</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="card mb-3 date-view">
                           <div className="card-body">
                              <div className="heading mb-3 border-bottom">
                                 <h2>Date &amp; Time</h2>
                              </div>
                              <div>
                                 <div className="row g-3">
                                    <div className="col-sm-6 delivery-date ">
                                       {orderType === 1 && (<>
                                          <label className="form-label justify-content-start fw-semibold">Delivery Date</label>
                                          <input ref={DeliveryDate} className="form-control rounded-2 p-3 delivery_pickup_date flatpickr-input" placeholder="M dd, yyyy" name="delivery_date" type="text" />
                                       </>)}

                                       {orderType === 2 && (<>
                                          <label className="form-label justify-content-start fw-semibold">Pickup Date</label>
                                          <input ref={PickupDate} className="form-control rounded-2 p-3 delivery_pickup_date input" placeholder="M dd, yyyy" tabIndex={0} type="text" />
                                       </>)}
                                    </div>

                                    <div className="col-sm-6 delivery-time ">

                                       {orderType === 1 && (<>
                                          <label className="form-label justify-content-start fw-semibold">Delivery time</label>
                                       </>)}

                                       {orderType === 2 && (<>
                                          <label className="form-label justify-content-start fw-semibold">Pickup Time</label>
                                       </>)}
                                       <label id="store_close" className="d-none form-label text-danger label14"> Store is closed. Try other date!</label>

                                       <select name="delivery_time" id="select_delivery_time" className="form-select rounded-2 py-3">
                                          <option value> Select</option>
                                          <option value="12:00 AM - 12:45 AM">12:00 AM - 12:45 AM</option>
                                          <option value="12:45 AM - 01:30 AM">12:45 AM - 01:30 AM</option>
                                          <option value="01:30 AM - 02:15 AM">01:30 AM - 02:15 AM</option>
                                          <option value="02:15 AM - 03:00 AM">02:15 AM - 03:00 AM</option>
                                          <option value="03:00 AM - 03:45 AM">03:00 AM - 03:45 AM</option>
                                          <option value="03:45 AM - 04:30 AM">03:45 AM - 04:30 AM</option>
                                          <option value="04:30 AM - 05:15 AM">04:30 AM - 05:15 AM</option>
                                          <option value="05:15 AM - 06:00 AM">05:15 AM - 06:00 AM</option>
                                          <option value="06:00 AM - 06:45 AM">06:00 AM - 06:45 AM</option>
                                          <option value="06:45 AM - 07:30 AM">06:45 AM - 07:30 AM</option>
                                          <option value="07:30 AM - 08:15 AM">07:30 AM - 08:15 AM</option>
                                          <option value="08:15 AM - 09:00 AM">08:15 AM - 09:00 AM</option>
                                          <option value="09:00 AM - 09:45 AM">09:00 AM - 09:45 AM</option>
                                          <option value="09:45 AM - 10:30 AM">09:45 AM - 10:30 AM</option>
                                          <option value="10:30 AM - 11:15 AM">10:30 AM - 11:15 AM</option>
                                          <option value="11:15 AM - 12:00 PM">11:15 AM - 12:00 PM</option>
                                          <option value="12:00 PM - 12:45 PM">12:00 PM - 12:45 PM</option>
                                          <option value="01:00 PM - 01:45 PM">01:00 PM - 01:45 PM</option>
                                          <option value="01:45 PM - 02:30 PM">01:45 PM - 02:30 PM</option>
                                          <option value="02:30 PM - 03:15 PM">02:30 PM - 03:15 PM</option>
                                          <option value="03:15 PM - 04:00 PM">03:15 PM - 04:00 PM</option>
                                          <option value="04:00 PM - 04:45 PM">04:00 PM - 04:45 PM</option>
                                          <option value="04:45 PM - 05:30 PM">04:45 PM - 05:30 PM</option>
                                          <option value="05:30 PM - 06:15 PM">05:30 PM - 06:15 PM</option>
                                          <option value="06:15 PM - 07:00 PM">06:15 PM - 07:00 PM</option>
                                          <option value="07:00 PM - 07:45 PM">07:00 PM - 07:45 PM</option>
                                          <option value="07:45 PM - 08:30 PM">07:45 PM - 08:30 PM</option>
                                          <option value="08:30 PM - 09:15 PM">08:30 PM - 09:15 PM</option>
                                          <option value="09:15 PM - 10:00 PM">09:15 PM - 10:00 PM</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="card mb-3 Info-view" id="customerinfodiv">
                           <div className="card-body">
                              <div className="heading mb-3 border-bottom"><h2>Customer Info</h2></div>
                              <div className="row g-3">
                                 <div className="col-md-6">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First Name" required />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last Name" required />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" name="email" id="email" placeholder="Email" required />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Mobile" required />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className={`card mb-3 Delivery-view ${orderType === 1 ? "" : "d-none"}`} id="addressdiv">
                           <div className="card-body">
                              <div className="d-flex justify-content-between align-items-center heading mb-3 border-bottom"><h2>Delivery address</h2></div>
                              <div className="row g-3">

                                 <div className="col-9">
                                    <label className="form-label">Select Address</label>
                                    <select name="address_type" id="address_type" className="form-select">
                                       <option value={5}>ppp</option>
                                       <option value={4}>qqq</option>
                                       <option value={3}>ssss</option>
                                    </select>
                                 </div>

                                 <div className="col-3 py-4">
                                    <a href="/address" type="button" className="btn btn-address mt-2 w-100"><i className="fa-solid fa-plus mx-1" />Add Address</a>
                                 </div>

                                 <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <textarea name="address" id="new_address" className="form-control mb-0" rows={6} placeholder="Address" required defaultValue={""} />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input type="text" className="form-control" name="country" id="new_country" placeholder="Country" />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" name="city" id="new_city" placeholder="City" />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" name="state" id="new_state" placeholder="State" />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="landmark" className="form-label">Landmark</label>
                                    <input type="text" className="form-control" name="landmark" id="new_landmark" placeholder="Landmark" />
                                 </div>
                                 <div className="col-md-6">
                                    <label htmlFor="pincode" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" name="pincode" id="new_pincode" placeholder="Pincode" required />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="payment-option mb-3 border">
                           <div className="heading mb-3 border-bottom"><h2>Choose payment method</h2></div>
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

                           <div className="row g-3 justify-content-between mt-4 align-items-center">
                              <div className="align-items-center col-sm-6 col-12">
                                 <a href="/" className="btn btn-outline-primary w-100"><i className="fa-solid fa-circle-arrow-left me-2" />Continue Shopping</a>
                              </div>
                              <div className="align-items-center col-sm-6 col-12">
                                 <a href='/order-details' className="btn btn-primary w-100 d-flex gap-3 justify-content-center align-items-center checkout">Proceed to pay
                                    <div className="loader d-none checkout_loader" />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 order-md1">
                        <div className="promocode mb-4 py-4 card">
                           <div className="d-flex pb-2 border-bottom justify-content-between align-items-center mb-3">
                              <div className="col-auto"><label htmlFor="offer_code">Apply Coupon</label></div>
                           </div>
                           <div className="row justify-content-between align-items-center">
                              <form action="" method="post">
                                 <input type="hidden" name="_token" defaultValue="YKVxsaFuMmsDVBpy2TkQ42Fn7pvXtc3PkRtdJYnG" autoComplete="off" />                                            <div className="d-flex">
                                    <input type="hidden" name="order_amount" defaultValue={1080} />
                                    <input type="text" className="form-control" name="offer_code" id="offer_code" placeholder="Have a coupon?" readOnly />
                                    <button type="submit" className="btn btn-primary border-0 mb-0 px-sm-4 px-2 py-2 ms-2">Apply</button>
                                 </div>
                              </form>
                           </div>
                        </div>

                        <div className="summary py-3 mb-4 border">
                           <h2 className="border-bottom">Payment summary</h2>
                           <div className="bill-details border-bottom pb-2">
                              <div className="row justify-content-between align-items-center">
                                 <div className="col-auto"><span className="fw-500 fs-7">Subtotal</span></div>
                                 <div className="col-auto"><p className="fw-500 fs-7">₹1,080.00</p></div>
                              </div>
                              <div className="row justify-content-between align-items-center">
                                 <div className="col-auto"><span className="fw-500 fs-7">SGST</span></div>
                                 <div className="col-auto"><p className="fw-500 fs-7"> ₹16.20</p></div>
                              </div>
                              <div className="row justify-content-between align-items-center">
                                 <div className="col-auto"><span className="fw-500 fs-7">CGST</span></div>
                                 <div className="col-auto"><p className="fw-500 fs-7"> ₹16.20</p></div>
                              </div>
                              <div className="row justify-content-between align-items-center d-none">
                                 <div className="col-auto"><span className="fw-500 fs-7">Delivery fee</span></div>
                                 <div className="col-auto"><p className="delivery_charge fw-500 fs-7">₹60.00</p></div>
                              </div>
                           </div>
                           <div className="bill-total mt-2">
                              <div className="row justify-content-between align-items-center">
                                 <div className="col-auto"><span>Total Amount</span></div>
                                 <div className="col-auto"><span className="grand_total" id="total_amount">₹1112.40</span></div>
                              </div>
                           </div>
                        </div>

                        <div className="special-instruction mb-3 border">
                           <label className="form-label mb-3 border-bottom pb-2 w-100" htmlFor="order_notes">Special instruction</label>
                           <textarea className="form-control" name="order_notes" id="order_notes" rows={3} placeholder="Special instruction" defaultValue={""} />
                        </div>

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
               </div>
            </div>
         </section>

      </Layout >
   )
}
