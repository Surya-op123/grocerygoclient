import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SideBarMenu from './SideBarMenu';
import OfferSidebar from '../models/OfferSidebar';
import AddToCart from '../models/AddToCart';
import { useAuth } from '../contexts/AuthContext';
import CheckOutGuest from '../models/CheckOutGuest';
import NewsLatterModel from '../models/NewsLatterModel';
import ShowToast from './ShowToast';

export default function Layout({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header1');
      if (window.scrollY > 50) {
        header.classList.add('fixed-top');
      } else {
        header.classList.remove('fixed-top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isPathActive = (url) => location.pathname === url ? "active" : "";

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => { setShowSidebar(prev => !prev); };

  const [showOffer, setShowOffer] = useState(false);
  const toggleOffcanvas = () => { setShowOffer(!showOffer); };

  const { subscribeToNewsletter,
    AddCartModel, isAddCartModel, isBlur,
    isGuestModel, GuestModel,
    isNewsLatter, ShowNewsLatter,
    CookiesCancel, isAcceptedCookie, setIsAcceptedCookie
  } = useAuth();

  const [emailNewsletter, setEmailNewsletter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await subscribeToNewsletter(emailNewsletter);
    ShowToast({ message: result.message, type: result.success });
    if (result.success === "success") setEmailNewsletter('');
  };


  return (<>
    <main>
      <div className={`wrapper ${isBlur ? "blur" : ""}`}>
        <header>
          <div className={`header-bar`} id="header1">
            <nav className="navbar navbar-expand-lg sticky-top p-0">
              <div className="container navbar-container">
                <a className="navbar-brand me-3" href="/"><img className="img-resposive img-fluid" src="/assets/img/logo.png" alt="logo" /></a>

                <div className="buttons d-flex gap-3 align-items-center">
                  <div className="dropdown d-block d-lg-none">
                    <a className="btn-lang border-0" type="button"><img src="/assets/img/flag-lang.png" className="img-fluid lag-img" alt='' /></a>
                  </div>

                  <div className="d-lg-none">
                    <button onClick={toggleSidebar} className="btn bg-transparent btn-group text-dark m-0" type="button"><i className="fa-solid fa-bars" /></button>
                  </div>
                </div>

                <div className="navbar-collapse collapse">
                  <div className="navbar-nav mx-auto">
                    <a className={`nav-link px-3 ${isPathActive('/')}`} href="/">Home</a>
                    <a className={`nav-link px-3 ${isPathActive('/categories')}`} href="/categories">Category</a>
                    <a className={`nav-link px-3 ${isPathActive('/search')}`} href="/search ">Search</a>
                    <a className={`nav-link px-3 ${isPathActive('/gallery')}`} href="/gallery ">Gallery</a>
                    <a className={`nav-link px-3 ${isPathActive('/blogs')}`} href="/blogs ">Blogs</a>
                    <a className={`nav-link px-3 ${isPathActive('/contactus')}`} href="/contactus ">Contact us</a>
                  </div>

                  <div className="d-none d-xl-block mx-auto">
                    <Link className="text-dark">
                      <div className="d-flex align-items-center gap-3">
                        <div className="inner-icon"><i className="fas fa-envelope fs-4 text-primary" /></div>
                        <div className="inner-text">
                          <span className="m-0 fs-7">Email</span><p className="fs-8 fw-bold mb-0">grocerygo@gmail.com</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div><Link className="btn-lang border-0 rounded-5 hw-40" type="button"><img src="/assets/img/flag-lang.png" className="img-fluid lag-img rounded-5" alt='' /></Link></div>
                    <div className="cart-area d-block nav-sidebar-bg"><a href="/cart" className="text-primary"><i className="fas fa-basket-shopping" /><span className="cart-badge">0</span></a></div>
                    <div><a className="nav-link px-3 nav-sidebar-bg" href={'/login'}> <i className="fa-regular fa-user text-primary" /></a></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="mobile-menu-footer d-lg-none">
            <ul className="d-flex align-items-center mobile-menu-active p-0 m-0">
              <li className="position-relative">
                <a className={`${isPathActive('/')}`} href="/"><i className="fa fa-house" /><span className="tab-bar-text">Home</span></a>
              </li>
              <li className="position-relative">
                <a className={`${isPathActive('/categories')}`} href="/categories" type="button">
                  <i className="fa fa-box-archive" /><span className="tab-bar-text">Categories</span>
                </a>
              </li>
              <li className="position-relative">
                <a className={`${isPathActive('/cart')}`} href="/cart">
                  <i className="fa fa-bag-shopping position-relative">
                    <span className="cart-count cart-mobile text-white p-0">0</span>
                  </i>
                  <span className="tab-bar-text">Cart</span>
                </a>
              </li>
              <li className="position-relative">
                <a className={`${isPathActive('/search')}`} href="/search">
                  <i className="fa fa-search" />
                  <span className="tab-bar-text">Search</span>
                </a>
              </li>
              <li className="position-relative">
                <a className={`${isPathActive('/login')}`} href={'/login'}>
                  <i className="fa fa-user fs-6" />
                  <span className="tab-bar-text">Account</span>
                </a>
              </li>
            </ul>
          </div>
        </header>

        <SideBarMenu close={toggleSidebar} open={showSidebar} />

        <div className="content-wrapper">

          {children}

          <section className="sec-padding extra-marging">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card bg-light border-0">
                    <div className="card-body p-3 p-md-5">
                      <div className="row g-3 g-xl-4 align-items-center">
                        <div className="col-xl-8">
                          <div className="d-sm-flex align-items-center gap-3 mb-2">
                            <h1 className="fw-800">Still, have a question?</h1>
                            <ul className="avatar-group md-mt-0 d-flex">
                              <li className="avatar_xs"><img className="rounded-circle w-100 h-100" src="/assets/img/vandors/01.jpg" alt="avatar" /></li>
                              <li className="avatar_xs"><img className="rounded-circle w-100 h-100" src="/assets/img/vandors/02.jpg" alt="avatar" /></li>
                              <li className="avatar_xs"><img className="rounded-circle w-100 h-100" src="/assets/img/vandors/03.jpg" alt="avatar" /></li>
                              <li className="avatar_xs"><img className="rounded-circle w-100 h-100" src="/assets/img/vandors/04.jpg" alt="avatar" /></li>
                              <li className="avatar_xs"><img className="rounded-circle w-100 h-100" src="/assets/img/vandors/05.jpg" alt="avatar" /></li>
                            </ul>
                          </div>
                          <p className="text-muted pt-2 mb-0 truncate-3">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
                        </div>
                        <div className="col-xl-4  text-xl-end"><a href="/contactus" type="button" className="btn btn-primary px-4">Contact us</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Start Here */}
          <footer className="d-lg-block d-none">
            <div className="footer bg-light">
              <div className="container">
                <div className="row footer-area justify-content-between border-bottom-primary">
                  <div className="col-xl-3 col-12 left-side mt-3">
                    <a href="/"> <img src="/assets/img/logo.png" width={150} className="my-3" alt="footer_logo" /> </a>
                    <h1>GroceryGo: The All-in-One Grocery Platform</h1>
                    <p>GroceryGo is your convenient one-stop shop for all your grocery needs. Browse a wide selection of fresh produce, pantry s...</p>
                  </div>
                  <div className="col-xl-8 col-12 right-side">
                    <div className="row g-2 justify-content-between">
                      <div className="col-md-3 col-sm-4 col-auto mb-2">
                        <h4>Legal</h4>
                        <ul>
                          <li><a href="/abous-us" className="text-dark fs-7">About</a></li>
                          <li><a href="/privacy-policy" className="text-dark fs-7">Privacy Policy</a></li>
                          <li><a href="/refund-policy" className="text-dark fs-7">Refund Policy</a></li>
                          <li><a href="/terms-conditions" className="text-dark fs-7">Terms &amp; Conditions</a></li>
                        </ul>
                      </div>

                      <div className="col-md-3 col-sm-4 col-auto mb-2">
                        <h4>Other pages</h4>
                        <ul>
                          <li><a href="/ourteam" className="text-dark fs-7">Our Team</a> </li>
                          <li><a href="/faq" className="text-dark fs-7">FAQs</a></li>
                          <li><a href="/gallery" className="text-dark fs-7">Gallery</a> </li>
                          <li><a href="/contactus" className="text-dark fs-7"> Help &amp; Contact us</a> </li>
                          <li><a href="/blogs" className="text-dark fs-7">Blogs</a></li>
                        </ul>
                      </div>

                      <div className="col-lg-5 col-12 col-auto mb-2">
                        <h4 className="mb-3">Newslatter</h4>
                        <div className="mb-3">
                          <p className="text-dark fs-7">Receive our latest updates about our products &amp; promotions.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4 footer-form">
                          <div className="input-group gap-2">
                            <input type="text" className="form-control rounded" name="email" placeholder="Email" required value={emailNewsletter} onChange={(e) => setEmailNewsletter(e.target.value)} />
                            <button className="btn btn-secondary rounded px-4" type="submit">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row g-3 align-items-center justify-content-sm-between justify-content-center mb-3 mt-md-4 mt-sm-2 mt-0">
                      <div className="col-sm-6 col-12">
                        <ul className="footer_acceped_card d-flex flex-wrap gap-1 p-0 m-0">
                          <li><img src="/assets/img/about/payment-65893b4da12e0.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-65893b4da08fa.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-65893b4da17ce.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-65893b4da0e7e.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-6673cd7ac0a18.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-65893b4da1ce4.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-667d4d89d3562.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-667d4d80d6415.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-6673cd38139d5.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-6673cd40b19dd.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-6673cd499e08a.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-6673cd59717e7.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-6673cd62a0be5.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-6673cf9a147eb.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-671c98f20d9eb.png" className="w-20px" /></li>
                          <li><img src="/assets/img/about/payment-666c1060c136c.png" className="w-20px" /></li>
                        </ul>
                      </div>
                      <div className="col-sm-6 text-center text-sm-end">
                        <h5 className="mb-2 fw-bold text-dark">Follow us</h5>
                        <div className="d-flex gap-2 justify-content-center justify-content-sm-end">
                          <a className="btn-social px-2 mb-0" href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook" /></a>
                          <a className="btn-social px-2 mb-0" href="https://www.google.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                          <a className="btn-social px-2 mb-0" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                          <a className="btn-social px-2 mb-0" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
                          <a className="btn-social px-2 mb-0" href="https://www.pinterest.com" target="_blank"><i className="fa-brands fa-pinterest" /></a>
                          <a className="btn-social px-2 mb-0" href="https://www.tiktok.com" target="_blank"><i className="fa-brands fa-tiktok" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div><p className="text-dark col-auto my-sm-3 my-2 fs-7 text-center">Copyright @GroceryGo All Rights Reserved</p></div>
            </div>
          </footer>


          {/* whatsapp chat */}
          <input type="checkbox" id="check" />
          <label className="chat-btn  chat-btn_rtl" htmlFor="check"><i className="fa-brands fa-whatsapp comment fs-4" /><i className="fa fa-close close fs-4" /></label>
          <div className="shadow wrapper_rtl wrapper-wp ">
            <div className="wp_header"><h6 className="m-0 px-2">GroceryGo </h6></div>
            <div className="text-start p-3 bg-msg">
              <div className="card p-2 msg d-inline-block border-0 fs-7 fw-600"> How Can Help You?</div>
            </div>
            <div className="chat-form">
              <form target="_blank" className="d-flex align-items-center d-grid gap-2">
                <textarea className="form-control m-0 fw-600" name="text" placeholder="Your Text Message" rows={1} required />
                <button className="btn btn-whatsapp btn-block m-0"><i className="fa-solid fa-paper-plane" /></button>
              </form>
            </div>
          </div>

          {/* Quick call */}
          <input type="checkbox" id="quick_call" />
          <label className="quick-btn quick-btn_ltr" id="quick-btn" htmlFor="quick_call">
            <div className="comment">
              <div className="d-flex gap-2 align-items-center"><i className="fa-solid fa-phone fs-5" /></div>
            </div><i className="fa fa-close close" />
          </label>
          <div className="shadow quick_call">
            <div className="call_info pb-0">
              <img src="/assets/img/about/quick-call-66a3b1f3d424e.png" className="caller_img mx-auto" alt="" /><h6>John Doe</h6>
              <p className="text-center mb-0 mt-1 fs-8">Hey there 👋 Need help? I'm here for you, so just give me a call.</p>
            </div>
            <div className="p-3">
              <div className="text-center bg-primary-rgb rounded-3 py-2 w-100">
                <Link to={''} className="text-dark"> <i className="fa-solid fa-phone" /> +91XXXXXXXXXX</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ltr-buttons">
          <button onClick={toggleOffcanvas} className="btn btn-primary offer-button" type="button"><i className="fa-solid fa-tag"></i>Offers</button>
        </div>

        <OfferSidebar open={showOffer} close={toggleOffcanvas} />

      </div>
    </main>


    <div className={`js-cookie-consent cookie-consent fixed shadow inset-x-0 ${isAcceptedCookie ? "" : "d-none"}`}>
      <div className="container">
        <div className="p-3 rounded-lg bg-yellow-100">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="col-lg-7 col-xl-7">
              <div className="d-flex align-items-center gap-3">
                <img src="/assets/img/cookies.png" className="cookie-image" alt="" />
                <p className="ml-3 text-white cookie-consent__message mb-0">Your experience on this site will be improved by allowing cookies.</p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mt-lg-0 mt-3">
              <div className="row g-2 justify-content-end">
                <div className="col-lg-5 col-6">
                  <button onClick={CookiesCancel} id="btndecline" className="btn fw-500 btn-border-white text-white w-100 js-cookie-consent-agree cookie-consent__agree cursor-pointer">Reject</button>
                </div>
                <div className="col-lg-5 col-6">
                  <button onClick={() => setIsAcceptedCookie(false)} id="btnagree" className="btn fw-500 btn-primary border-0 text-white w-100 js-cookie-consent-agree cookie-consent__agree cursor-pointer">Accept</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AddToCart onClose={AddCartModel} open={isAddCartModel} />
    <CheckOutGuest close={GuestModel} open={isGuestModel} />
    <NewsLatterModel close={ShowNewsLatter} show={isNewsLatter} />
  </>)
}
