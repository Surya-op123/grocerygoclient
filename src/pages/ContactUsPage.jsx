import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function ContactUsPage() {
   const [showModal, setShowModal] = useState(false);

   const handleOpen = () => setShowModal(true);
   const handleClose = () => setShowModal(false);
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="fw-bold text-dark" href="/">Home</a></li>
                        <li className="breadcrumb-item   text-primary fw-bold active" aria-current="page"> Help &amp; Contact us</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="contact-us">
               <div className="container">
                  <h3 className="fw-bold fs-2 mb-4 truncate-2">Contact us</h3>
                  <div className="contact-content">
                     <div className="d-md-flex">
                        <div className="col-md-6 col-12 p-5 left-side my-md-0 my-2 bg-primary">
                           <div className="col-12 my-1">
                              <div className="border-0 h-100 d-flex ">
                                 <h2 className="fw-bold text-white mb-0">Get in Touch</h2>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="border-0 pt-3 h-100 d-flex gap-3">
                                 <span className="icons"><i className="fa-solid fa-location-dot" /></span>
                                 <div className="col-xl-auto col-9">
                                    <h5 className="text-white mb-1">Address</h5>
                                    <Link className="text-white">456 Park Avenue, New York, NY 10022</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="border-0 pt-3 h-100 d-flex gap-3">
                                 <span className="icons"><i className="fa-solid fa-envelope" /></span>
                                 <div className="col-xl-auto col-9">
                                    <h5 className="text-white mb-1">Email</h5>
                                    <Link className=" text-white">abc@gmail.com</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="border-0 pt-3 h-100 d-flex gap-3">
                                 <span className="icons"><i className="fa-solid fa-phone" /></span>
                                 <div className="col-xl-auto col-9">
                                    <h5 className="text-white mb-1">Mobile</h5>
                                    <Link className="text-white">+91XXXXXXXXXX</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="border-0 pt-3 h-100 d-flex gap-3">
                                 <span className="icons"><i className="fa-solid fa-clock" /></span>
                                 <div className="col-xl-auto col-9">
                                    <h5 className="text-white mb-1">Working Hours</h5>
                                    <h6 className="text-white">Monday <span onClick={handleOpen} className="cursor-pointer" data-bs-toggle="modal" data-bs-target="#modal_working_hours"><i className="fa-solid fa-circle-info fs-6 text-white" /></span></h6>
                                    <div className="row ">
                                       <p className="col-auto text-white fs-7 fw-600">12:00 AM<b> To </b>01:00 PM</p>
                                       <p className="col-auto text-white fs-7 fw-600">01:00 PM<b> To </b>11:59 PM</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="mt-4">
                              <span className="fw-bold text-white mb-3 d-block">Social Share :</span>
                              <div className="social-links d-flex align-items-center gap-2">
                                 <a href="https://www.facebook.com" target="_blank"> <i className="fa-brands fa-facebook" /></a>
                                 <a href="https://www.google.com/" target="_blank"> <i className="fa-brands fa-instagram" /></a>
                                 <a href="https://www.instagram.com/" target="_blank"> <i className="fa-brands fa-linkedin-in" /></a>
                                 <a href="https://www.instagram.com/" target="_blank"> <i className="fa-brands fa-twitter" /></a>
                                 <a href="https://www.pinterest.com" target="_blank"> <i className="fa-brands fa-pinterest" /></a>
                                 <a href="https://www.tiktok.com" target="_blank"> <i className="fa-brands fa-tiktok" /></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-auto right-side">
                           <form method="POST" className="p-5" action="">
                              <input type="hidden" name="_token" defaultValue="" autoComplete="off" />
                              <div className="row">
                                 <p className="fs-2 fw-bold mb-2">Drop us a line</p>
                                 <span className="text-muted">Please feel free to contact me if you have any further questions or concerns</span>
                              </div>
                              <div className="mb-3 mt-sm-5 mt-4 form-group">
                                 <div className="row g-sm-3 g-2">
                                    <div className="col-6">
                                       <label  className="form-label mb-1">First Name<span className="text-danger">*</span></label>
                                       <input type="text" className="form-control" name="fname" placeholder="First Name" required />
                                    </div>
                                    <div className="col-6">
                                       <label  className="form-label mb-1">Last Name<span className="text-danger">*</span></label>
                                       <input type="text" className="form-control" name="lname" placeholder="Last Name" required />
                                    </div>
                                 </div>
                              </div>
                              <div className="mb-3 form-group">
                                 <label  className="form-label mb-1">Email<span className="text-danger">*</span></label>
                                 <input type="email" className="form-control" name="email" placeholder="Email" required />
                              </div>
                              <div className="mb-3 form-group">
                                 <label  className="form-label mb-1">Message<span className="text-danger">*</span></label>
                                 <textarea className="form-control" rows={2} name="message" placeholder="Message" required defaultValue={""} />
                              </div>
                              <div className="col-12">
                                 <div className="g-recaptcha" data-sitekey="6LePaW8qAAAAAHxktIoC3ZSBrnugeGNUPg6j0VBA"><div style={{ "width": "304px", "height": "78px" }}>
                                    <div> <iframe title="reCAPTCHA" width={304} height={78} role="presentation" name="a-vbgfla69uqv8" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LePaW8qAAAAAHxktIoC3ZSBrnugeGNUPg6j0VBA&co=aHR0cHM6Ly9ncm9jZXJ5Z28uaW5mb3RlY2hncmF2aXR5LmNvbTo0NDM.&hl=en&v=hbAq-YhJxOnlU-7cpgBoAJHb&size=normal&cb=2ztcjjykhwmf" /></div>
                                    <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ "width": "250px", "height": "40px", "border": "1px solid rgb(193, 193, 193)", "margin": "10px 25px", "padding": "0px", "resize": "none", "display": "none" }} defaultValue={""} />
                                 </div>
                                    <iframe style={{ "display": "none" }} />
                                 </div>
                              </div>
                              <div className="col-12 d-inline-block">
                                 <button type="submit" className="btn px-4 btn-primary float-end">Save</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className={`modal ${showModal ? 'show' : ''}`} id="modal_working_hours" aria-labelledby="working_hours_Label" aria-modal={showModal} role="dialog" style={{ display: showModal ? 'block' : 'none', paddingLeft: showModal ? '0px' : undefined, }}>
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header justify-content-between">
                     <h5 className="modal-title fw-500" id="working_hours_Label">Working Hours</h5>
                     <button type="button" className="btn-close m-0" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <ul className="list-group list-group-flush">
                        {[
                           { day: "Monday", times: ["12:00 AM To 01:00 PM", "01:00 PM To 11:59 PM"] },
                           { day: "Tuesday", times: ["12:00 AM To 01:00 PM", "01:00 PM To 11:59 PM"] },
                           { day: "Wednesday", times: ["12:00 AM To 01:00 PM", "01:00 PM To 10:00 PM"] },
                           { day: "Thursday", times: ["09:00 AM To 01:00 PM", "01:30 PM To 07:00 PM"] },
                           { day: "Friday", times: ["12:00 AM To 11:30 AM", "01:30 PM To 11:59 PM"] },
                           { day: "Saturday", times: ["12:00 AM To 01:00 PM", "01:00 PM To 11:59 PM"] },
                           { day: "Sunday", times: ["12:00 AM To 12:00 PM", "01:00 PM To 11:30 PM"] },
                        ].map(({ day, times }) => (
                           <li key={day} className="list-group-item d-flex justify-content-between px-sm-3 px-0">
                              {day}
                              <span>
                                 {times.map((t, i) => (
                                    <React.Fragment key={i}>{t}<br /></React.Fragment>
                                 ))}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-danger px-4 py-2 fs-7" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                  </div>
               </div>
            </div>
         </div>

      </Layout>
   )
}
