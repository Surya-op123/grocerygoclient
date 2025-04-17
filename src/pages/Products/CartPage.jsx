import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import CheckOutTimer from '../../components/CheckOutTimer';

export default function CartPage() {

   const [cartItems, setCartItems] = useState([
      {
         id: 139,
         name: 'Baked Whole Wheat Sandwich Bread (Crustless)',
         image: '/assets/img/item/item-66717896db10a.jpg',
         price: 90,
         quantity: 3,
      },
      {
         id: 138,
         name: 'Baked Whole Wheat Sandwich Bread (Crustless)',
         image: '/assets/img/item/item-66717896db10a.jpg',
         price: 90,
         quantity: 1,
      },
   ]);

   const updateQty = (id, type) => {
      setCartItems((prevItems) =>
         prevItems.map((item) => {
            if (item.id === id) {
               const newQty = type === 'plus' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
               return { ...item, quantity: newQty };
            }
            return item;
         })
      );
   };

   const deleteCartItem = (id) => { setCartItems((prevItems) => prevItems.filter((item) => item.id !== id)); };

   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const shippingThreshold = 1000;
   const progress = Math.min((totalPrice / shippingThreshold) * 100, 100);
   const remaining = shippingThreshold - totalPrice;
   const progressBarColor = progress >= 70 ? 'var(--bs-success)' : 'var(--bs-warning)';

   const { GuestModel, isAuthenticated } = useAuth();
   const navigate = useNavigate();

   const buyClick = () => {
      if (isAuthenticated) {
         navigate('/checkout')
      } else {
         GuestModel();
      }
   }

   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-dark" href="/">Home</a></li>
                        <li className="breadcrumb-item text-primary fw-bold active" aria-current="page">Cart</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-4">
            <div className="container">
               <div className="cart-view">
                  <h3 className="fw-bold fs-2 mb-1 truncate-2">Cart</h3>
                  <p className="mb-3"><span className="fw-bold">0 items</span> in your cart</p>

                  <div className="d-grid no-data justify-items-center my-3">
                     <img src="/assets/img/no_data_image.png"  alt=''className=" mb-3 " />
                     <h4>No data found</h4>
                  </div>

                  <CheckOutTimer />

                  <div className="card overflow-hidden border-bottom-0">
                     <div className="table-responsive cart-view">
                        <table className="table m-0 rounded-2 overflow-hidden">
                           <thead>
                              <tr>
                                 <th className="p-3">Products</th>
                                 <th className="p-3">Price</th>
                                 <th className="p-3">Qty</th>
                                 <th className="p-3">Total</th>
                                 <th className="p-3">Action</th>
                              </tr>
                           </thead>
                           <tbody className="order-list">
                              {cartItems.map((item) => (
                                 <tr className="align-middle" key={item.id}>
                                    <td className="p-3">
                                       <div className="tbl_cart_product gap-3">
                                          <div className="item-img d-lg-block d-none">
                                             <img src={item.image} alt="item" />
                                          </div>
                                          <div className="row flex-column">
                                             <div className="item-title mb-0">
                                                <p className="text-dark text-capitalize m-0">{item.name}</p>
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="p-3">
                                       <p className="item-price text-start">₹{item.price.toFixed(2)}</p>
                                    </td>
                                    <td className="p-3">
                                       <div className="item-quantity">
                                          <button className="btn btn-sm item-quantity-minus mb-0 item_quantity" onClick={() => updateQty(item.id, 'minus')}><i className="fa-solid fa-minus fs-10" /></button>
                                          <input className="item-quantity-input mb-0" name="number" value={item.quantity} readOnly />
                                          <button className="btn btn-sm item-quantity-plus mb-0 item_quantity" onClick={() => updateQty(item.id, 'plus')}><i className="fa-solid fa-plus fs-10" /></button>
                                       </div>
                                    </td>
                                    <td className="p-3">
                                       <p className="fs-15">₹{(item.price * item.quantity).toFixed(2)}</p>
                                    </td>
                                    <td className="p-3">
                                       <button className="btn delete-icon" onClick={() => deleteCartItem(item.id)} title="Remove">
                                          <i className="fa-solid fa-trash-can text-light" />
                                       </button>
                                    </td>
                                 </tr>
                              ))}
                              {cartItems.length === 0 && (
                                 <tr>
                                    <td colSpan="5" className="text-center py-4">
                                       Your cart is empty.
                                    </td>
                                 </tr>
                              )}
                           </tbody>
                        </table>
                     </div>
                  </div>

                  <p className="muted text-end fs-7 line-2 mt-2">Shipping, taxes, and discounts codes calculated at checkout. (if applicable)</p>

                  <section className="cart-progress py-3 my-3">
                     <div className="container">
                        <div className="progress" role="progressbar" aria-label="Shipping Progress" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                           <div className="progress-bar rounded overflow-visible progress-bar-striped progress-bar-animated" style={{ width: `${progress}%`, backgroundColor: progressBarColor, }}>
                              <div className="w-100 d-flex justify-content-end"><i className="fa-solid fa-truck-fast fs-5 text-white" /></div>
                           </div>
                        </div>

                        {progress < 100 ? (
                           <p className="fs-7 mt-4 fw-bold text-capitalize">Spend ₹{remaining.toFixed(2)} more to get <strong>Free Shipping</strong></p>
                        ) : (
                           <p className="fs-7 mt-4 fw-bold text-success text-capitalize">Congratulations! You've got free shipping</p>
                        )}
                     </div>
                  </section>

                  <div className="row g-3 justify-content-between mb-xl-0 mb-3">
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="/" type="button" className="btn fs-13 fw-500 btn-outline-primary w-100">
                           <i className="fa fa-arrow-left-long fw-600" />
                           <span className="fw-600 px-1">Return to shop</span>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <button onClick={buyClick} className="btn btn-primary px-sm-4 fs-13 w-100 d-flex gap-3 justify-content-center align-items-center cart_checkout" >
                           <span className="fw-600 px-1">Continue</span>
                           <i className="fa fa-arrow-right-long fw-600" />
                           <div className="loader d-none cart_checkout_loader" />
                        </button>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </Layout>
   )
}
