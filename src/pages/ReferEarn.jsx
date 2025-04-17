import React from 'react'
import AuthLayout from '../components/AuthLayout'
import { Link } from 'react-router-dom'

export default function ReferEarn() {
   return (
      <AuthLayout title={'Refer & Earn'} body={
         <div className="col-lg-9">
            <div className="user-content-wrapper">
               <p className="title pb-2 border-bottom">Refer &amp; Earn</p>
               <div className="d-flex flex-column align-items-center">
                  <div className="col-6">
                     <img className="mb-4 refer-img w-100" src="/assets/img/about/referral-678f7b3af2ee0.png" />
                  </div>
                  <h5 className="text-uppercase fw-600">Refer &amp; Earn</h5>
                  <p className="fs-6 text-center text-muted">Share this code with a friend and you both could be eligible for ₹30000.00 bonus amount under our referral program.</p>
                  <div className="col-md-8">
                     <input type="url" className="form-control bg-light text-center mb-3" id="data" defaultValue="https://www.grocerygo.com/register?referral=pGluBitmfs" readOnly />
                  </div>
               </div>
               <div className="sharing-section">
                  <div className="socialJS responsive left">
                     <Link data-action="social-share"><i className="fas fa-copy" style={{ "color": "#b9b9b9" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-facebook" style={{ "color": "#4267B2" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-twitter" style={{ "color": "#00acee" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-pinterest" style={{ "color": "#E60023" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-linkedin" style={{ "color": "#0072b1" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-reddit" style={{ "color": "#FF5700" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-stumbleupon" style={{ "color": "#f74425" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-get-pocket" style={{ "color": "#E60023" }} /></Link>
                     <Link data-action="social-share"><i className="fas fa-envelope" style={{ "color": "#5522a4" }} /></Link>
                     <Link data-action="social-share"><i className="fab fa-whatsapp" style={{ "color": "#1e7d34" }} /></Link>
                  </div>
               </div>
            </div>
         </div>
      } />
   )
}
