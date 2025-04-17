import React from 'react'

export default function CheckOutGuest({ open, close }) {

   return (<>
      <div className={`modal ${open ? "show" : ""}`} id="useroption" tabIndex={-1} aria-labelledby="useroptionLabel" aria-modal="true" role="dialog" style={{ display: open ? "block" : "", paddingLeft: "0px" }}>
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header justify-content-between">
                  <h5 className="modal-title fw-500" id="useroptionLabel">Checkout as Guest</h5>
                  <button type="button" onClick={close} className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close" />
               </div>
               <div className="modal-body">
                  <p className="fs-7 twoline">Don't have an account? Don't worry! You can complete your checkout process as a guest &amp; choose to create an account later</p>
                  <div className="row g-2 justify-content-start social-share-icon mt-3">
                     <div className="col-md-6 col-12">
                        <a className="btn btn-outline-dark w-100 p-2" href="/login" type="button">
                           <i className="fa-solid fa-user-plus" />
                           <span className="px-2">Create Account</span>
                        </a>
                     </div>
                     <div className="col-md-6 col-12">
                        <a className="btn btn-primary w-100 p-2" href='/checkout'>
                           <i className="fa-solid fa-address-card" />
                           <span className="px-2">Continue As Guest</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {open && <div onClick={close} className="offcanvas-backdrop fade show" />}
   </>)
}
