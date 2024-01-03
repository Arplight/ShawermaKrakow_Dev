// Layout
import Blocker from "./Components/layout/blocker/Blocker";
import Footer from "./Components/layout/footer/Footer";
import Header from "./Components/layout/header/Header";
import Main from "./Components/layout/main/Main";
import Navbar from "./Components/layout/navbar/Navbar";
import TopButton from "./Components/layout/top_button/TopButton";

// Pages
import Home from "./Components/pages/home/Home";
import About from "./Components/pages/about/About";
import Service from "./Components/pages/service/Service";
import Contact from "./Components/pages/contact/Contact";
import Error from "./Components/pages/error/Error";
import Cart from "./Components/pages/cart/Cart";
import Products from "./Components/pages/products/Products";
import Product_details from "./Components/pages/product_details/Product_details";
import Wishlist from "./Components/pages/wishlist/Wishlist";
import Checkout from "./Components/pages/checkout/Checkout";

//React router
import { Route, Routes } from "react-router-dom";

// Template
import Template from "./Template";

// Main style sheet
import "./Styles/Main.scss";

function App() {
  return (
    <div className="wrapper">
      {/* <Blocker /> */}
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="About-Us" element={<About />} />
          <Route path="Service" element={<Service />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Products" element={<Products />} />
          <Route path="Product_details" element={<Product_details />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path="Checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
      <TopButton />
      {/* Template */}
      {/* <Template /> */}
    </div>
  );
}

export default App;
