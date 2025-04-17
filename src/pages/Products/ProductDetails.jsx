import React, { useState } from 'react'
import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const groceryItems = [
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66728f6a5bd4b.jpg",
      img2: "/assets/img/item/item-66728f6a5c3db.jpg",
      category: "Beverage",
      rating: 0.0,
      name: "Nescafe Classic Instant Coffee - Pack of 60 Sachet",
      price: 88.00,
      originalPrice: 110.00,
      stockStatus: null,
   },
   {
      discount: 46.7,
      img1: "/assets/img/item/item-667287fdd1fba.jpeg",
      img2: "/assets/img/item/item-667287ed5fa88.jpeg",
      category: "Meat",
      rating: 4.2,
      name: "Meatzza Fresh Chicken Wings (Frozen)",
      price: 80.00,
      originalPrice: 150.00,
      stockStatus: null,
   },
   {
      discount: 18.2,
      img1: "/assets/img/item/item-66717896db644.jpg",
      img2: "/assets/img/item/item-66717896db10a.jpg",
      category: "Bread Bakery",
      rating: 4.5,
      name: "Baked Whole Wheat Sandwich Bread (Crustless)",
      price: 90.00,
      originalPrice: 110.00,
      stockStatus: null,
   },
   {
      discount: 50.0,
      img1: "/assets/img/item/item-66728e7c30ec4.jpg",
      img2: "/assets/img/item/item-66728e7c308b1.jpg",
      category: "Snacks",
      rating: 3.8,
      name: "Chheda's Salt-n-Pepper Banana Chips - 170 g",
      price: 45.00,
      originalPrice: 90.00,
      stockStatus: null,
   },
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66728df63d2e3.jpg",
      img2: "/assets/img/item/item-66728df63dbed.jpg",
      category: "Snacks",
      rating: 4.0,
      name: "Lay's India's Magic Masala Potato Chips (40 g)",
      price: 40.00,
      originalPrice: 50.00,
      stockStatus: null,
   },
   {
      discount: 33.3,
      img1: "/assets/img/item/item-664c8ad77300d.jpeg",
      img2: "/assets/img/item/item-664c8ad772415.png",
      category: "Vegetables",
      rating: 3.9,
      name: "Onion",
      price: 100.00,
      originalPrice: 150.00,
      stockStatus: null,
   },
   {
      discount: 15.0,
      img1: "/assets/img/item/item-664c7f00648d3.png",
      img2: "/assets/img/item/item-664c7f0064314.png",
      category: "Fruits",
      rating: 4.6,
      name: "Sinduri Mango",
      price: 85.00,
      originalPrice: 100.00,
      stockStatus: null,
   },
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66755f6c5dd5d.jpg",
      img2: "/assets/img/item/item-66755f6c5d650.jpg",
      category: "Dairy Products",
      rating: 4.1,
      name: "Amul Gold Full Cream Fresh Milk",
      price: 24.00,
      originalPrice: 30.00,
      stockStatus: null,
   },
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66728d022f587.jpg",
      img2: "/assets/img/item/item-66728d022f1e0.jpg",
      category: "Snacks",
      rating: 4.7,
      name: "Uncle Chipps Spicy Treat Flavour Potato Chips",
      price: 40.00,
      originalPrice: 50.00,
      stockStatus: "In Stock",
   },
   {
      discount: 20.0,
      img1: "/assets/img/item/item-66716a0fda81c.jpg",
      img2: "/assets/img/item/item-66716a0fda577.jpg",
      category: "Bread Bakery",
      rating: 4.3,
      name: "Let's Try Ragi Kaju Pista Cookies",
      price: 144.00,
      originalPrice: 180.00,
      stockStatus: "In Stock",
   },
];

const images = [
   "/assets/img/item/item-66728f6a5bd4b.jpg",
   "/assets/img/item/item-66728f6a5c3db.jpg"
];

