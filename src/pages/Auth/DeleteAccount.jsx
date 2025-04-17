import React from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function DeleteAccount() {
   return (
      <AuthLayout title={'Delete Account'} body={
         <div className="col-xl-3 col-lg-8 col-xxl-9 col-12 deleteprofile">
            <div className="card border">
               <div className="settings-box-header border-bottom px-4 py-3">
                  <h5 className="text-dark m-0 profile-title"><i className="fa fa-trash" /><span className="px-2">Delete Account</span></h5>
               </div>
               {/* Card body START */}
               <div className="card-body">
                  <h6 className="fw-bold text-dark mb-1">Before you go...</h6>
                  <ol>
                     <li className="text-muted">Take a backup of your data <a href="#">Here</a> </li>
                     <li className="text-muted">If you delete your account, you will lose your all data.</li>
                  </ol>
                  <div className="form-check form-check-md my-4 text-muted">
                     <input className="form-check-input p-0" type="checkbox" id="delete_account" />
                     <label className="form-check-label text-muted" htmlFor="delete_account">Yes, I'd like to delete my account</label>
                  </div>
                  <div className="d-md-flex align-items-center">
                     <a href="#" className="col-12 col-md-4 col-xl-3 btn btn-primary me-2">Keep my account</a>
                     <a className="col-12 col-md-4 col-xl-3 btn btn-danger">Delete Account</a>
                  </div>
               </div>
               {/* Card body END */}
            </div>
         </div>
      } />
   )
}
