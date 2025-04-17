import React, { useEffect, useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { useAuth } from '../../contexts/AuthContext';
import axios from "axios";
import ShowToast from '../../components/ShowToast';

export default function ProfilePages() {
   const { user, updateUserProfile, changePassword } = useAuth();

   const [formUpdateData, setFormUpdateData] = useState({
      name: "",
      mobile: "",
      profileImage: "",
      file: null,
   });

   useEffect(() => {
      if (user) {
         setFormUpdateData({
            name: user.name || "",
            mobile: user.mobile || "",
            profileImage: user.profileImage || "/assets/img/unknown.png",
            file: null,
         });
      }
   }, [user]);

   const handleUpdateChange = (e) => {
      const { name, value, files } = e.target;
      if (name === "profile_image" && files[0]) {
         const file = files[0];
         setFormUpdateData((prev) => ({
            ...prev,
            file: file,
            profileImage: URL.createObjectURL(file),
         }));
      } else {
         setFormUpdateData((prev) => ({ ...prev, [name]: value }));
      }
   };

   const handleUpdateSubmit = async () => {
      try {
         const token = localStorage.getItem("token") || sessionStorage.getItem("token");
         const form = new FormData();
         form.append("name", formUpdateData.name);
         form.append("mobile", formUpdateData.mobile);
         if (formUpdateData.file) form.append("profileImage", formUpdateData.file);

         const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/users/profile/update/${user._id}`,
            form,
            {
               headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
               },
            }
         );

         updateUserProfile(res.data.user);
         ShowToast({ message: 'Profile updated successfully!', type: 'success' });
      } catch (err) {
         ShowToast({ message: 'Profile update failed: ' + err, type: 'error' });
      }
   };

   // Password Change 
   const [formChangePassData, setFormChangePassData] = useState({
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
   });

   const [showPassword, setShowPassword] = useState({
      old: false,
      new: false,
      confirm: false,
   });

   const [errors, setErrors] = useState({});

   const toggleVisibility = (field) => {
      setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
   };

   const handleChangePass = (e) => {
      const { name, value } = e.target;
      setFormChangePassData((prev) => ({ ...prev, [name]: value }));
   };

   // Real-time validation
   useEffect(() => {
      const errs = {};

      const pwd = formChangePassData.newpassword;

      if (pwd && !/(?=.*[a-z])/.test(pwd)) {
         errs.newpassword = "Must include a lowercase letter.";
      } else if (pwd && !/(?=.*[A-Z])/.test(pwd)) {
         errs.newpassword = "Must include an uppercase letter.";
      } else if (pwd && !/(?=.*\d)/.test(pwd)) {
         errs.newpassword = "Must include a number.";
      } else if (pwd && !/(?=.*[!@#$%^&*])/.test(pwd)) {
         errs.newpassword = "Must include a special character.";
      } else if (pwd && pwd.length < 8) {
         errs.newpassword = "Password must be at least 8 characters.";
      }

      if (
         formChangePassData.confirmpassword &&
         formChangePassData.confirmpassword !== formChangePassData.newpassword
      ) {
         errs.confirmpassword = "Passwords do not match.";
      }

      setErrors(errs);
   }, [formChangePassData.newpassword, formChangePassData.confirmpassword]);

   const handleChangePassSubmit = async (e) => {
      e.preventDefault();

      // Final validation check
      if (Object.keys(errors).length > 0) {
         ShowToast({ message: 'Please fix the form errors before submitting.', type: 'warning' });
         return;
      }

      try {
         await changePassword(
            formChangePassData.oldpassword,
            formChangePassData.newpassword,
            formChangePassData.confirmpassword
         );

         ShowToast({ message: 'Password changed successfully!', type: 'success' });

         // Clear form
         setFormChangePassData({
            oldpassword: "",
            newpassword: "",
            confirmpassword: "",
         });
         setErrors({});
      } catch (err) {
         ShowToast({ message: 'Password change failed: ' + err, type: 'error' });
      }
   };


   return (
      <AuthLayout title={"My Profile"} body={
         <div className="col-lg-9">
            <div className="user-content-wrapper h-100">
               <p className="title pb-2 border-bottom">My Profile</p>
               <form action="" method="POST" encType="multipart/form-data">
                  <div className="mb-3 align-items-center">
                     <div className="col-md-2 col-sm-3 col-4 mb-3">
                        <div className="avatar-upload mx-md-0 mx-auto">
                           <div className="avatar-edit ">
                              <input type="file" name="profile_image" id="imageupload" accept=".png, .jpg, .jpeg" onChange={handleUpdateChange} />
                              <label htmlFor="imageupload"><i className="fa-solid fa-pen" /></label>
                           </div>
                           <div className="avatar-preview">
                              <div id="imagepreview"><img src={formUpdateData.profileImage || "/assets/img/unknown.png"} alt='' id="imgupload" /></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="row g-3">
                           <div className="col-md-4">
                              <div className="form-group mb-3">
                                 <label className="form-label mb-1">Full name</label>
                                 <input type="text" className="form-control" name="name" placeholder="Full name" value={formUpdateData.name} onChange={handleUpdateChange} required />
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="form-group mb-3">
                                 <label className="form-label mb-1">Email</label>
                                 <input type="email" className="form-control" name="email" placeholder="Email" value={user?.email ?? "user@gmail.com"} disabled />
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="form-group mb-3">
                                 <label className="form-label mb-1">Mobile</label>
                                 <input type="text" className="form-control" name="mobile" placeholder="Mobile" value={formUpdateData.mobile} onChange={handleUpdateChange} disabled />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-12 text-end ">
                        <button className="btn btn-primary px-4 mb-0 " type="button" onClick={handleUpdateSubmit} >Save</button>
                     </div>
                  </div>
               </form>

               <hr />

               <p className="title">Alert Settings</p>
               <div className="row">
                  <div className="col-md-12">
                     <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                           <h5 className="mb-0">Email</h5>
                           <span>
                              <input type="checkbox" className="checkbox-switch" id="send_email-switch" data-url="/profile/send-email-status" name="send_email" defaultChecked />
                              <label htmlFor="send_email-switch" className="switch">
                                 <span className="switch__circle"><span className="switch__circle-inner" /></span>
                                 <span className=" switch__left ps-2">OFF</span>
                                 <span className=" switch__right pe-2">On</span>
                              </label>
                           </span>
                        </li>
                        <li className="list-group-item px-0">
                           <small>Keep this ON to receive emails from the system</small>
                        </li>
                     </ul>
                  </div>
               </div>

               <hr className="my-4" />

               <div>
                  <p className="title pb-2 border-bottom">Change Password</p>
                  <form >
                     <div className="row g-md-3 g-2">
                        <div className="form-group col-md-4">
                           <label className="form-label mb-1">{errors.oldpassword ? <span className="text-danger ms-2">({errors.oldpassword})</span> : "Old passwod"}</label>
                           <div className='d-flex position-relative'>
                              <input type={showPassword.old ? "text" : "password"} className="form-control" name="oldpassword" value={formChangePassData.oldpassword} onChange={handleChangePass} placeholder="Old password" required />
                              <span onClick={() => toggleVisibility("old")} className="eye eye-on-off"><i className={`fa-regular fa-eye${showPassword.old ? "" : "-slash"}`} /></span>
                           </div>
                        </div>

                        <div className="form-group col-md-4">
                           <label className="form-label mb-1">{errors.newpassword ? <span className="text-danger ms-2">({errors.newpassword})</span> : "New passwod"}</label>
                           <div className='d-flex position-relative'>
                              <input type={showPassword.new ? "text" : "password"} className="form-control" name="newpassword" value={formChangePassData.newpassword} onChange={handleChangePass} placeholder="New password" required />
                              <span onClick={() => toggleVisibility("new")} className="eye eye-on-off"><i className={`fa-regular fa-eye${showPassword.new ? "" : "-slash"}`} /></span>
                           </div>
                        </div>
                        <div className="form-group col-md-4">
                           <label className="form-label mb-1">{errors.confirmpassword ? <span className="text-danger ms-2">({errors.confirmpassword})</span> : "Confirm passwod"}</label>
                           <div className='d-flex position-relative'>
                              <input type={showPassword.confirm ? "text" : "password"} className="form-control" name="confirmpassword" value={formChangePassData.confirmpassword} onChange={handleChangePass} placeholder="Confirm password" required />
                              <span onClick={() => toggleVisibility("confirm")} className="eye eye-on-off"><i className={`fa-regular fa-eye${showPassword.confirm ? "" : "-slash"}`} /></span>
                           </div>
                        </div>
                        <div className="form-group mt-3 text-end">
                           <button type="button" onClick={handleChangePassSubmit} className="btn btn-primary px-4">Submit</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      } />
   )
}
