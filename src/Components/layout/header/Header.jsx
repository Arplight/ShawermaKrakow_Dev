import { Link } from "react-router-dom";
import Logo from "../../../../public/Brand/Logo.png";

const Header = () => {
  return (
    <header>
      <div className="z-20 container m-auto h-[80px] md:h-[100px] flex justify-center relative border-b-[1px] border-[#12342f2c]">
        <Link to="/" className="top-[20px] absolute h-full">
          <img src={Logo} alt="Logo" className="h-full " />
        </Link>
      </div>
    </header>
  );
};

export default Header;
