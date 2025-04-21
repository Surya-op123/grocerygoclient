import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ShowToast from './ShowToast';

export default function SideBarMenu({ close, open }) {
   useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : 'auto';
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, [open]);


   const { subscribeToNewsletter } = useAuth();
   const [emailNewsletter, setEmailNewsletter] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await subscribeToNewsletter(emailNewsletter);
      ShowToast({ message: result.message, type: result.success });
      if (result.success === "success") setEmailNewsletter('');
   };

   return (<>
      <div className={`offcanvas offcanvas-start ${open ? 'show' : ''}`} tabIndex="-1" id="footersiderbar" aria-labelledby="footersiderbar" aria-modal={open} role="dialog">
         <div className="offcanvas-header justify-content-between border-bottom">
            <img src="/assets/img/logo.png" className="object-fit-contain offcanvas-logo" alt="footer_logo" />
            <button onClick={close} type="button" className="btn-close shadow m-0" aria-label="Close" />
         </div>
         <div className="offcanvas-body">
            <h5 className="text-dark text-capitalize border-bottom pb-3 m-0 fw-600">Other pages</h5>
            <ul className="list-group list-add list-group-flush border-bottom">
               {[
                  { href: '/ourteam', label: 'Our Team' },
                  { href: '/faq', label: 'FAQs' },
                  { href: '/gallery', label: 'Gallery' },
                  { href: '/contactus', label: 'Help & Contact us' },
                  { href: '/blogs', label: 'Blogs' },
               ].map((item, idx) => (
                  <li key={idx} className="list-group-item px-0 py-3 ps-3">
                     <a className="fs-7 fw-500 d-flex gap-2 align-items-center" href={item.href}><i className="fa-solid fa-circle-dot fs-7" />{item.label}</a>
                  </li>
               ))}
            </ul>

            <h5 className="text-dark text-capitalize border-bottom py-3 m-0 fw-600">Legal</h5>
            <ul className="list-group list-add list-group-flush border-bottom">
               {[
                  { href: '/abous-us', label: 'About' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/refund-policy', label: 'Refund Policy' },
                  { href: '/terms-conditions', label: 'Terms & Conditions' },
               ].map((item, idx) => (
                  <li key={idx} className="list-group-item px-0 py-3 ps-3">
                     <a className="fs-7 fw-500 d-flex gap-2 align-items-center" href={item.href}><i className="fa-solid fa-circle-dot fs-7" />{item.label}</a>
                  </li>
               ))}
            </ul>

            <div className="social-media">
               <h5 className="text-dark text-capitalize pt-3 m-0 fw-600">Follow us</h5>
               <div className="d-flex gap-2 flex-wrap mt-3">
                  {[
                     { icon: 'facebook', url: 'https://www.facebook.com' },
                     { icon: 'instagram', url: 'https://www.instagram.com' },
                     { icon: 'linkedin-in', url: 'https://www.linkedin.com' },
                     { icon: 'twitter', url: 'https://www.twitter.com' },
                     { icon: 'pinterest', url: 'https://www.pinterest.com' },
                     { icon: 'tiktok', url: 'https://www.tiktok.com' },
                  ].map((item, idx) => (
                     <a key={idx} className="btn-social px-2 mb-0" href={item.url} target="_blank" rel="noopener noreferrer"><i className={`fa-brands fa-${item.icon}`} /></a>
                  ))}
               </div>
            </div>

            <div className="subscribe-box">
               <h5 className="text-dark text-capitalize pt-3 m-0 fw-600">Newsletter</h5>
               <p className="text-dark fs-7 my-3">Receive our latest updates about our products & promotions.</p>
               <form onSubmit={handleSubmit} className="mt-4 footer-form">
                  <div className="input-group gap-2">
                     <input type="email" className="form-control rounded" name="email" placeholder="Email" required value={emailNewsletter} onChange={(e) => setEmailNewsletter(e.target.value)} />
                     <button className="btn btn-secondary rounded px-4 py-2" type="submit">Subscribe</button>
                  </div>
               </form>
            </div>

            <hr className="mt-4 text-white mb-0" />
         </div>

         <div className="offcanvas-footer bg-dark border-top">
            <p className="m-0 fs-7 text-center text-light fw-500 px-2 py-2">© GroceryGo - All Rights Reserved</p>
         </div>
      </div>

      {open && <div onClick={close} className="offcanvas-backdrop fade show" />}
   </>);
}