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
// Components
import { Slide, ToastContainer } from "react-toastify";

//React router
import { Route, Routes } from "react-router-dom";

// style sheets
import "./Styles/Main.scss";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Components/common/Spinner/Spinner";

function App() {
  return (
    <div>
      <Spinner />

      <Blocker />
      <Header />
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="About-Us" element={<About />} />
          <Route path="Service" element={<Service />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Products" element={<Products />} />
          <Route path="Details/:pathName" element={<Product_details />} />
          <Route path="Wishlist" element={<Wishlist />} />
          {
            "spinner not finished yet                                            "
          }
          <Route path="Checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
