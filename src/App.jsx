// Layout
import Blocker from "./Components/layout/blocker/Blocker";
import Footer from "./Components/layout/footer/Footer";
import Header from "./Components/layout/header/Header";
import Main from "./Components/layout/main/Main";
import Navbar from "./Components/layout/navbar/Navbar";
import TopButton from "./Components/layout/top_button/TopButton";

// Pages
import About from "./Components/pages/about/About";
import Cart from "./Components/pages/cart/Cart";
import Checkout from "./Components/pages/checkout/Checkout";
import Contact from "./Components/pages/contact/Contact";
import Error from "./Components/pages/error/Error";
import Home from "./Components/pages/home/Home";
import Product_details from "./Components/pages/product_details/Product_details";
import Products from "./Components/pages/products/Products";
import Service from "./Components/pages/service/Service";
import wishlist from "./Components/pages/wishlist/wishlist";

// Template
import Template from "./Template";

// Main style sheet
import "./Styles/Main.scss";

function App() {
  return (
    <div className="wrapper">
      <Template />
    </div>
  );
}

export default App;
