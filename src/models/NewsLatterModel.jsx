import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ShowToast from '../components/ShowToast';

export default function NewsletterModal({ close, show }) {
   const { subscribeToNewsletter } = useAuth();

   const [emailNewsletter, setEmailNewsletter] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await subscribeToNewsletter(emailNewsletter);
      ShowToast({ message: result.message, type: result.success });
      if (result.success === "success") setEmailNewsletter('');
      close();
   };

   if (!show) return null;

   return (
      <div className="modal show" id="subscriptionModal" tabIndex={-1} aria-labelledby="subscriptionModal" aria-modal="true" role="dialog" style={{ display: 'block' }}>
         <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-3 overflow-hidden">
               <div className="modal-body p-0 position-relative">
                  <button type="button" className="btn-close btn-sm m-0" data-bs-dismiss="modal" aria-label="Close" onClick={close} style={{ position: "absolute", right: 0, padding: "10px" }} />
                  <div className="row g-0 align-items-center justify-content-between">
                     <div className="col-6 d-none d-lg-block">
                        <img src="/assets/img/about/auth_bg_image.png" alt="Newsletter" className="w-100 object-fit-cover newslatter-img" />
                     </div>
                     <div className="col-lg-6 col-12">
                        <div className="py-5 px-sm-5 px-4">
                           <span className="fs-7 fs-500">Newsletter</span>
                           <h2 className="subscribe-title mt-1">Subscribe</h2>
                           <p className="text-dark fw-500 fs-7 mb-4">Receive our latest updates about our products &amp; promotions.</p>
                           <form onSubmit={handleSubmit} className="mb-0">
                              <label className="text-black form-label fs-7 mb-1">Email</label>
                              <div className="input-group mb-4">
                                 <input type="text" className="form-control border text-dark fw-500 bg-light" name="email" placeholder="Email" required value={emailNewsletter} onChange={(e) => setEmailNewsletter(e.target.value)} />
                              </div>
                              <button type="submit" className="btn btn-sm btn-secondary rounded-3 px-4 w-100 newsletter-btn" id="basic-addon2">Subscribe</button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
