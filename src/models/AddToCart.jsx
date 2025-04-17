import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const mockProduct = {
   id: 1,
   type: true,
   name: 'Fresh Apple',
   typeImage: '/images/fruits.png',
   price: 5.0,
   originalPrice: 7.0,
   variants: ['500g', '1kg'],
   variantPrices: {
      '500g': { price: 5.0, original: 7.0, isStock: "26" },
      '1kg': { price: 9.0, original: 11.0, isStock: "20" }
   }
};

const AddToCart = ({ open, onClose }) => {
   const [selectedVariant, setSelectedVariant] = useState('500g');
   const [variantPrice, setVariantPrice] = useState({});
   const [quantity, setQuantity] = useState(1);

   useEffect(() => {
      const variant = mockProduct.variantPrices[selectedVariant];
      setVariantPrice(variant);
   }, [selectedVariant]);

   const handleQuantityChange = (type) => {
      setQuantity((prev) => Math.max(1, type === 'plus' ? prev + 1 : prev - 1));
   };

   const discount = variantPrice.original
      ? (((variantPrice.original - variantPrice.price) / variantPrice.original) * 100).toFixed(1) : 0;

   const { GuestModel, isAuthenticated } = useAuth();
   const navigate = useNavigate();

   const buyClick = () => {
      onClose();
      if (isAuthenticated) {
         navigate('/')
      } else {
         GuestModel();
      }
   }
   return (<>
      <div className={`modal modalitemdetails ${open ? "show" : ""}`} style={{ display: open ? 'block' : '', }} role="dialog">
         <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content">

               <div className="modal-header align-items-start justify-content-between gap-2">
                  <div className="d-flex">
                     <span id="item_type_image"><img className="item-type-image mt-1" src={`/assets/img/about/${mockProduct.type ? "veg" : "nonveg"}.svg`} /></span>
                     <div className="d-grid ms-2">
                        <p className="modal-title fs-5 fw-bold item_name mb-1">{mockProduct.name}</p>
                        <div className="d-flex" id="price_section">
                           <p className="text-dark fw-bold item_price mb-0">₹{variantPrice.price}</p>
                           {variantPrice.original > variantPrice.price && (<>
                              <span><del className="text-muted fw-bold fs-7 mx-1" id="original_price">₹{variantPrice.original}</del></span>
                              <span className="badge d-flex align-items-center bg-primary-light fw-600 fs-8 text-dark" id="off">{discount}%% OFF</span>
                           </>)}
                        </div>
                        <span className="text-danger" id="not_available" >Not Available</span>
                     </div>
                  </div>
                  <button type="button" onClick={onClose} className="btn-close mt-1 m-0" data-bs-dismiss="modal" aria-label="Close" />
               </div>

               <div className="modal-body">
                  <div className="row align-items-center">
                     <div className="col-12 m-auto">
                        <div className="border-bottom pb-3 mb-3 d-block" id="sku_stock">
                           <div className="card bg-gray border-0 px-3 py-2 rounded-2">
                              <div className="sku-wrapper product_meta">
                                 <span className="fs-7" id="sku_lable">
                                    <span className="fw-bold text-muted">SKU</span>
                                    <span className="text-muted fs-7" id="sku_value">: GG1003</span>
                                 </span>
                              </div>
                              <div className="meta-content bg-gray rounded-2">
                                 <div className="sku-wrapper product_meta" id="stock">
                                    <span className="fs-7">
                                       <span className="fw-bold text-muted">Stock:</span>
                                    </span>
                                    <span className="fs-7 text-success" id="detail_out_of_stock">{variantPrice.isStock} In Stock</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="item-details">
                           <div className="product-variations-wrapper">
                              <div className="size-variation" id="newvariation">
                                 <label className="fw-semibold mb-2"  >Weight</label><br />
                                 <div className="d-flex flex-wrap gap-2 border-bottom pb-3 mb-3">
                                    {mockProduct.variants.map((variant) => (
                                       <label key={variant} className={`checkbox-inline checkWeight1 ${selectedVariant === variant ? 'active' : ''}`}>
                                          <input type="radio" name="variant" value={variant} checked={selectedVariant === variant} onChange={() => setSelectedVariant(variant)} hidden />
                                          {variant}
                                       </label>
                                    ))}
                                 </div>
                              </div>
                           </div>
                           <div className="woo_pr_color flex_inline_center my-3 border-bottom pb-3">
                              <div className="woo_colors_list text-left">
                                 <span id="extras">
                                    <h6 className="extra-title fw-semibold">Extras</h6>
                                    <ul className="list-unstyled extra-food m-0">
                                       <div id="pricelist">
                                          <li className="d-flex align-items-center"><input type="checkbox" id="addons_0" name="addons[]" extras_name="Extra 1" className="Checkbox" defaultValue={22} price={10} />
                                             <label className="m-0 mx-2 fs-7" htmlFor="addons_0">Extra 1 :
                                                ₹10.00
                                             </label>
                                          </li>
                                          <li className="d-flex align-items-center"><input type="checkbox" id="addons_1" name="addons[]" extras_name="Extra 2" className="Checkbox" defaultValue={23} price={20} />
                                             <label className="m-0 mx-2 fs-7" htmlFor="addons_1">Extra 2 :
                                                ₹20.00
                                             </label>
                                          </li>
                                          <li className="d-flex align-items-center"><input type="checkbox" id="addons_2" name="addons[]" extras_name="Extra 3" className="Checkbox" defaultValue={24} price={30} />
                                             <label className="m-0 mx-2 fs-7" htmlFor="addons_2">Extra 3 :
                                                ₹30.00
                                             </label>
                                          </li>
                                          <li className="d-flex align-items-center"><input type="checkbox" id="addons_3" name="addons[]" extras_name="Extra 4" className="Checkbox" defaultValue={25} price={40} />
                                             <label className="m-0 mx-2 fs-7" htmlFor="addons_3">Extra 4 :
                                                ₹40.00
                                             </label>
                                          </li>
                                          <li className="d-flex align-items-center"><input type="checkbox" id="addons_4" name="addons[]" extras_name="Extra 5" className="Checkbox" defaultValue={26} price={50} />
                                             <label className="m-0 mx-2 fs-7" htmlFor="addons_4">Extra 5 :
                                                ₹50.00
                                             </label>
                                          </li>
                                       </div>
                                    </ul>
                                 </span>
                              </div>
                           </div>
                           <div className="mb-3">
                              <div className="row g-3 justify-content-center px-0">
                                 <div className="col-4">
                                    <div className="btn item-quantity py-1 w-100 rounded-3" id="detail_plus-minus">
                                       <button className="btn btn-sm item-quantity-minus mb-0 item_quantity" id="minus" onClick={() => handleQuantityChange('minus')} value="minus value">-</button>
                                       <input className="item-quantity-input mb-0" id="item_qty" readOnly value={quantity} />
                                       <button className="btn btn-sm item-quantity-plus mb-0 item_quantity" id="plus" onClick={() => handleQuantityChange('plus')} value="plus value">+</button>
                                    </div>
                                 </div>
                                 <div className="col-4">
                                    <button className="btn btn-outline-dark btn-lg w-100 m-0 fs-6 p-2 d-flex gap-3 justify-content-center align-items-center modal_add_to_cart" id="addcart">Add to cart
                                       <div className="loader d-none modal_add_to_cart_loader" />
                                    </button>
                                 </div>

                                 <div className="col-4">
                                    <button onClick={buyClick} className="btn btn-primary btn-lg w-100 m-0 fs-6 p-2 d-flex gap-3 justify-content-center align-items-center modal_buy_now" id="buynow">Buy Now
                                       <div className="loader d-none modal_buy_now_loader" />
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className="d-flex flex-wrap gap-sm-2 gap-3 justify-content-between w-100 border-top pt-3">
                              <div className="d-flex gap-sm-5 gap-2 justify-content-between align-items-center col-sm-auto col-12">
                                 <div>
                                    <p className="fs-7 d-flex align-items-center mb-0">
                                       <a className="text-dark fs-7 fw-600 d-flex gap-1 align-items-center" href="/login"><i className="fa-regular fa-heart fs-5" />Add to Wishlist</a>
                                    </p>
                                 </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-center gap-2">
                                 <a href="https://www.google.com/" target="_blank" tooltip="Review" className=" rounded-circle prod-social fs-7"><i className="fa-regular fa-star fs-7 text-white" /></a>
                                 <a href="tel:+91xxxxxxxx" className="rounded-circle prod-social" tooltip="Phone"><i className="fa-solid fa-phone text-white fs-7" /></a>
                                 <a href="https://api.whatsapp.com/send?phone=91xxxxxxxx'&text=I am interested for this item :  Sinduri Mango" className=" rounded-circle prod-social" id="enquiries" tooltip="Whatsapp" target="_blank"><i className="fa-brands fa-whatsapp fs-7 text-white" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {open && <div onClick={close} className="offcanvas-backdrop fade show" />}
   </>);
};

export default AddToCart;
