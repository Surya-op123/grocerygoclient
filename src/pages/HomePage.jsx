import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

import OwlCarousel from "react-owl-carousel";
import ProductItem from '../components/ProductItem';
import ProductItemLG from '../components/ProductItemLG';

const offers = [
  { text: "Excellent Offer For Shop : OFF10" },
  { text: "Every Friday 20% Discounts : FRD20" },
  { text: "First Grocery Online Order 25% Off : FIRST25" }
];

const features = [
  {
    icon: "fa-truck-fast",
    title: "Free Delivery",
    desc: "Enjoy free home delivery on all orders above ₹499.",
  },
  {
    icon: "fa-stopwatch-20",
    title: "Express Delivery",
    desc: "Get your groceries delivered in under 30 minutes.",
  },
  {
    icon: "fa-map-location-dot",
    title: "Live Tracking",
    desc: "Track your order in real-time from our store to your door.",
  },
  {
    icon: "fa-phone",
    title: "24/7 Customer Support",
    desc: "Need help? Our support team is here anytime you need.",
  },
];

const banner1Items = [
  {
    href: '/menu?category=dairy-products',
    imgSrc: '/assets/img/banner/banner-66713544906db.png',
    alt: 'Dairy Products',
  },
  {
    href: '/menu?category=bread-bakery',
    imgSrc: '/assets/img/banner/banner-66713529b8e3d.png',
    alt: 'Bread & Bakery',
  },
  {
    href: '/menu?category=condiments-spices',
    imgSrc: '/assets/img/banner/banner-66713555302c4.png',
    alt: 'Condiments & Spices',
  },
  {
    href: '/menu?category=fruits',
    imgSrc: '/assets/img/banner/banner-66713562566cb.png',
    alt: 'Fruits',
  },
  {
    href: '/menu?category=snacks',
    imgSrc: '/assets/img/banner/banner-667135356f00c.png',
    alt: 'snacks',
  }
];

const banner2Items = [
  "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/banner/banner-62f791e41ddd7.png",
  "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/banner/banner-62f791c12e25f.png",
  "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/banner/banner-62f791b44bde0.png",
  "https://grocerygo.infotechgravity.com/storage/app/public/admin-assets/images/banner/banner-62f791cb27ccd.png",
];

const categories = [
  {
    name: "Vegetables",
    image: "/assets/img/category/category-62f1f463de7a1.jpg",
    link: "/menu?category=vegetables-12",
  },
  {
    name: "Condiments & Spices",
    image: "/assets/img/category/category-62f1f4f61b5b1.jpg",
    link: "/menu?category=condiments-spices",
  },
  {
    name: "Bread & Bakery",
    image: "/assets/img/category/category-62f1f9acd4fd6.jpg",
    link: "/menu?category=bread-bakery",
  },
  {
    name: "Beverage",
    image: "/assets/img/category/category-62f1f73d70175.jpg",
    link: "/menu?category=beverage",
  },
  {
    name: "Snacks",
    image: "/assets/img/category/category-62f1f94c34021.jpg",
    link: "/menu?category=snacks",
  },
  {
    name: "Dairy Products",
    image: "/assets/img/category/category-62f1f7c7b0ebe.jpg",
    link: "/menu?category=dairy-products",
  },
  {
    name: "Meat",
    image: "/assets/img/category/category-62f1f852827a1.jpg",
    link: "/menu?category=meat",
  },
  {
    name: "Personal Care",
    image: "/assets/img/category/category-62f1f6e0c099b.jpg",
    link: "/menu?category=personal-care",
  },
  {
    name: "Fruits",
    image: "/assets/img/category/category-62f1f3b743b54.jpg",
    link: "/menu?category=fruits",
  },
  {
    name: "Cleaning Supplies",
    image: "/assets/img/category/category-62f1fa2913b17.jpg",
    link: "/menu?category=cleaning-supplies",
  },
];

