import { IoIosArrowForward } from "react-icons/io";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import Shipping from "../public/Template icons/Shipping Overall.avif";
import Product from "../public/Images/Products/Bayonne Ham.webp";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import Stars from "../public/Template icons/Stars.svg";
import Member from "../public/Images/Main/Team/Team-1.webp";
import Badge from "../public/Template icons/Long shelf life.avif";
const Template = () => {
  return (
    <>
      {/* Fonts */}
      {/* Slider Headings */}
      <h1 className="font-primary">App</h1>
      {/* Section headings */}
      <h2 className="font-primary">App</h2>
      {/* Sub headings */}
      <h3 className="font-primary">App</h3>
      {/* Small headings */}
      <h4 className="font-primary">App</h4>
      {/* Large paragrapghs */}
      <p className="large-paragrapgh font-primary">App</p>
      {/* Small paragraphs */}
      <p className="small-paragrapgh font-primary">App</p>
      {/* Buttons */}
      {/* main button */}
      <button className="main-button font-secondary">
        Learn more <IoIosArrowForward className="text-[20px] button-arrow" />
      </button>
      <br />
      {/* full button */}
      <button className="full-button font-secondary">App</button>
      {/* hollow button */} <br />
      <button className="font-primary hollow-button">
        App <IoIosArrowForward className="text-[20px] button-arrow" />
      </button>
      {/* arrow button */}
      <button className="font-primary arrow-button">
        Shop now <IoIosArrowForward className="text-[20px] button-arrow" />
      </button>
      {/* dark button */}
      <button className="dark-button">Sign Up</button>
      {/* quantity button */}
      <div className="quantity-button">
        <button className="minus border-r-[1px] border-[#12342f]">
          <TiMinus />
        </button>
        <span>1</span>
        <button className="plus border-l-[1px] border-[#12342f]">
          <TiPlus />
        </button>
      </div>
      {/* top button */}
      <button className="top-button">
        <IoIosArrowUp />
      </button>
      {/* close button */}
      <button className="close-button">
        <IoClose />
      </button>
      {/* remove button */}
      <button className="remove-button">
        <IoTrashBinOutline />
      </button>
      {/* Cards */}
      {/* Info Card */}
      <div className="info-card">
        <div className="px-[70px]">
          <img src={Shipping} alt="Shipping-Overall" />
        </div>
        <h3 className="font-primary">Shipping Overall</h3>
        <p className="small-paragrapgh font-primary">
          Amet volutpat consequat mauris nunc congue nisi.
        </p>
        <button className="font-primary arrow-button">
          Start Shop
          <IoIosArrowForward className="text-[20px] button-arrow" />
        </button>
      </div>
      {/* Product card */}
      <div className="product-card">
        <div className="card-top">
          <img src={Product} alt="product" />
          <div className="card-buttons">
            <IoMdHeartEmpty />
            {/* <IoMdHeart /> */}
            <PiShoppingCart />
            {/* <PiShoppingCartFill /> */}
          </div>
        </div>
        <div className="card-bottom">
          <p className="small-paragrapgh font-primary italic">
            Pioneer Butcher
          </p>
          <h3 className="font-primary">Bayonne Ham</h3>
          <p className="small-paragrapgh font-primary">Rs. 530.00</p>
        </div>
      </div>
      {/* Team card */}
      <div className="team-card">
        <div className="member-image">
          <img src={Member} alt="team-member" />
        </div>
        <div className="member-info">
          <div className="member-name">
            <h3 className="font-primary">Hassan</h3>
          </div>
          <div className="member-position">
            <p className="small-paragrapgh font-secondary italic">CEO</p>
          </div>
        </div>
      </div>
      {/* Inpput fields */}
      <input
        type="email"
        name="checkout-mail"
        id="checkout-mail"
        placeholder="Type your email"
      />
      <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder="First name (Optional)"
      />
      <label
        htmlFor="range"
        className="small-paragrapgh font-primary flex items-start  flex-col"
      >
        range
        <input type="range" name="range" id="range" className="p-0" />
      </label>
      <label
        htmlFor="category"
        className="small-paragrapgh font-primary flex items-center gap-[8px]"
      >
        <input type="checkbox" name="category" id="category" />
        select
      </label>
      <label
        htmlFor="radio"
        className="small-paragrapgh font-primary flex items-center gap-[8px]"
      >
        <input type="radio" name="radio" id="radio" />
        select
      </label>
      <input type="search" name="" id="" />
      <textarea name="enquery" id="enquery" placeholder="enquery"></textarea>
      <select
        name="country"
        id="country"
        placeholder="rand"
        defaultValue={"default"}
      >
        <option value="default" disabled>
          Country / Region
        </option>
        <option value="">Option</option>
        <option value="">Option</option>
        <option value="">Option</option>
        <option value="">Option</option>
        <option value="">Option</option>
      </select>
      {/* Hero headings */}
      <div className="hero-headings">
        <div className="hero-top">
          <img src={Stars} alt="stars" />
          <h4 className="font-primary">Shop Trending Products</h4>
          <img src={Stars} alt="stars" />
        </div>
        <h2 className="font-primary">Discover Our Departments</h2>
      </div>
      {/* Quality badge */}
      <div className="flex items-center gap-1 w-max">
        <img src={Badge} alt="badge" className="w-[55px] h-[55px]" />
        <h4 className="font-primary font-bold">Long shelf life</h4>
      </div>
    </>
  );
};

export default Template;
