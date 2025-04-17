import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from '../../components/AuthLayout';

export default function OrderDetails() {
   const { isAuthenticated } = useAuth();
   
   return (<>{isAuthenticated ? (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark" href="/">Home</a></li>
                        <li className="breadcrumb-item  text-primary fw-bold active" aria-current="page">Order Details</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">Order Details</h3>
               <div className="row">
                  <div className="col-lg-12">
                     <OrdersComponent />
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   ) : (
      <AuthLayout title={'Order Details'} body={
         <div className='d-flex col-lg-9'>
            <OrdersComponent />
         </div>
      } />
   )}</>)
}



export function OrdersComponent() {
   return (
      <div className="user-content-wrapper">
         <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 border-bottom pb-2">
            <p className="title m-0">Order Details</p>
            <div>
               <Link className="btn btn-danger rounded-3 mx-1 my-sm-0 my-2 px-4 py-2 float-sm-end"><i className="fas fa-trash text-white fs-7 me-1" />Cancel order</Link>
               <Link className="btn btn-primary mx-1 my-sm-0 my-2 px-4float-sm-end"><i className="fab fa-whatsapp me-1" />Send order on whatsapp</Link>
            </div>
         </div>
         <div className="row mb-5 g-3">
            <div className="col-md-6">
               <div className="card">
                  <div className="card-header">
                     <h5 className="fw-bold fs-6 mb-0">Order Info</h5>
                  </div>
                  <div className="card-body">
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Order Number : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">PITS1015</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Order Type : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">Delivery</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Order Date : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">Apr 15, 2025</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Delivery Date: </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">Apr 16, 2025</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Delivery time: </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">09:00 AM - 09:45 AM</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Order Status : </p>&nbsp;
                        <p className="fw-600 text-warning mb-1 fw-500 fs-7">Pending</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Payment Type : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">RazorPay [pay_QJJ5pDe5E851Nj]</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="card">
                  <div className="card-header"><h5 className="fw-bold fs-6 mb-0">Address Info</h5></div>
                  <div className="card-body">
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Name : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">sssss</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Email : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">s@gmail.com</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Mobile : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">9653388914</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Address : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">sss</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">City : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">ewe</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">State : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">wqq</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Country : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">sssd</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Landmark : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">rqr</p>
                     </div>
                     <div className="d-flex">
                        <p className="fw-bold fs-7 mb-2">Pincode : </p>&nbsp;
                        <p className="fw-500 fs-7 text-muted mb-2">234112</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="table-responsive">
            <table className="table">
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Product</th>
                     <th className="text-end">Unit cost</th>
                     <th className="text-end">Qty</th>
                     <th className="text-end">Subtotal</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        <img src="https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/item/item-66728f6a5bd4b.jpg" className="rounded hw-50"  alt=''/>
                     </td>
                     <td>
                        <img src="https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/veg.svg" className="item-type-img"  alt=''/>
                        <span className="fs-7">Nescafe Classic Instant Coffee - Pack of 60 Sachet</span>
                     </td>
                     <td className="text-end">₹88.00</td>
                     <td className="text-end">1</td>
                     <td className="text-end">₹88.00</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="d-flex justify-content-end">
            <div className="col-md-4 col-12">
               <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 d-flex justify-content-between">
                     <span className="fw-500 fs-7"> Subtotal </span>
                     <span className="text-break">₹88.00</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                     <span className="fw-500 fs-7"> SGST</span>
                     <span className="text-break">₹7.92</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                     <span className="fw-500 fs-7"> CGST</span>
                     <span className="text-break">₹7.92</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                     <span className="fw-500 fs-7"> Delivery fee </span>
                     <span className="text-break">₹60.00</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                     <span className="fw-bold"> Total Amount </span>
                     <span className="fw-bold text-break">₹163.84</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}