const groceryItems = [
  {
    discount: 20.0,
    img1: "/assets/img/item/item-66728f6a5bd4b.jpg",
    img2: "/assets/img/item/item-66728f6a5c3db.jpg",
    category: "Beverage",
    rating: 0.0,
    name: "Nescafe Classic Instant Coffee - Pack of 60 Sachet",
    price: 88.00,
    originalPrice: 110.00,
    stockStatus: null,
  },
  {
    discount: 46.7,
    img1: "/assets/img/item/item-667287fdd1fba.jpeg",
    img2: "/assets/img/item/item-667287ed5fa88.jpeg",
    category: "Meat",
    rating: 4.2,
    name: "Meatzza Fresh Chicken Wings (Frozen)",
    price: 80.00,
    originalPrice: 150.00,
    stockStatus: null,
  },
  {
    discount: 18.2,
    img1: "/assets/img/item/item-66717896db644.jpg",
    img2: "/assets/img/item/item-66717896db10a.jpg",
    category: "Bread Bakery",
    rating: 4.5,
    name: "Baked Whole Wheat Sandwich Bread (Crustless)",
    price: 90.00,
    originalPrice: 110.00,
    stockStatus: null,
  },
  {
    discount: 50.0,
    img1: "/assets/img/item/item-66728e7c30ec4.jpg",
    img2: "/assets/img/item/item-66728e7c308b1.jpg",
    category: "Snacks",
    rating: 3.8,
    name: "Chheda's Salt-n-Pepper Banana Chips - 170 g",
    price: 45.00,
    originalPrice: 90.00,
    stockStatus: null,
  },
  {
    discount: 20.0,
    img1: "/assets/img/item/item-66728df63d2e3.jpg",
    img2: "/assets/img/item/item-66728df63dbed.jpg",
    category: "Snacks",
    rating: 4.0,
    name: "Lay's India's Magic Masala Potato Chips (40 g)",
    price: 40.00,
    originalPrice: 50.00,
    stockStatus: null,
  },
  {
    discount: 33.3,
    img1: "/assets/img/item/item-664c8ad77300d.jpeg",
    img2: "/assets/img/item/item-664c8ad772415.png",
    category: "Vegetables",
    rating: 3.9,
    name: "Onion",
    price: 100.00,
    originalPrice: 150.00,
    stockStatus: null,
  },
  {
    discount: 15.0,
    img1: "/assets/img/item/item-664c7f00648d3.png",
    img2: "/assets/img/item/item-664c7f0064314.png",
    category: "Fruits",
    rating: 4.6,
    name: "Sinduri Mango",
    price: 85.00,
    originalPrice: 100.00,
    stockStatus: null,
  },
  {
    discount: 20.0,
    img1: "/assets/img/item/item-66755f6c5dd5d.jpg",
    img2: "/assets/img/item/item-66755f6c5d650.jpg",
    category: "Dairy Products",
    rating: 4.1,
    name: "Amul Gold Full Cream Fresh Milk",
    price: 24.00,
    originalPrice: 30.00,
    stockStatus: null,
  },
  {
    discount: 20.0,
    img1: "/assets/img/item/item-66728d022f587.jpg",
    img2: "/assets/img/item/item-66728d022f1e0.jpg",
    category: "Snacks",
    rating: 4.7,
    name: "Uncle Chipps Spicy Treat Flavour Potato Chips",
    price: 40.00,
    originalPrice: 50.00,
    stockStatus: "In Stock",
  },
  {
    discount: 20.0,
    img1: "/assets/img/item/item-66716a0fda81c.jpg",
    img2: "/assets/img/item/item-66716a0fda577.jpg",
    category: "Bread Bakery",
    rating: 4.3,
    name: "Let's Try Ragi Kaju Pista Cookies",
    price: 144.00,
    originalPrice: 180.00,
    stockStatus: "In Stock",
  },
];