export default function ProductDetails() {
   // const [loaded, setLoaded] = useState(false);

   const [selectedImage, setSelectedImage] = useState(images[0]);

   useEffect(() => {
      const handleScroll = () => {
         const header = document.querySelector('.view-cart-bar');
         if (!header) return;

         const isMobile = window.innerWidth <= 768;

         if (window.scrollY > 500 && !isMobile) {
            header.classList.remove('d-none');
         } else {
            header.classList.add('d-none');
         }
      };

      // Run once on mount to set initial state
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll); // handle screen resizing too

      return () => {
         window.removeEventListener('scroll', handleScroll);
         window.removeEventListener('resize', handleScroll);
      };
   }, []);

   const { GuestModel, isAuthenticated } = useAuth();
   const navigate = useNavigate();

   const buyClick = () => {
      if (isAuthenticated) {
         navigate('/checkout')
      } else {
         GuestModel();
      }
   }


   if (images.length === 0) return null;
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="fw-bold text-dark" href="/">Home</a></li>
                        <li className="breadcrumb-item text-primary fw-bold active" aria-current="page">Product Details</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="mt-5">
            <div className="container">
               <div className="item-details">
                  <div className="row mb-4">
                     <div className="col-lg-5 col-12 mb-3">
                        <div className="item-img-cover">
                           <div className="item-img show">
                              <div className="card h-100 overflow-hidden rounded-0 border-0 position-relative">

                                 {/* {loaded && <div className="sp-loading"><img src="https://via.placeholder.com/1100x1220" alt="" /><br />LOADING IMAGES</div>} */}

                                 <div className="sp-wrap sp-touch" style={{ "display": "inline-block" }}>
                                    <div className="sp-large"><a href={selectedImage} className="sp-current-big"><img src={selectedImage} alt="" /></a></div>
                                    <div className="sp-thumbs sp-tb-active">
                                       {images.map((img, index) => (
                                          <a key={index} href={img} onClick={(e) => { e.preventDefault(); setSelectedImage(img); }} style={{ backgroundImage: `url(${img})` }} className={`${selectedImage === img ? "sp-current" : ""}`}></a>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-7 col-12">
                        <div className="item-content">
                           <div className="item-heading">
                              <div className="mb-1 item-offer-2" id="detail_off">
                                 <span className="badge " id="off">20.0% OFF</span>
                              </div>
                              <div className="mb-1">
                                 <span className="text-muted fs-7 fw-500">Beverage</span>
                              </div>
                              <div className="d-flex align-items-start align-items-center">
                                 <img className="col-1" src="/assets/img/about/veg.svg" alt="" />
                                 <span className="item-title col-11 ms-2">Nescafe Classic Instant Coffee - Pack of 60 Sachet</span>
                              </div>
                           </div>
                           <div className="d-flex flex-wrap justify-content-between align-items-center my-2">
                              <div className="d-flex" id="detail_price_section">
                                 <p className="text-dark fw-bold detail_item_price mb-0">₹88.00</p>
                                 <span><del className="text-muted fw-bold mx-1 " id="detail_original_price">₹110.00</del></span>
                              </div>
                              <a href="#review-tab">
                                 <div className="d-flex gap-2 align-items-center">
                                    <p className="fs-7 mb-0"><i className="text-warning fa-solid fa-star pe-1" /><span className="text-dark fw-500">0.0</span></p>
                                    <span className="d-inline-block text-muted fw-500">(0 Reviews)</span>
                                 </div>
                              </a>
                           </div>
                           <div className="d-flex gap-1 align-items-center blink_me mb-2">
                              <p className="fw-600 text-success m-0"><i className="fa-solid fa-eye" /> 78 people are viewing this product right now</p>
                           </div>

                           <div className="d-flex mb-3 pb-2 border-bottom">
                              <p id="detail_tax" className="responcive-tax text-left border-0 m-0">
                                 <span className="text-muted fs-7"><span className="text-danger fs-7">Exclusive of all taxes</span></span>
                              </p>
                           </div>

                           <div className="border-bottom pb-3 mb-3 d-block" id="detail_sku_stock">
                              <div className="card bg-gray border-0 px-3 py-2 rounded-2">
                                 <div className="sku-wrapper product_meta ">
                                    <span className="fs-7" id="sku_lable">
                                       <span className="fw-bold text-muted">SKU</span>
                                       <span className="text-muted fs-7" id="sku_value">: GG1010</span>
                                    </span>
                                 </div>
                                 <div className="meta-content">
                                    <div className="sku-wrapper product_meta" id="detail_stock">
                                       <span className="fs-7"><span className="fw-bold text-muted">Stock: </span></span>
                                       <span className="fs-7 text-success" id="detail_out_of_stock1">57 In Stock</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="product-variations-wrapper mb-3">
                              <div className="product_details" id="oldvariation">
                                 <label className="fw-semibold mb-2">Weight</label>
                                 <div className="d-flex flex-wrap gap-2 border-bottom pb-3 mb-3">
                                    <label className="checkbox-inline checkWeight1 active" id="check_Weight1-500g" htmlFor="Weight1-500g">
                                       <input type="checkbox"  name="skills" defaultChecked defaultValue="500g" id="Weight1-500g" />500g
                                    </label>
                                    <label className="checkbox-inline checkWeight1 " id="check_Weight1-800g" htmlFor="Weight1-800g">
                                       <input type="checkbox"  name="skills" defaultValue="800g" id="Weight1-800g" />800g
                                    </label>
                                 </div>
                              </div>
                           </div>

                           <div className="woo_pr_color flex_inline_center my-3 border-bottom pb-3">
                              <div className="woo_colors_list text-left">
                                 <span id="extras">
                                    <h6 className="extra-title fw-semibold">Extras</h6>
                                    <ul className="list-unstyled extra-food m-0">
                                       <div id="pricelist">
                                          <li className="d-flex align-items-center"><input type="checkbox" name="addons[]" id="addons_0" extras_name="Extra 1" className="extras_Checkbox" defaultValue={22} price={10} />
                                             <label className="m-0 fs-7 mx-2" htmlFor="addons_0">Extra 1 : ₹10.00</label>
                                          </li>
                                          <li className="d-flex align-items-center"><input type="checkbox" name="addons[]" id="addons_1" extras_name="Extra 2" className="extras_Checkbox" defaultValue={23} price={20} />
                                             <label className="m-0 fs-7 mx-2" htmlFor="addons_1">Extra 2 : ₹20.00</label>
                                          </li>
                                          <li className="d-flex align-items-center"><input type="checkbox" name="addons[]" id="addons_2" extras_name="Extra 3" className="extras_Checkbox" defaultValue={24} price={30} />
                                             <label className="m-0 fs-7 mx-2" htmlFor="addons_2">Extra 3 : ₹30.00</label>
                                          </li>
                                       </div>
                                    </ul>
                                 </span>
                              </div>
                           </div>


                           <div className="d-flex flex-column gap-2 align-items-sm-start align-items-center mb-4">
                              <div className="text-dark col-12 d-flex gap-2 align-items-center">
                                 <i className="fa-regular fa-clock fs-6" />
                                 <div className="line-2 fw-bolder">Hurry up!</div>
                              </div>
                              <div className="countdown px-3 py-4 rounded-4 overflow-hidden">
                                 <div className="countdown-counter" id="countdown">
                                    <div className="timer countdown__days js-days"><p className="mb-0">0</p> DAYS <span /></div>
                                    <div className="timer countdown__hours js-hours"><p className="mb-0">1</p> HOURS<span /></div>
                                    <div className="timer countdown__minutes js-minutes"><p className="mb-0">12</p> MINUTES<span /></div>
                                    <div className="timer countdown__seconds js-seconds"><p className="mb-0">27</p> SECONDS<span /></div>
                                 </div>
                              </div>
                           </div>

                           <div className="border-bottom pb-3 mb-3">
                              <div className="row g-xl-3 g-2 align-items-center" id="detail_plus-minus">
                                 <div className="col-xl-3 col-lg-6 col-md-3 col-6">
                                    <div className="d-flex align-items-center gap-1">
                                       <div><p className="m-0 d-sm-block d-none">Quantity</p></div>
                                       <div className="btn item-quantity w-100 py-2 rounded-3">
                                          <button className="btn btn-sm item-quantity-minus mb-0 detail_item_quantity" id="minus" data-type="minus" data-item_id={32} value="minus value"><i className="fa-solid fa-minus fs-10" /></button>
                                          <input className="item-quantity-input mb-0 detail_item_qty" name="detail_item_qty" defaultValue={1} readOnly />
                                          <button className="btn btn-sm item-quantity-plus mb-0 detail_item_quantity" id="plus" data-item_id={32} data-type="plus" value="plus value"><i className="fa-solid fa-plus fs-10" /></button>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xl-3 col-lg-6 col-md-3 col-6">
                                    <a href="https://api.whatsapp.com/send?phone=919651100914&text=Pull Classic Cool" className="btn btn-danger btn-enquir rounded-0 w-100" id="enquiries" target="_blank">
                                       <span className="px-1 fs-6 d-flex align-items-center gap-1"><i className="fa-brands fa-whatsapp" />Enquiries</span>
                                    </a>
                                 </div>
                                 <div className="col-xl-3 col-lg-6 col-md-3 col-6">
                                    <button className="btn btn-outline-primary btn-lg w-100 m-0 fs-6 d-flex gap-3 justify-content-center align-items-center add_to_cart " id="addcart">Add to cart
                                       <div className="loader d-none add_to_cart_loader" />
                                    </button>
                                 </div>
                                 <div className="col-xl-3 col-lg-6 col-md-3 col-6">
                                    <button onClick={()=> buyClick()} className="btn btn-primary btn-lg w-100 m-0 fs-6 d-flex gap-3 justify-content-center align-items-center buy_now" id="buynow">Buy Now
                                       <div className="loader d-none buy_now_loader" />
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className="d-flex flex-wrap mt-3 align-items-center">
                              <div className="col-6">
                                 <div className="wishlist">
                                    <a className="text-dark fs-7 fw-600 d-flex gap-1 align-items-center" href="/login">
                                       <i className="fa-regular fa-heart fs-5" /> Add to Wishlist
                                    </a>
                                 </div>
                              </div>
                              <div className="col-6">
                                 <div className="d-flex align-items-center justify-content-end gap-2">
                                    <a href="https://www.google.com/" className="prod-social bg-dark" tooltip="Google Review" target="_blank"><i className="fa-solid fa-star text-white fs-8" /></a>
                                    <a href="tel:+919651100914" className="prod-social bg-dark" tooltip="Call"><i className="fa-solid fa-phone text-white fs-8" /></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12 my-3 p-3 border-top">
                              <div className="row g-3 product-detile">
                                 <div className="col-lg-3 col-6">
                                    <div className="service-content"><img src="/assets/img/trusted_badge/trusted_badge-678dd1ea2736f.svg" alt='' /></div>
                                 </div>
                                 <div className="col-lg-3 col-6">
                                    <div className="service-content"><img src="/assets/img/trusted_badge/trusted_badge-678dd1ea27f7b.svg" alt='' /> </div>
                                 </div>
                                 <div className="col-lg-3 col-6">
                                    <div className="service-content"><img src="/assets/img/trusted_badge/trusted_badge-678b7280d9ae6.svg" alt='' /></div>
                                 </div>
                                 <div className="col-lg-3 col-6">
                                    <div className="service-content"><img src="/assets/img/trusted_badge/trusted_badge-678b7280da080.svg" alt='' /></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12 py-4 p-3 sevirce-trued mt-3">
                              <div className="d-flex mb-2 pb-1 flex-wrap gap-2 justify-content-center aling-items-center">
                                 <div className="sevirce-tru">
                                    <div className="img">
                                       <img className="border rounded-2" src="/assets/img/about/payment-65893b4da12e0.png"  alt=''/>
                                    </div>
                                 </div>
                                 <div className="sevirce-tru">
                                    <div className="img">
                                       <img className="border rounded-2" src="/assets/img/about/payment-6673cd7ac0a18.png"  alt=''/>
                                    </div>
                                 </div>
                                 <div className="sevirce-tru">
                                    <div className="img">
                                       <img className="border rounded-2" src="/assets/img/about/payment-667d4d89d3562.png"  alt=''/>
                                    </div>
                                 </div>
                                 <div className="sevirce-tru">
                                    <div className="img">
                                       <img className="border rounded-2" src="/assets/img/about/payment-6673cd40b19dd.png"  alt=''/>
                                    </div>
                                 </div>
                                 <div className="sevirce-tru">
                                    <div className="img">
                                       <img className="border rounded-2" src="/assets/img/about/payment-6673cd62a0be5.png"  alt=''/>
                                    </div>
                                 </div>
                                 <div className="sevirce-tru">
                                    <div className="img">
                                       <img className="border rounded-2" src="/assets/img/about/payment-671c98f20d9eb.png"  alt=''/>
                                    </div>
                                 </div>
                              </div>
                              <h6 className="fs-15 text-center fw-normal" style={{ "color": "#bf1d1d" }}>Your Payment is 100% Secure</h6>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="product-view" id="review-tab">
                     <ul className="nav nav-pills py-3 mb-4 border-bottom border-top" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                           <a className="nav-link active py-2 me-2 me-md-3" aria-current="page" data-bs-toggle="pill" data-bs-target="#pills-description" href="javascript:void(0)" aria-selected="true" role="tab" tabIndex={-1}>Description</a>
                        </li>
                        <li className="nav-item" role="presentation">
                           <a className="nav-link py-2" href="javascript:void(0)" data-bs-toggle="pill" data-bs-target="#pills-review" aria-selected="false" role="tab" tabIndex={-1}>Reviews</a>
                        </li>
                     </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                     <div className="tab-pane fade active show" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                        <div className="row mt-2">
                           <div className="col-auto">
                              <div className="item-description border-bottom pb-2">
                                 <h4 className="mb-4">Description</h4>
                                 <p className="text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                        <div className="row gy-4 gy-md-5 g-4 g-xxl-5">
                           <div className="col-md-12 col-lg-7 col-xxl-6">
                              <div>
                                 {/* Customer rating */}
                                 <h3 className="heading mb-4 fw-bold text-dark text-truncate">Customer Rating</h3>
                                 <div className="card border-0 bg-gray p-4 mb-4 rounded-4">
                                    <div className="row g-3 align-items-center">
                                       {/* Rating info */}
                                       <div className="col-md-3">
                                          <div className="text-center">
                                             {/* Info */}
                                             <h2 className="mb-0 fw-bold text-dark"><i className="fa-solid fa-star text-warning" />0.0</h2>
                                             <p className="mb-2 text-muted">Based On 0 Reviews</p>
                                          </div>
                                       </div>
                                       {/* Progress-bar START */}
                                       <div className="col-md-9">
                                          <div className="card-body p-0">
                                             <div className="row gx-3 g-2 align-items-center">
                                                <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                      <i className="fa-solid fa-star text-warning" />
                                                      <span className="px-1 cp">5</span>
                                                   </div>
                                                   {/* Progress bar and Rating */}
                                                   <div className="mt-xs-0 mx-3 w-100">
                                                      {/* Progress item */}
                                                      <div className="progress progress-sm bg-warning bg-opacity-15">
                                                         <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   {/* Percentage */}
                                                   <div className="text-end col-custom">
                                                      <span className="h6 fw-semibold mb-0">0.0%</span>
                                                   </div>
                                                </div>
                                                {/* Progress bar and Rating */}
                                                <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                      <i className="fa-solid fa-star text-warning" />
                                                      <span className="px-1 cp">4</span>
                                                   </div>
                                                   {/* Progress bar and Rating */}
                                                   <div className="mt-xs-0 mx-3 w-100">
                                                      {/* Progress item */}
                                                      <div className="progress progress-sm bg-warning bg-opacity-15">
                                                         <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   {/* Percentage */}
                                                   <div className="text-end col-custom">
                                                      <span className="h6 fw-semibold mb-0">0.0%</span>
                                                   </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                      <i className="fa-solid fa-star text-warning" />
                                                      <span className="px-1 cp">3</span>
                                                   </div>
                                                   {/* Progress bar and Rating */}
                                                   <div className="mt-xs-0 mx-3 w-100">
                                                      {/* Progress item */}
                                                      <div className="progress progress-sm bg-warning bg-opacity-15">
                                                         <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   {/* Percentage */}
                                                   <div className="text-end col-custom">
                                                      <span className="h6 fw-semibold mb-0">0.0%</span>
                                                   </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                      <i className="fa-solid fa-star text-warning" />
                                                      <span className="px-1 cp">2</span>
                                                   </div>
                                                   {/* Progress bar and Rating */}
                                                   <div className="mt-xs-0 mx-3 w-100">
                                                      {/* Progress item */}
                                                      <div className="progress progress-sm bg-warning bg-opacity-15">
                                                         <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   {/* Percentage */}
                                                   <div className="text-end col-custom">
                                                      <span className="h6 fw-semibold mb-0">0.0%</span>
                                                   </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                   <div className="d-flex align-items-center">
                                                      <i className="fa-solid fa-star text-warning" />
                                                      <span className="px-1 cp">1</span>
                                                   </div>
                                                   {/* Progress bar and Rating */}
                                                   <div className="mt-xs-0 mx-3 w-100">
                                                      {/* Progress item */}
                                                      <div className="progress progress-sm bg-warning bg-opacity-15">
                                                         <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   {/* Percentage */}
                                                   <div className="text-end col-custom">
                                                      <span className="h6 fw-semibold mb-0">0.0%</span>
                                                   </div>
                                                </div>
                                             </div> {/* Row END */}
                                          </div>
                                       </div>
                                       {/* Progress-bar END */}
                                    </div>
                                 </div>
                                 {/* Customer rating */}
                              </div>
                           </div>
                           <div className="col-md-12 col-lg-5 col-xxl-6">
                              <div className="pt-4 p-md-0">
                                 {/* Customer Review */}
                                 <h3 className="heading mb-3 fw-bold text-dark text-truncate">Customer Review</h3>
                                 <div className="d-grid justify-items-center mt-5 mb-3"><p>No reviews</p></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="menu my-5">
            <div className="container">
               <div className="row g-2 align-items-center justify-content-between mb-4">
                  <div className="col-auto menu-heading"><h2 className="fw-bold text-capitalize mb-0">Related products</h2></div>
                  <div className="col-auto"><a href="/menu" className="btn btn-primary px-4">View All <i className="fa fa-arrow-right" /></a></div>
               </div>
               <div className="menu my-0">
                  <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-sm-3 g-2">
                     {groceryItems.map((i) => (<ProductItem i={i} />))}
                  </div>
               </div>
            </div>
         </section>

         <section className="view-cart-bar d-none">
            <div className="container">
               <div className="row g-2 align-items-center">
                  <div className="col-xl-6 col-lg-5 col-md-6">
                     <div className="d-flex gap-3 align-items-center">
                        <div className="product-img"><img src="/assets/img/item/item-66717896db10a.jpg" className="rounded border" /></div>
                        <div>
                           <div className="d-flex gap-2 align-items-start align-items-center">
                              <img src="/assets/img/about/veg.svg" alt="" />
                              <span className="fs-6 line-2 fw-600">Baked Whole Wheat Sandwich Bread (Crustless)</span>
                           </div>
                           <div className="d-flex gap-2 mt-2 align-items-center" id="detail_price_section">
                              <p className="text-dark fs-15 fw-bold detail_item_price mb-0">₹90.00</p>
                              <del className="text-muted fs-8 fw-bold " id="detail_original_price">₹110.00</del>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7 col-md-6">
                     <div className="row g-2 justify-content-end">
                        <div className="col-xl-2 col-lg-2 col-12">
                           <div className="btn w-100 px-2 item-quantity view-cart-bar-qty rounded-3">
                              <button className="btn btn-sm item-quantity-minus mb-0 detail_item_quantity" id="minus" data-type="minus" data-item_id={21} value="minus value"><i className="fa-solid fa-minus fs-10" /></button>
                              <input className="item-quantity-input mb-0 detail_item_qty" name="number" defaultValue={1} readOnly />
                              <button className="btn btn-sm item-quantity-plus mb-0 detail_item_quantity" id="plus" data-item_id={21} data-type="plus" value="plus value"><i className="fa-solid fa-plus fs-10" /></button>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5 col-12">
                           <button className="btn btn-outline-primary btn-lg w-100 m-0 fs-15 d-flex gap-3 justify-content-center align-items-center add_to_cart " id="addcart">
                              Add to cart
                              <div className="loader d-none add_to_cart_loader" />
                           </button>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5 col-12">
                           <button onClick={()=> buyClick()} className="btn btn-primary btn-lg w-100 m-0 fs-15 d-flex gap-3 justify-content-center align-items-center buy_now" id="buynow">
                              Buy Now
                              <div className="loader d-none buy_now_loader" />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   )
}
