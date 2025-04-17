import React from 'react'
import AuthLayout from '../../components/AuthLayout'
import { useLocation } from 'react-router-dom'

export default function AddressAdd() {
   const location = useLocation();
   const isUpdatePath = location.pathname === '/address/update';
   return (
      <AuthLayout title={`${isUpdatePath ? "Updates Address" : "Add Address"}`} body={
         <div className="col-lg-9">
            <div className="user-content-wrapper">
               <div className="mb-3"><p className="title pb-2 border-bottom">{isUpdatePath ? "Updates Address" : "Add Address"}</p></div>
               <form action="" method="POST">
                  <div className="row">
                     <div className="col-12 mb-3">
                        <label htmlFor="title" className="form-label">Title<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="title" id="title" placeholder="Title" required />
                     </div>
                     <div className="col-12 mb-3">
                        <label htmlFor="address" className="form-label">Address<span className="text-danger">*</span></label>
                        <textarea rows={6} className="form-control" name="address" placeholder="Address" defaultValue={"Norwoodport , West Virginia - 86490-8323"} />
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="form-label">Country<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="country" id="country" required placeholder="Country" />
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="state" className="form-label">State<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="state" id="state" required placeholder="State" />
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="form-label">City
                           <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" name="city" id="city" required placeholder="City" />
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="landmark" className="form-label">Landmark<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="landmark" id="landmark" required placeholder="Landmark" />
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="pincode" className="form-label">Pincode<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="pincode" id="pincode" placeholder="Pincode" required />
                     </div>

                     <div className={`${isUpdatePath ? "col-12" : "col-md-6 my-4"}`}>
                        <div className="form-group mt-3">
                           <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked={false} id="flexCheckDefault" name="is_default" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">Default</label>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 text-end">
                        <a href="/address" className="btn bg-danger text-white px-4 py-2 me-1">Cancel</a>
                        <button type="submit" className="btn bg-primary text-white px-4 py-2">Save Address</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      } />
   )
}
