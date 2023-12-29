import { IoIosArrowForward } from "react-icons/io";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

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
    </>
  );
};

export default Template;
