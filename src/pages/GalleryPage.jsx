import React, { useEffect } from 'react'
import Layout from '../components/Layout'

const galleryImages = [
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f66226ed74f.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f6616a45ab7.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f6616a45156.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65df3443f4.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65df3440be.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65df343e2a.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65df343b59.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65df343103.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65bf21fc17.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65bf21f9b5.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65bf21f6f2.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65bf21f110.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65bf21e99e.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62f65bf21dcf1.jpeg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62ed082c7315e.jpg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62ed082c71dbc.jpg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62ed082c70713.jpg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62ed082c6f0fc.jpg",
   "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/about/gallery-62ed082c6767e.jpg"
];

export default function GalleryPage() {
   useEffect(() => {
      if (window.Fancybox) {
         window.Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
               autoStart: true,
            },
            Toolbar: {
               display: [
                  "counter",
                  "zoom",
                  "slideshow",
                  "fullscreen",
                  "thumbs",
                  "close",
               ],
            },
         });
      }
   }, []);


   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "> <a className="fw-bold text-dark" href="/">Home</a> </li>
                        <li className="breadcrumb-item  text-primary fw-bold active" aria-current="page">Gallery</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container mb-5">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">Gallery</h3>
               <div id="galleryimg">
                  {galleryImages.map((src, index) => (
                     <div key={index} data-src={src} data-fancybox="gallery" data-thumb={src}>
                        <img src={src} width={200} height={150} />
                     </div>
                  ))}
               </div>

            </div>
         </section>
      </Layout>
   )
}
