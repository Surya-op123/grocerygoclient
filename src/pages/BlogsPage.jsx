import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useLocation, useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import { formatDate } from '../utils/DateFormat';
import { useAuth } from '../contexts/AuthContext';

export default function BlogsPage() {
   const location = useLocation();
   const isBlogs = location.pathname === "/blogs";
   const { getAllBlogs } = useAuth();

   const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
         0: { items: 1 },
         570: { items: 2 },
         768: { items: 3 },
         1000: { items: 4 }
      }
   };

   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      const fetchBlogs = async () => {
         const data = await getAllBlogs();
         setBlogs(data);
      };
      fetchBlogs();
   }, [getAllBlogs]);

   const { slug } = useParams();
   const [blog, setBlog] = useState(null);

   useEffect(() => {
      const fetchBlog = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/blogs/${slug}`);
            setBlog(res.data);
            console.log(res.data);
         } catch (err) {
            console.error(err);
         }
      };
      fetchBlog();
   }, [slug]);

   if (!isBlogs) {
      if (!blog) return <p>Blog not found.</p>;
   }

   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">

                     <ol className="breadcrumb">
                        <li className="breadcrumb-item "><Link className="text-dark" href="/">Home</Link></li>
                        <li className="breadcrumb-item "><Link className="text-primary fw-bold" href="/blogs">Blogs</Link></li>
                        {!isBlogs && <li className="breadcrumb-item text-primary fw-bold active">{blog.title}</li>}
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         {isBlogs ? <>
            <section className="my-5">
               <div className="blog-wrapper">
                  <div className="container">
                     <h3 className="fw-bold fs-2 mb-4 truncate-2">Latest blogs</h3>
                     <div className="row">
                        {blogs.map((blog) => (
                           <div key={blog._id} className="col-xl-3 col-lg-4 col-md-6  col-auto d-flex mb-4">
                              <div className="card card-hover rounded-4 overflow-hidden">
                                 <Link to={`/blogs/${blog._id}`}><img src={blog.blogImage} className="card-img-top" alt="..." /></Link>
                                 <div className="card-body px-3 pb-0">
                                    <h5 className="card-title fw-bold dark_color">
                                       <Link to={`/blogs/${blog._id}`} className="dark_color">{blog.title}</Link>
                                    </h5>
                                    <p className="fs-7 text-muted m-0">{blog.message.slice(0, 100)}...</p>
                                 </div>
                                 <div className="card-footer border-0 bg-transparent px-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="col-auto mb-0 blog-date">
                                          <span className="text-dark">{formatDate(blog.updatedAt)}</span>
                                       </div>
                                       <Link to={`/blogs/${blog._id}`} className="text-primary border-0 fs-7 float-end">Read More
                                          <i className="fa fa-arrow-right" />
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

         </> : <>
            <section className="my-5">
               <div className="container">
                  <h3 className="fw-bold fs-2 mb-4 truncate-2">Blogs Details</h3>
                  <div className="row">
                     <div className="col-lg-12 mb-lg-0 mb-4">
                        <div className="blog-details">
                           <div className="card p-0">
                              <img src={blog.blogImage} className="card-img-top" alt="..." />
                              <div className="card-body">
                                 <div className="row justify-content-between">
                                    <div className="col-auto blog-date mb-3"><span className="text-muted fw-600">{formatDate(blog.updatedAt)}</span></div>
                                 </div>
                                 <h4 className="card-title fw-bold dark_color mb-3">{blog.title}</h4>
                                 <p className="card-text">{blog.message}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="my-5">
               <div className="blog-wrapper">
                  <div className="container">
                     <div className="row align-items-center justify-content-between my-5 px-2">
                        <div className="col-auto blog-heading"><h2 className="mb-0 fw-800 text-capitalize">Recent blogs</h2></div>
                        <div className="col-auto"><Link to="/blogs" className="btn btn-primary px-4">View All <i className="fa fa-arrow-right" /></Link></div>
                     </div>

                     <OwlCarousel className="blog-slider" {...options}>
                        {blogs.map((blog) => (
                           <div className="item m-2" key={blog._id}>
                              <div className="card card-hover rounded-4 overflow-hidden">
                                 <Link to={`/blogs/${blog._id}`}><img src={blog.blogImage} className="card-img-top" alt={''} /></Link>
                                 <div className="card-body px-3 pb-0">
                                    <h5 className="card-title fw-bold dark_color">
                                       <Link to={`/blogs/${blog._id}`} className="dark_color">{blog.title}</Link>
                                    </h5>
                                    <p className="fs-7 text-muted m-0">{blog.message.slice(0, 100)}...</p>
                                 </div>
                                 <div className="card-footer border-0 bg-transparent px-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="col-auto mb-0 blog-date"><span className="text-muted fw-600">{formatDate(blog.updatedAt)}</span></div>
                                       <Link to={`/blogs/${blog._id}`} className="text-primary border-0 fw-500 fs-7 float-end">Read More <i className="fa fa-arrow-right" /></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </OwlCarousel>
                  </div>
               </div>
            </section>
         </>}
      </Layout>
   )
}
