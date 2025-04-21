import { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import { useAuth } from '../../contexts/AuthContext';


export default function Categories() {
   const { getAllCategories } = useAuth();
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      const fetchCategories = async () => {
         const data = await getAllCategories();
         setCategories(data.filter(category => category.status === true));
      };

      fetchCategories();
   }, [getAllCategories]);

   return (
      <Layout>
         <div className="breadcrumb-sec">
            <div className="container">
               <div className="breadcrumb-sec-content">
                  <nav className="text-dark d-flex breadcrumb-divider" aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item ">
                           <a className="fw-bold text-dark" href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item text-primary fw-bold active">Categories</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

         <section className="my-5">
            <div className="container">
               <h3 className="fw-bold fs-2 mb-4 truncate-2">Featured Categories</h3>
               <div className="row mb-3 g-sm-3 g-2">
                  {categories.map((cat) => (
                     <div key={cat._id} className="col-lg-2 col-md-3 col-sm-4 col-6 category">
                        <div className="category-wrapper">
                           <div className="category-card">
                              <a href={`/menu?category=${encodeURIComponent(cat.name)}`}>
                                 <div className="cat rounded-circle mx-auto">
                                    <img src={cat.categoryImage} alt={cat.name} className="rounded-circle" />
                                 </div>
                              </a>
                           </div>
                           <p className="my-2 text-center line-1">{cat.name}</p>
                        </div>
                     </div>
                  ))}

               </div>
            </div>
         </section>

      </Layout>
   )
}
