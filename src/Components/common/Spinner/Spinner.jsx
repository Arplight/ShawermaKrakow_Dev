import { BarLoader } from "react-spinners";
import Logo from "../../../../public/Brand/Logo.png";
import { useSelector } from "react-redux";

const Spinner = () => {
  const loadingState = useSelector((state) => state.spinner.isLoading);

  return (
    <div
      className={`${
        !loadingState && "is-loaded"
      } w-[100vw] h-[100vh] bg-[#ffffff] flex flex-col justify-center items-center gap-1 z-[10000] fixed duration-1000 opacity-100`}
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-[60vw] sm:w-[40vw] md:w-[20vw] logo"
      />
      <BarLoader color="#12342f" height={4} />
    </div>
  );
};

export default Spinner;