const best_products = [
  {
    title: "Chheda's Salt-n-Pepper Banana Chips - 170 g",
    category: "Snacks",
    discount: "50.0% OFF",
    price: 45.00,
    originalPrice: 90.00,
    rating: 0.0,
    img: "/assets/img/item/item-66728e7c308b1.jpg",
    stockStatus: null,
  },
  {
    title: "Baked Whole Wheat Sandwich Bread (Crustless)",
    category: "Bread & Bakery",
    discount: "18.2% OFF",
    price: 90.00,
    originalPrice: 110.00,
    rating: 0.0,
    img: "/assets/img/item/item-66717896db10a.jpg",
    stockStatus: null,
  },
  {
    title: "Lay's India's Magic Masala Potato Chips (40 g)",
    category: "Snacks",
    discount: "20.0% OFF",
    price: 40.00,
    originalPrice: 50.00,
    rating: 0.0,
    img: "/assets/img/item/item-66728df63cbed.jpg",
    stockStatus: null,
  },
  {
    title: "Amul Cheese Cubes",
    category: "Dairy Products",
    discount: "14.3% OFF",
    price: 120.00,
    originalPrice: 140.00,
    rating: 0.0,
    img: "/assets/img/item/item-66755cfb9fc67.jpg",
    stockStatus: null,
  },
  {
    title: "Kurkure Masala Munch Crisps",
    category: "Snacks",
    discount: "20.0% OFF",
    price: 80.00,
    originalPrice: 100.00,
    rating: 0.0,
    img: "/assets/img/item/item-66728a1d04e20.jpg",
    stockStatus: null,
  },
  {
    title: "Amul Unsalted Butter",
    category: "Dairy Products",
    discount: "16.7% OFF",
    price: 150.00,
    originalPrice: 180.00,
    rating: 0.0,
    img: "/assets/img/item/item-66755df8d822f.jpg",
    stockStatus: null,
  },
  {
    title: "Red Bull Energy Drink",
    category: "Beverage",
    discount: "20.0% OFF",
    price: 120.00,
    originalPrice: 150.00,
    rating: 0.0,
    img: "/assets/img/item/item-667552bfc539a.jpg",
    stockStatus: null,
  },
  {
    title: "Green Grapes",
    category: "Fruits",
    discount: "20.0% OFF",
    price: 60.00,
    originalPrice: 75.00,
    rating: 0.0,
    img: "/assets/img/item/item-664c840cb9faa.png",
    stockStatus: null,
  },
  {
    title: "Meatzza Fresh Chicken Wings (Frozen)",
    category: "Meat",
    discount: "46.7% OFF",
    price: 80.00,
    originalPrice: 150.00,
    rating: 0.0,
    img: "/assets/img/item/item-667287ed5fa88.jpeg",
    stockStatus: "In Stock",
  },
]

