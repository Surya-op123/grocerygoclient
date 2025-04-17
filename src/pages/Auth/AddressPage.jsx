import React from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function AddressPage() {
   return (
      <AuthLayout title={'My Addresses'} body={
         <div className="col-lg-9 d-flex">
            <div className="user-content-wrapper">
               <div className="d-flex flex-wrap gap-2 justify-content-between pb-2 border-bottom">
                  <p className="col-auto mb-0 title">My Addresses</p>
                  <a href="/address/add" className="col-auto py-2 px-4 text-capitalize btn btn-primary d-flex gap-2 align-items-center">Add new address<i className="fa-solid fa-plus" /></a>
               </div>
               <div className="row mb-3">
                  <div className="table-responsive">
                     <table className="table table-hover">
                        <thead className="rounded-top">
                           <tr className="bg-light align-middle">
                              <th className="fs-7 fw-600">#</th>
                              <th className="fs-7 fw-600">Title</th>
                              <th className="fs-7 fw-600">Address</th>
                              <th className="fs-7 fw-600">Default</th>
                              <th className="fs-7 fw-600">Action</th>
                           </tr>
                        </thead>
                        <tbody className="rounded-bottom">
                           <tr className="align-middle">
                              <td className="fs-7 fw-600">1</td>
                              <td className="fs-7 fw-600">ppp</td>
                              <td className="fs-7">Norwoodport , West Virginia - 86490-8323 </td>
                              <td className="fs-7">
                                 <div className="d-flex flex-wrap gap-1">
                                    <a className="btn btn-sm btn-success square"><i className="fa-sharp fa-solid fa-check" /></a>
                                 </div>
                              </td>
                              <td className="fs-7">
                                 <div className="px-3">
                                    <a className="text-danger mx-1" href="javascript:void(0)"><i className="fa-solid fa-trash-can" /></a>
                                    <a className="text-info mx-1" href="/address/update"><i className="fa-solid fa-pen-to-square" /></a>
                                 </div>
                              </td>
                           </tr>
                           <tr className="align-middle">
                              <td className="fs-7 fw-600">2</td>
                              <td className="fs-7 fw-600">qqq</td>
                              <td className="fs-7">Norwoodport , West Virginia - 86490-8323 </td>
                              <td className="fs-7">
                                 <div className="d-flex flex-wrap gap-1">
                                    <a className="btn btn-sm btn-danger square"><i className="fa-sharp fa-solid fa-xmark" /></a>
                                 </div>
                              </td>
                              <td className="fs-7">
                                 <div className="px-3">
                                    <a className="text-danger mx-1" href="javascript:void(0)"><i className="fa-solid fa-trash-can" /></a>
                                    <a className="text-info mx-1" href="/address/update"><i className="fa-solid fa-pen-to-square" /></a>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div className="d-flex justify-content-center">
               </div>
            </div>
         </div>
      } />
   )
}
