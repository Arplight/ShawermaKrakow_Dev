import Logo from "../../../../public/Brand/Logo.png";
const Header = () => {
  return (
    <header>
      <div className="container m-auto h-[100px] flex justify-center relative border-b-[1px] border-[#12342f2c]">
        <img src={Logo} alt="Logo" className="h-full absolute top-[25px] " />
      </div>
    </header>
  );
};

export default Header;
