import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import ShowToast from '../../components/ShowToast';

export default function LoginPage() {
   const { login, loading } = useAuth();
   const navigate = useNavigate();

   const [email, setEmail] = useState('user@gmail.com');
   const [password, setPassword] = useState('123456');
   const [isEye, setIseEye] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await login(email, password);
         ShowToast({ message: 'Login Successful', type: 'success' });
         navigate('/');
      } catch (err) {
         ShowToast({ message: 'Login Failed: ' + err, type: 'error' });
      }
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
                           <h2 className="mb-4 h3 fw-800">Hey there! <br />Welcome back <span className="text-secondary">Grocery</span></h2>

                           <form onSubmit={handleSubmit} className="row g-2">
                              <div className="form-body mt-4">
                                 <div className="form-group mb-3">
                                    <label className="text-black form-label fs-7 mb-1">Email<span className="text-danger">*</span></label>
                                    <input type="email" name="email" className="form-control custom-input mb-1" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                 </div>

                                 <div className="form-group mb-3 check-password">
                                    <label className="text-black form-label fs-7 mb-1">Password<span className="text-danger">*</span></label>
                                    <input type={`${isEye ? "text" : "password"}`} name="password" className="form-control custom-input mb-1" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <span onClick={() => setIseEye(!isEye)} className="eye"><i className={`fa-regular fa-eye${isEye ? "" : "-slash"}`} id="eye" /></span>
                                 </div>

                                 <div className="form-group d-flex justify-content-end">
                                    <a href="/forgot-password" className="text-primary fw-bold fs-7 float-end">Forgot password?</a>
                                 </div>

                                 <div className="row g-3 mt-3 align-items-center">
                                    <div className="col-sm-6"><button type="submit" className="btn btn-primary w-100 p-2">{loading ? 'Logging in...' : 'Login'}</button></div>

                                    <div className="col-sm-6">
                                       <div className="row g-3">
                                          <div className="col-6">
                                             <a href="" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center p-2">
                                                <img src="/assets/img/about/google.svg" alt="google" className="social-login" />
                                             </a>
                                          </div>
                                          <div className="col-6">
                                             <a href="" className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center p-2">
                                                <img src="/assets/img/about/facebook.svg" alt="google" className="social-login" />
                                             </a>
                                          </div>
                                       </div>
                                    </div>

                                 </div>
                              </div>
                              <div className="my-3">
                                 <p className="text-black mb-0 fs-7">Don't have an account?<a href="/register" className="text-primary fw-bold ">Signup</a></p>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}
