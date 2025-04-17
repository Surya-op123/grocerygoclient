import { BrowserRouter, Route, Routes } from "react-router-dom"

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import HomePage from "./pages/HomePage"

import Categories from "./pages/Products/Categories"
import MenuPages from "./pages/Products/MenuPages"
import ViewAllProduct from "./pages/Products/ViewAllProduct"
import SearchPage from "./pages/Products/SearchPage";
import ProductDetails from "./pages/Products/ProductDetails";

import BlogsPage from "./pages/BlogsPage"
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";

import AbousUsPage from "./pages/Abouts/AbousUsPage";
import PrivacyPolicy from "./pages/Abouts/PrivacyPolicy";
import RefundPolicy from "./pages/Abouts/RefundPolicy";
import TermsConditions from "./pages/Abouts/TermsConditions";
import OurTeam from "./pages/Abouts/OurTeam";
import Faq from "./pages/Abouts/Faq";

import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CartPage from "./pages/Products/CartPage";
import CheckOutPage from "./pages/Products/CheckOutPage";
import SuccessPage from "./pages/Products/SuccessPage";
import OrderDetails from "./pages/Products/OrderDetails";
import ProfilePages from "./pages/Auth/ProfilePages";
import OrdersPage from "./pages/Auth/OrdersPage";
import FavouriteList from "./pages/Auth/FavouriteList";
import AddressPage from "./pages/Auth/AddressPage";
import AddressAdd from "./pages/Auth/AddressAdd";
import MyWalletPage from "./pages/Auth/MyWalletPage";
import AddMoney from "./pages/Auth/AddMoney";
import ReferEarn from "./pages/ReferEarn";
import DeleteAccount from "./pages/Auth/DeleteAccount";


function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/profile" element={<ProfilePages />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/favouritelist" element={<FavouriteList />} />
        <Route path="/delete" element={<DeleteAccount />} />

        <Route path="/address" element={<AddressPage />} />
        <Route path="/address" >
          <Route path="add" element={<AddressAdd />} />
          <Route path="update" element={<AddressAdd />} />
        </Route>

        <Route path="/wallet" element={<MyWalletPage />} />
        <Route path="/wallet" >
          <Route path="addmoney" element={<AddMoney />} />
        </Route>

        <Route path="/categories" element={<Categories />} />
        <Route path="/menu" element={<MenuPages />} />

        <Route path="/product-page" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />

        <Route path="/success" element={<SuccessPage />} />
        <Route path="/order-details" element={<OrderDetails />} />

        <Route path="/view-all" element={<ViewAllProduct />} />

        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog-item" element={<BlogsPage />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/refer-earn" element={<ReferEarn />} />

        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/abous-us" element={<AbousUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
