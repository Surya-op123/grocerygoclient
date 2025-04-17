import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // Fetch user profile
   const fetchUserProfile = async () => {
      try {
         const token = localStorage.getItem("token") || sessionStorage.getItem("token");
         if (!token) return;

         const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
         });
         setUser(res.data);
      } catch (err) {
         console.error("Error fetching profile:", err.response?.data?.message);
         setUser(null);
      } finally {
         setLoading(false);
      }
   };

   const updateUserProfile = (updatedUser) => {
      setUser(updatedUser);
   };

   useEffect(() => {
      fetchUserProfile();
   }, []);

   const login = async (email, password, rememberMe = false) => {
      try {
         const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
            email,
            password,
            rememberMe,
         });

         const { token } = res.data.user;
         // Save token in localStorage
         if (rememberMe) {
            localStorage.setItem("token", token);
         } else {
            sessionStorage.setItem("token", token);
         }

         // Fetch user profile
         await fetchUserProfile();

      } catch (err) {
         throw err.response?.data?.message || "Access denied!";
      }
   };

   const register = async (userData) => {
      try {
         const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, userData);
         console.log("Register response:", res.data);
         const token = res.data.token || res.data.user?.token;

         if (token) {
            localStorage.setItem("token", token);
            await fetchUserProfile();
         } else {
            throw new Error("Token missing from response");
         }
      } catch (err) {
         throw err.response?.data?.message || err.message || "Registration failed!";
      }
   };

   const changePassword = async (oldpassword, newpassword, confirmpassword) => {
      try {
         const token = localStorage.getItem("token") || sessionStorage.getItem("token");
         if (!token) throw new Error("Unauthorized");

         const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/change-password`,
            { oldpassword, newpassword, confirmpassword },
            {
               headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
               },
            }
         );

         return res.data.message || "Password changed successfully!";
      } catch (err) {
         throw err.response?.data?.message || "Password change failed!";
      }
   };

   const logout = () => {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      setUser(null);
   };



   // Categery All List 
   const getAllCategories = async () => {
      try {
         const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories`);
         return res.data;
      } catch (err) {
         console.error("Error fetching categories:", err);
         return [];
      }
   };

   // Categery All List 
   const getAllSubCategories = async () => {
      try {
         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/subcategories`);
         return response.data;
      } catch (err) {
         console.error("Error fetching categories:", err);
         return [];
      }
   };




   const [isBlur, setIsBlur] = useState(false);
   const [isAddCartModel, setIsAddCartModel] = useState(false);
   const AddCartModel = () => {
      setIsAddCartModel((prev) => !prev);
      setIsBlur((prev) => !prev);
   }

   const [isGuestModel, setIsGuestModel] = useState(false);
   const GuestModel = () => {
      setIsGuestModel((prev) => !prev);
      setIsBlur((prev) => !prev);
   }

   const [isNewsLatter, setIsNewsLatter] = useState(false);
   const ShowNewsLatter = () => {
      setIsNewsLatter((prev) => !prev);
      setIsBlur((prev) => !prev);
   }

   const [isAcceptedCookie, setIsAcceptedCookie] = useState(false);
   const CookiesCancel = () => {
      setIsAcceptedCookie(false);
      ShowNewsLatter();
   }

   return (
      <AuthContext.Provider value={{
         user, login, register, updateUserProfile, changePassword,
         logout, isAuthenticated: !!user, loading,

         getAllCategories, getAllSubCategories,

         AddCartModel, isAddCartModel, isBlur,
         isGuestModel, GuestModel,
         isNewsLatter, ShowNewsLatter,
         isAcceptedCookie, CookiesCancel, setIsAcceptedCookie
      }}>
         {children}
      </AuthContext.Provider>
   );
};
