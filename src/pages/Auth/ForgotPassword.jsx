import React from 'react'
import ShowToast from '../../components/ShowToast';

export default function ForgotPassword() {
   const handleSubmit = async (e) => {
      e.preventDefault();
      ShowToast({ message: 'Function Not Developed', type: 'warning' });
   };
   return (
      <main>
         <section className="authentication_sec bg-light">
            <div className="container">
               <div className="d-flex align-items-center justify-content-center vh-100">
                  <div className="row gx-0 justify-content-center">
                     {/*--- authentication image ---*/}
                     <div className="col-xl-5 col-lg-6 col-12 d-none d-lg-block">
                        <img src="/assets/img/about/auth_bg_image.png" alt="authentication image" className="h-100 object-fit-cover w-100 rounded-start-2 object-fit-cover" />
                     </div>
                     {/*--- authentication form ---*/}
                     <div className="col-xl-5 col-lg-6 col-12 form-content rounded-end-2">
                        <div className="p-3 p-md-4 w-100">
                           <a href="/"><img src="/assets/img/about/logo-666adc05b3552.png" className="logo mb-4" alt='' /></a>
                           <h2 className="mb-3 h3 fw-800">Hey there! <br />Welcome back <span className="text-secondary">Grocery</span></h2>

                           <form onSubmit={handleSubmit} className="auth_form">
                              <div className="my-3">
                                 <label className="form-label fs-7">Email<span className="text-danger">*</span></label>
                                 <div className="input-group flex-nowrap">
                                    <input type="email" name="email" className="form-control" placeholder="Email" />
                                 </div>
                              </div>
                              <div className="my-3 d-grid">
                                 <button type="submit"  className="btn btn-primary p-2 mt-3">Submit</button>
                              </div>
                           </form>

                           <div className="my-3">
                              <p className="mb-0 fs-7">
                                 Don't have an account?
                                 <a href="/register" className="text-primary fw-bold ">Signup</a>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}
