import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';

export default function GalleryPage() {
   const [galleryImages, setGalleryImages] = useState([]);

   useEffect(() => {
      const fetchFaqs = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/gallery`);
            setGalleryImages(res.data);
         } catch (error) {
            console.error('Error fetching galleryImgs:', error);
         }
      };
      fetchFaqs();
   }, []);

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
                        <li className="breadcrumb-item"> <a className="fw-bold text-dark" href="/">Home</a> </li>
                        <li className="breadcrumb-item text-primary fw-bold active" aria-current="page">Gallery</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container mb-5">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">Gallery</h3>
               <div id="galleryimg">
                  {galleryImages.map((src) => (
                     <div key={src._id} data-src={src.galleryImage} data-fancybox="gallery" data-thumb={src.galleryImage}>
                        <img src={src.galleryImage} width={200} height={150} />
                     </div>
                  ))}
               </div>

            </div>
         </section>
      </Layout>
   )
}
