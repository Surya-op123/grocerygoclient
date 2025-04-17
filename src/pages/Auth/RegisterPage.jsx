import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import ShowToast from '../../components/ShowToast';

export default function RegisterPage() {
   const { register } = useAuth();
   const navigate = useNavigate();

   const [isEye, setIseEye] = useState(false);
   const [errors, setErrors] = useState({});
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      referral_code: '',
      password: '',
      confirm_password: '',
   });

   // Handle input changes and field-level validation
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      setErrors((prevErrors) => {
         const newErrors = { ...prevErrors };
         switch (name) {
            case 'name':
               !value.trim() ? newErrors.name = 'Full name is required.' : delete newErrors.name;
               break;
            case 'email':
               if (!value.trim()) newErrors.email = 'Email is required.';
               else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = 'Please enter a valid email.';
               else delete newErrors.email;
               break;
            case 'mobile':
               if (!value.trim()) newErrors.mobile = 'Mobile Number is required.';
               else if (!/^\d{10}$/.test(value)) newErrors.mobile = 'Mobile Number must be exactly 10 digits.';
               else delete newErrors.mobile;
               break;
            case 'password':
               !value.trim() ? newErrors.password = 'Password is required.' : delete newErrors.password;
               formData.confirm_password && value !== formData.confirm_password
                  ? newErrors.confirm_password = 'Passwords do not match.'
                  : delete newErrors.confirm_password;
               break;
            case 'confirm_password':
               value !== formData.password
                  ? newErrors.confirm_password = 'Passwords do not match.'
                  : delete newErrors.confirm_password;
               break;
            default:
               break;
         }
         return newErrors;
      });
   };

   // Form-level validation and registration handling
   const handleSubmit = async (e) => {
      e.preventDefault();
      const newErrors = {};

      if (!formData.name.trim()) newErrors.name = "Full name is required.";
      if (!formData.email.trim()) newErrors.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email.";

      if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required.";
      else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile Number must be exactly 10 digits.";

      if (!formData.password.trim()) newErrors.password = "Password is required.";
      if (!formData.confirm_password.trim()) newErrors.confirm_password = "Please confirm your password.";
      else if (formData.password !== formData.confirm_password) newErrors.confirm_password = "Passwords do not match.";

      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
      }

      try {
         await register(formData);
         ShowToast({ message: 'Registration Successful', type: 'success' });
         navigate('/');
      } catch (error) {
         ShowToast({ message: 'Registration Failed: ' + error, type: 'error' });
      }
   };

   return (
      <main>
         <section className="authentication_sec register bg-light h-100">
            <div className="container">
               <div className="d-flex align-items-center justify-content-center vh-100">
                  <div className="row gx-0 justify-content-center">
                     <div className="col-xl-5 col-lg-6 col-12 d-none d-lg-block">
                        <img src="/assets/img/about/auth_bg_image.png" alt="authentication image" className="h-100 object-fit-cover w-100 rounded-start-2 object-fit-cover" />
                     </div>

                     <div className="col-xl-5 col-lg-6 col-12 form-content rounded-end-2">
                        <div className="p-3 p-md-4 w-100">
                           <a href="/"><img src="/assets/img/about/logo-666adc05b3552.png" className="logo mb-4" alt='' /></a>
                           <h2 className="mb-4 h3 fw-800">Get started absolutely <br />free at <span className="text-secondary">Grocery.</span></h2>

                           <form onSubmit={handleSubmit} className="auth_form">
                              <div className="form-body mt-3">
                                 <div className="form-group mb-3">
                                    <label className="text-black form-label fs-7 mb-1" htmlFor="name">
                                       {errors.name ? <span className="text-danger">{errors.name}</span> : <>Full name<span className="text-danger">*</span></>}
                                    </label>
                                    <input type="text" className="form-control custom-input rounded" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} />
                                 </div>

                                 <div className="form-group mb-3">
                                    <label className="text-black form-label fs-7 mb-1" htmlFor="email">
                                       {errors.email ? <span className="text-danger">{errors.email}</span> : <>Email<span className="text-danger">*</span></>}
                                    </label>
                                    <input type="email" className="form-control custom-input rounded" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="Email" />
                                 </div>

                                 <div className="form-group mb-3">
                                    <div className="row g-3">
                                       <div className="col-md">
                                          <label className="text-black form-label fs-7 mb-1" htmlFor="mobile">
                                             {errors.mobile ? <span className="text-danger">{errors.mobile}</span> : <>Mobile<span className="text-danger">*</span></>}
                                          </label>
                                          <input type="text" className="form-control custom-input rounded" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
                                       </div>

                                       <div className="col-md">
                                          <label className="text-black form-label fs-7 mb-1" htmlFor="referral_code">Referral Code</label>
                                          <input type="text" className="form-control custom-input rounded" id="referral_code" name="referral_code" placeholder="Referral Code (Optional)" value={formData.referral_code} onChange={handleChange} />
                                       </div>
                                    </div>
                                 </div>

                                 <div className="form-group mb-3">
                                    <div className="row g-3">
                                       <div className="col-md check-password">
                                          <label className="text-black form-label fs-7 mb-1">
                                             {errors.password ? <span className="text-danger">{errors.password}</span> : <>Password<span className="text-danger">*</span></>}
                                          </label>
                                          <input type={isEye ? "text" : "password"} name="password" className="form-control custom-input" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                                          <span onClick={() => setIseEye(!isEye)} className="eye"><i className={`fa-regular fa-eye${isEye ? "" : "-slash"}`} /></span>
                                       </div>

                                       <div className="col-md">
                                          <label className="text-black form-label fs-7 mb-1" htmlFor="confirm_password">
                                             {errors.confirm_password ? <span className="text-danger">{errors.confirm_password}</span> : <>Confirm Password<span className="text-danger">*</span></>}
                                          </label>
                                          <input type="password" className="form-control custom-input rounded" id="confirm_password" name="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} />
                                       </div>
                                    </div>
                                 </div>

                                 <div className="form-group d-flex gap-2 align-items-center">
                                    <input type="checkbox" name="checkbox" id="checkbox" defaultValue={1} className="form-check-input m-0" defaultChecked />
                                    <label htmlFor="checkbox" className="form-check-label m-0">
                                       I accept the <a href="/terms-conditions" className="text-primary text-decoration-none fw-bold">Terms & Conditions</a>
                                    </label>
                                 </div>

                                 <div className="form-group mt-3">
                                    <button type="submit" className="btn btn-primary w-100 p-2">Signup</button>
                                 </div>
                              </div>
                           </form>

                           <p className="mb-0 fs-7 mt-3 fw-500 text-muted">Already have an account? <a href="/login" className="text-primary fw-bold">Login</a></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
