import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios';

export default function Faq() {
   const [faqs, setFaqs] = useState([]);

   const [isAccordionOpen, setIsAccordionOpen] = useState(0);
   const handleToggle = (index) => { setIsAccordionOpen(isAccordionOpen === index ? null : index); };

   useEffect(() => {
      const fetchFaqs = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/faq/all`);
            setFaqs(res.data);
         } catch (error) {
            console.error('Error fetching FAQs:', error);
         }
      };
      fetchFaqs();
   }, []);
   
   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item "><a className="text-primary fw-bold" href="">FAQs</a> </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container faq">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">FAQs</h3>
               <div className="d-lg-flex justify-content-center">
                  <div className="col-lg-6 col-12 p-2 faq-img"><img src="/assets/img/about/faq_image.png" className="w-100" alt="" /></div>
                  <div className="col-lg-6 col-12 p-2">
                     <div className="accordion faq" id="faqleft">
                        {faqs.map((faq, index) => (
                           <div key={faq._id} className="accordion-item border rounded mb-3">
                              <h2 className="accordion-header" id={`faq${index}`}>
                                 <button
                                    className={`accordion-button rounded mb-0 ${isAccordionOpen === index ? '' : 'collapsed'}`}
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#faqs${index}`}
                                    aria-expanded={isAccordionOpen === index}
                                    aria-controls={`collapseOne${index}`}
                                    onClick={() => handleToggle(index)} >
                                    {faq.title}
                                 </button>
                              </h2>
                              <div
                                 id={`faqs${index}`}
                                 className={`accordion-collapse collapse ${index === 0 && "show"}`}
                                 aria-labelledby={`faq${index}`} data-bs-parent="#faqleft">
                                 <div className="accordion-body fs-7 text-muted fw-600">
                                    {faq.description}
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   )
}
