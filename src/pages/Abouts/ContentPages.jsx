import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';

export default function AboutUsPage({ type, title }) {
   const [isContent, setContent] = useState('');
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchAbout = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/content/${type}`);
            if (res.data && res.data.content) {
               setContent(res.data.content);
            }
            console.log("Fetched response:", res);
         } catch (error) {
            console.error('Failed to fetch about content', error);
            console.error('Error details:', error.response ? error.response : error);
         } finally {
            setIsLoading(false);
         }
      };

      fetchAbout();
   }, [type]);

   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-dark fw-bold" href="/">Home</a> </li>
                        <li className="breadcrumb-item"><a className="text-primary fw-bold" href="">{title}</a></li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <div className='container p-0'>
            {isLoading ?
               <div className='d-flex justify-content-center'><div className="loader" /></div>
               :
               <div dangerouslySetInnerHTML={{ __html: isContent }} />
            }
         </div>
      </Layout>
   );
}
