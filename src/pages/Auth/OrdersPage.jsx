import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Link } from 'react-router-dom'

export default function OrdersPage() {
   const [isOrderStatusTab, setIsOrderStatusTab] = useState(1);
   const setTabStatus = (id) => { setIsOrderStatusTab(id); }
   const isTab = (id) => isOrderStatusTab === id;

   return (
      <AuthLayout title={'My Orders'}
         body={
            <div className="col-lg-9 d-flex">
               <div className="user-content-wrapper">
                  <p className="title pb-2 border-bottom">My Orders</p>
                  <div className="p-3 rounded-3 bg-gray mb-3">
                     <div className="row g-3">
                        <div className="col-md-4 status-card-content">
                           <Link onClick={() => setTabStatus(1)} className={`order-status-card ${isTab(1) ? "border-dark bg-white" : ""}`}>
                              <div className="icon"><i className="fs-5 fa-solid fa-hourglass-empty" /></div>
                              <p className="mb-0 fw-600">Processing</p>
                              <h5 className={`mb-0 fw-600 count_circle ${isTab(1) ? "border-dark bg-dark text-white" : ""}`}>1</h5>
                           </Link>
                        </div>
                        <div className="col-md-4 status-card-content">
                           <Link onClick={() => setTabStatus(2)} className={`order-status-card ${isTab(2) ? "border-dark bg-white" : ""}`}>
                              <div className="icon"><i className="fs-5 fa-solid fa-check" /></div>
                              <p className="mb-0 fw-600">Completed</p>
                              <h5 className={`mb-0 fw-600 count_circle ${isTab(2) ? "border-dark bg-dark text-white" : ""}`}>0</h5>
                           </Link>
                        </div>
                        <div className="col-md-4 status-card-content">
                           <Link onClick={() => setTabStatus(3)} className={`order-status-card ${isTab(3) ? "border-dark bg-white" : ""}`}>
                              <div className="icon"><i className="fs-5 fa-solid fa-xmark" /></div>
                              <p className="mb-0 fw-600">Cancelled</p>
                              <h5 className={`mb-0 fw-600 count_circle ${isTab(3) ? "border-dark bg-dark text-white" : ""}`}>0</h5>
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div className="row mb-3">
                     <div className="table-responsive">
                        <table className="table table-hover border-top">
                           <thead className="rounded-top">
                              <tr className="bg-light align-middle">
                                 <th className="fs-7 fw-600">#</th>
                                 <th className="fs-7 fw-600">Date</th>
                                 <th className="fs-7 fw-600">Order Amount</th>
                                 <th className="fs-7 fw-600">Status</th>
                                 <th className="fs-7 fw-600">Action</th>
                              </tr>
                           </thead>
                           <tbody className="rounded-bottom">
                              <tr className="align-middle">
                                 <td className="fs-7 fw-600"> <a href="/order-details" className="text-dark">#PITS1016</a></td>
                                 <td className="fs-7">Apr 16, 2025</td>
                                 <td className="fs-7">$113.10 </td>
                                 <td className="fs-7"><span className="text-warning">Pending</span></td>
                                 <td className="fs-7">
                                    <a href="/order-details" className="btn btn-sm btn-info square mx-1 mb-1" tooltip="View"><i className="fa-regular fa-eye" /></a>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>

                  <div className="d-grid no-data justify-items-center my-3">
                     <img src="/assets/img/no_data_image.png" alt='' className=" mb-3 " />
                     <h4>No data found</h4>
                  </div>
               </div>
            </div>
         } />
   )
}