export default function HomePage() {

  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 6000,
    dots: false,
    nav: false,
    margin: 15,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1260: {
        items: 4.5
      }
    }
  };

  const featureSetting = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      }
    },
  };

  const banner1 = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const categorySettings = {
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 2 },
      400: { items: 3 },
      590: { items: 4 },
      768: { items: 5 },
      1000: { items: 6 },
    },
    navText: [
      '<i className="fa fa-arrow-left"></i>',
      '<i className="fa fa-arrow-right"></i>',
    ],

  };

  const banner2 = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplaySpeed: 4000,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
    },
  };

  const blogSettings = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      575: { items: 2 },
      768: { items: 3 },
      1100: { items: 4 },
    },
  };

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => { new window.bootstrap.Tooltip(el); });
  }, []);


  return (<Layout>
    {/* Main Banner Slider */}
    <section className="my-4 mb-0">
      <div className="container">
        <div className="slider-area overflow-hidden rounded-4">
          <div id="slidercarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item">
                <Link><img src="/assets/img/slider1.png" className="d-block img-fluid" alt="slider" /></Link>
              </div>
              <div className="carousel-item active">
                <Link><img src="/assets/img/slider2.png" className="d-block img-fluid" alt="slider" /></Link>
              </div>
            </div>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#slidercarousel" data-bs-slide-to={0}  aria-label="Slide 1" />
              <button type="button" data-bs-target="#slidercarousel" data-bs-slide-to={1} className="active" aria-label="Slide 1" aria-current="true" />
            </div>
            <button className="carousel-control-prev btn-none " type="button" data-bs-target="#slidercarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-angle-left" /></span>
            </button>
            <button className="carousel-control-next btn-none" type="button" data-bs-target="#slidercarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa fa-angle-right" /></span>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Offer Text Slider as Marquee */}
    <section className="sec-padding pb-0">
      <OwlCarousel className="offer-slider owl-theme bg-primary py-3" {...options}>
        {offers.map((offer, index) => (
          <div key={index} className="item">
            <p className="m-0 py-1 text-center text-white whitespace-nowrap">
              {offer.text}
            </p>
          </div>
        ))}
      </OwlCarousel>
    </section>

    {/* Features */}
    <section className="sec-padding">
      <div className="container">
        <div className="d-lg-block d-none">
          <div className="row justify-content-center g-4">
            {features.map((i, index) => (
              <div key={index} className="col-sm-6 col-lg-3 col-xl-3 d-md-flex justify-content-center border-end">
                <div className="quality h-100">
                  <div className="quality-wrapper d-flex align-items-center">
                    <div className="quality-icon"> <i className={`fa-solid ${i.icon}`} /> </div>
                    <div className="quality-content px-3">
                      <h3 className="mb-0">{i.title}</h3>
                      <p>{i.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-fiechar-slider owl-theme d-lg-none">
          <OwlCarousel {...featureSetting}>
            {features.map((item, index) => (
              <div key={index} className="item">
                <div className="col">
                  <div className="quality w-100 h-100">
                    <div className="quality-wrapper d-flex gap-3 align-items-center justify-content-center">
                      <div className="quality-icon">
                        <i className={`fa-solid ${item.icon}`} />
                      </div>
                      <div className="quality-content">
                        <h3 className="mb-0">{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>

    {/* Banner Category */}
    <section className="banner1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <OwlCarousel className="owl-carousel" {...banner1} id="news-slider">
              {banner1Items.map((item, index) => (
                <div className="post-slide" key={index}>
                  <div className="post-img">
                    <a href={item.href}>
                      <img src={item.imgSrc} alt={item.alt} />
                    </a>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>

    {/* Why Shop With Us */}
    <section className="about-product sec-padding">
      <div className="container">
        <div className="row g-2 align-items-center justify-content-between pt-4">
          <div className="col-lg-6 col-md-12 d-md-block d-none">
            <div className="position-relative">
              <img src="/assets/img/fruit-mask-2.png" alt="fruit-mask" className="w-100" />
              <img src="/assets/img/index/choose-66712da93b9f0.webp" alt="fruits" className="fruits-img position-absolute top-50 start-50 translate-middle w-100" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <h5 className="truncate-1">Why Shop With Us?</h5>
            <h3 className="fw-bold fs-2 mb-2 truncate-2">Your One-Stop Online Store for Fresh & Quality Groceries</h3>
            <p className="text-muted fw-700 truncate-3">
              We bring you the freshest groceries, everyday essentials, and household products — delivered straight to your doorstep. Experience the convenience of fast, reliable, and affordable online grocery shopping.
            </p>
            <div className="row g-md-4 g-3 mt-3">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <div className="fruit_list col-4">
                    <img src="/assets/img/index/choose-667165c888855.png" className="w-100 h-100" />
                  </div>
                  <div className="px-3">
                    <h5 className="mb-2 fs-6 fw-bold truncate-1">Fast & Fresh Delivery</h5>
                    <p className="fs-7 fw-500 mb-0 text-muted">
                      Get your groceries delivered on time, fresh and in perfect condition — every single time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <div className="fruit_list col-4">
                    <img src="/assets/img/index/choose-667165c0b45e0.png" className="w-100 h-100" />
                  </div>
                  <div className="px-3">
                    <h5 className="mb-2 fs-6 fw-bold truncate-1">Wide Product Selection</h5>
                    <p className="fs-7 fw-500 mb-0 text-muted">
                      Choose from thousands of items including fresh produce, dairy, snacks, beverages, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <div className="fruit_list col-4">
                    <img src="/assets/img/index/choose-667165cfcabc9.png" className="w-100 h-100" />
                  </div>
                  <div className="px-3">
                    <h5 className="mb-2 fs-6 fw-bold truncate-1">Top Quality Products</h5>
                    <p className="fs-7 fw-500 mb-0 text-muted">
                      We partner with trusted suppliers to ensure every product meets the highest quality standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <div className="fruit_list col-4">
                    <img src="/assets/img/index/choose-667165d69fd3a.png" className="w-100 h-100" />
                  </div>
                  <div className="px-3">
                    <h5 className="mb-2 fs-6 fw-bold truncate-1">Great Deals & Discounts</h5>
                    <p className="fs-7 fw-500 mb-0 text-muted">
                      Enjoy competitive pricing, exclusive offers, and discounts on your everyday grocery needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Category */}
    <section className="category">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row align-items-center justify-content-between mb-5 g-3">
              <div className="col-auto">
                <h2 className="sec-title fw-800 text-capitalize">Featured Categories</h2>
                <p className="sub-title text-capitalize m-0">Discover fresh produce &amp; pantry staples.</p>
              </div>
              <div className="col-auto text-end align-center">
                <a href="/categories" className="btn btn-secondary px-4">View All <i className="fa fa-arrow-right" /></a>
              </div>
            </div>

            <OwlCarousel id="category" className="mt-2" {...categorySettings}>
              {categories.map((category, index) => (
                <div key={index} className="category-wrapper card">
                  <a href={category.link}>
                    <div className="cat rounded-circle d-flex m-auto">
                      <img src={category.image} alt={category.name} className="rounded-circle" />
                    </div>
                    <div className="card-body p-0">
                      <p className="text-dark text-center my-2">{category.name}</p>
                    </div>
                  </a>
                </div>
              ))}
            </OwlCarousel>

          </div>
        </div>
      </div>
    </section>

    <section className="menu sec-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-5 g-3">
          <div className="col-auto menu-heading">
            <h2 className="sec-title fw-800 text-capitalize">Popular Products</h2>
            <p className="sub-title text-capitalize m-0">Quick &amp; Easy: Grab popular items for a hassle-free meal.</p>
          </div>
          <div className="col-auto">
            <a href="/view-all" className="btn btn-secondary px-4">View All <i className="fa fa-arrow-right" /></a>
          </div>
        </div>
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-sm-3 g-2">
          {groceryItems.map((i) => (<ProductItem key={i.name} i={i} />))}
        </div>
      </div>
    </section>

    <section className="banner2">
      <div className="container">
        <div id="banner1" className="carousel slide carousel-fade pointer-event" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="/menu?category=fruits"> <img src="/assets/img/banner/banner-66713c3ae3695.png" height={400} alt="Fruits Banner" className="d-block w-100" /> </a>
            </div>
            <div className="carousel-item">
              <a href="/menu?category=vegetables-12"><img src="/assets/img/banner/banner-66713c2d7af27.png" height={400} alt="" className="d-block w-100" /> </a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#banner1" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true" /> <span className="visually-hidden">Previous</span> </button>
          <button className="carousel-control-next" type="button" data-bs-target="#banner1" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true" /> <span className="visually-hidden">Next</span> </button>
        </div>
      </div>
    </section>

    <section className="menu sec-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-5 g-3">
          <div className="col-auto menu-heading">
            <h2 className="sec-title fw-800 text-capitalize">Daily Best Products</h2>
            <p className="sub-title text-capitalize m-0">Fresh Picks of the Day: Grab these before they're gone! </p>
          </div>
          <div className="col-auto">
            <a href="/view-all" className="btn btn-secondary px-4">View All <i className="fa fa-arrow-right" /></a>
          </div>
        </div>

        <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-sm-2 row-cols-1 g-sm-3 g-2">
          {best_products.map((i) => (<ProductItemLG key={i.title}  i={i} />))}
        </div>
      </div>
    </section>

    <section className="banner1">
      <div className="container">
        <OwlCarousel id="bannersection2" {...banner2}>
          {banner2Items.map((image, index) => (
            <div key={index}>
              <div className="post-slide">
                <div className="post-img-">
                  <Link><img src={image} className="h-100 w-100 object-fit-cover" alt={`banner-${index}`} /></Link>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>

    <section className="menu sec-padding">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-5 g-3">
          <div className="col-auto menu-heading">
            <h2 className="sec-title fw-800 text-capitalize">Recently Added</h2>
            <p className="sub-title text-capitalize m-0">Just In: Discover exciting new products!</p>
          </div>
          <div className="col-auto"><a href="/view-all" className="btn btn-secondary px-4">View All <i className="fa fa-arrow-right" /></a></div>
        </div>
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-sm-3 g-2">
          {groceryItems.map((i) => (<ProductItem key={i.name} i={i} />))}
        </div>
      </div>
    </section>

    <section className="banner2">
      <div className="container">
        <div id="banner3" className="carousel slide carousel-fade pointer-event" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="/menu?category=vegetables-12"><img src="/assets/img/banner/banner-6711fd57861f3.png" height={400} alt="banner3" /></a>
            </div>
          </div>
          <button className="carousel-control-prev d-none" type="button" data-bs-target="#banner3" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true" /> <span className="visually-hidden">Previous</span></button>
          <button className="carousel-control-next d-none" type="button" data-bs-target="#banner3" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true" /> <span className="visually-hidden">Next</span> </button>
        </div>
      </div>
    </section>

    <section className="top-deal menu position-relative sec-padding">
      <div className="container">
        <img className="bg-img-1 tomato d-xl-block d-none" src="/assets/img/group-f.png" alt="img" />
        <img className="bg-img-2 leaf" src="/assets/img/Leaf1.png" alt="img" />
        <img className="bg-img-2 slice" src="/assets/img/tomato1.png" alt="img" />
        <div>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-5">
              <div className="countdown px-3 py-4 rounded-4 overflow-hidden">
                <div>
                  <div className="row align-items-center text-center justify-content-center mb-lg-5 mb-4">
                    <div className="col-auto menu-heading mx-auto">
                      <h2 className="sec-title fw-800 text-capitalize">Top Deal</h2>
                      <p className="sub-title text-capitalize m-0">Must-Have on Sale!</p>
                    </div>
                  </div>
                  <div className="countdown-counter" id="countdown">
                    <div className="timer countdown__days js-days"><p className="mb-0">0</p> DAYS <span /></div>
                    <div className="timer countdown__hours js-hours"><p className="mb-0">2</p> HOURS<span /></div>
                    <div className="timer countdown__minutes js-minutes"><p className="mb-0">18</p> MINUTES<span /></div>
                    <div className="timer countdown__seconds js-seconds"><p className="mb-0">58</p> SECONDS<span /></div>
                  </div>
                  <div className="mt-lg-5 mt-4">
                    <div className="row align-items-center text-center justify-content-center">
                      <div className="col-auto">
                        <a href="/view-all" className="btn btn-outline-primary">View All<i className="fa-solid fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-sm-2 row-cols-1 g-md-3 g-2">
                {best_products.slice(0, 6).map((i) => (<ProductItemLG key={i.title} i={i} />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="app_download sec-padding pt-0">
        <div className="container">
          <div className="app-download rounded-5 bg-light p-md-5 p-4">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-md-8 col-12 d-flex align-items-center order-md-0 order-2">
                <div className="app_content">
                  <h2 className="mb-2">Make your online shop easier with our mobile app</h2>
                  <span className="sub-title text-capitalize m-0">Experience the Revolutionised &amp; user-friendly Top online Grocery ordering system to skyrocket Groceries sales.</span>
                  <div className="my-4 d-flex">
                    <a href="https://play.google.com/store/apps" target="_blank"><img src="/assets/img/index/playstore.png" width={153} height={46}  alt=''/> </a>
                    <a className="ms-2" href="https://www.apple.com/in/itunes/" target="_blank"><img src="/assets/img/index/appstore.svg" width={153} height={46}  alt=''/></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6 mx-auto d-flex justify-content-center align-items-center app-screen">
                <img src="/assets/img/about/mobile_app_image-666adf359f3b8.webp" alt="app-screen" className="w-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="blog-wrapper sec-padding pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5 g-3">
            <div className="col-auto blog-heading">
              <h2 className="sec-title fw-800 text-capitalize">Latest blogs</h2>
              <p className="sub-title text-capitalize m-0">Get Inspired: Latest Grocery Tips &amp; Trends.</p>
            </div>
            <div className="col-auto"><a href="/blogs" className="btn btn-secondary px-4">View All<i className="fa fa-arrow-right" /></a></div>
          </div>

          <OwlCarousel className="blog-slider" {...blogSettings}>
            {Array.from({ length: 4 }, (_, i) => (
              <div className="item m-2" key={i}>
                <div className="card card-hover rounded-4 overflow-hidden">
                  <a href={'/blog-item'}><img src={"/assets/img/about/blog-800_400.svg"} className="card-img-top" alt={''} /></a>
                  <div className="card-body px-3 pb-0">
                    <h5 className="card-title fw-bold dark_color">
                      <a href={'/blog-item'} className="dark_color">{"Addictive Appetizers: Sausage Cheese Balls"}</a>
                    </h5>
                    <p className="fs-7 text-muted m-0">Lorem is dummy ipsum text. Lorem is dummy ipsum text...</p>
                  </div>
                  <div className="card-footer border-0 bg-transparent px-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="col-auto mb-0 blog-date"><span className="text-muted fw-600">{"23/04/2025"}</span></div>
                      <a href={'/blog-item'} className="text-primary border-0 fw-500 fs-7 float-end">Read More <i className="fa fa-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>


  </Layout >)
}
