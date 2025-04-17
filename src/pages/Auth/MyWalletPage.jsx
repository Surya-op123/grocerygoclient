import React from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function MyWalletPage() {
   return (
      <AuthLayout title={'My Wallet'} body={
         <div className="col-lg-9 d-flex">
            <div className="user-content-wrapper">
               <div className="row justify-content-between mb-2 pb-2 border-bottom g-3">
                  <div className="col-auto">
                     <p className="title mb-0">My Wallet :- <small className="green_color">₹100.00</small></p>
                  </div>
                  <div className="col-auto"><a href="/wallet/addmoney" className="btn text-white bg-primary px-4 py-2">
                     <i className="fa-solid fa-plus px-1" />Add Money</a>
                  </div>
               </div>
               <div className="row">
                  <ul className="mb-3">
                     <li><i className="fa-regular fa-circle-check mx-2 text-success" />Fast &amp; Easy Payments</li>
                     <li><i className="fa-regular fa-circle-check mx-2 text-success" />Secure Payments</li>
                     <li><i className="fa-regular fa-circle-check mx-2 text-success" />No document upload required</li>
                     <li><i className="fa-regular fa-circle-check mx-2 text-success" />*Wallet Money cannot be transferred to your account</li>
                  </ul>
               </div>
               <div className="row mb-3">
                  <div className="table-responsive">
                     <table className="table table-hover">
                        <thead className="rounded-top">
                           <tr className="bg-light text-center align-middle">
                              <th className="fs-7 fw-600">Date</th>
                              <th className="fs-7 fw-600">Description</th>
                              <th className="fs-7 fw-600">Amount</th>
                           </tr>
                        </thead>
                        <tbody className="rounded-bottom">
                           <tr className="text-center align-middle">
                              <td className="fs-7">Apr 16, 2025</td>
                              <td className="fs-7 w-410">Wallet Recharge RazorPay pay_QJbXLctmjZtRKW</td>
                              <td className="fs-7 text-success">₹100.00</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div className="d-flex justify-content-center"></div>
            </div>
         </div>
      } />
   )
}
