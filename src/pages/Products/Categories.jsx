import Layout from '../../components/Layout'

const categories = [
   {
      name: "Vegetables",
      image: "/assets/img/category/category-62f1f463de7a1.jpg",
   },
   {
      name: "Condiments & Spices",
      image: "/assets/img/category/category-62f1f4f61b5b1.jpg",
   },
   {
      name: "Bread & Bakery",
      image: "/assets/img/category/category-62f1f9acd4fd6.jpg",
   },
   {
      name: "Beverage",
      image: "/assets/img/category/category-62f1f73d70175.jpg",
   },
   {
      name: "Snacks",
      image: "/assets/img/category/category-62f1f94c34021.jpg",
   },
   {
      name: "Dairy Products",
      image: "/assets/img/category/category-62f1f7c7b0ebe.jpg",
   },
   {
      name: "Meat",
      image: "/assets/img/category/category-62f1f852827a1.jpg",
   },
   {
      name: "Personal Care",
      image: "/assets/img/category/category-62f1f6e0c099b.jpg",
   },
   {
      name: "Fruits",
      image: "/assets/img/category/category-62f1f3b743b54.jpg",
   },
   {
      name: "Cleaning Supplies",
      image: "/assets/img/category/category-62f1fa2913b17.jpg",
   },
];

export default function Categories() {


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
                  {categories.map((i) => (
                     <div className="col-lg-2 col-md-3 col-sm-4 col-6 category">
                        <div className="category-wrapper">
                           <div className="category-card">
                              <a href={'/menu'}>
                                 <div className="cat rounded-circle mx-auto">
                                    <img src={i.image} className="rounded-circle" alt="category" />
                                 </div>
                              </a>
                           </div>
                           <p className="my-2 text-center line-1">{i.name}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

      </Layout>
   )
}
