import React, { useEffect } from 'react';

export default function OfferSidebar({ close, open }) {
   useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : 'auto';
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, [open]);

   return (<>
      <div className="offer">
         <div className={`offcanvas offcanvas-end ${open ? 'show' : ''}`} id="offcanvasOffer" aria-modal={open} role="dialog">
            <div className="offcanvas-header justify-content-between border-bottom bg-light">
               <div className="d-flex gap-2 align-items-center">
                  <i className="fa-sharp fa-solid fa-badge-percent fs-5" />
                  <h5 className="offcanvas-title fw-bold" id="offcanvasOfferLabel">Offers</h5>
               </div>
               <button onClick={close} type="button" className="btn-close m-0" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
               <div className="row g-3">
                  {[
                     {
                        label: 'GET 20%',
                        title: 'Every Friday 20% Discounts',
                        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                     },
                     {
                        label: 'GET 25%',
                        title: 'First Grocery Online Order 25% Off',
                        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                     },
                     {
                        label: 'GET 10%',
                        title: 'Excellent Offer For Shop',
                        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                     },
                  ].map((offer, index) => (
                     <div className="col-12" key={index}>
                        <div className="card">
                           <div className="card-body">
                              <div className="d-flex justify-content-between">
                                 <span className="coupons-label">{offer.label}</span>
                              </div>
                              <h6 className="pt-2 mb-0 offer-text fw-600">{offer.title}</h6>
                              <p className="text-muted fw-500 fs-8 pt-2 mb-0">{offer.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {open && <div className="offcanvas-backdrop fade show" onClick={close} />}
   </>);
}