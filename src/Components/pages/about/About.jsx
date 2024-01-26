// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// Components
import AboutUs from "./Components/About/AboutUs";
import Tradition from "./Components/Tradition/Tradition";
import Team from "./Components/Team/Team";
import Clients from "./Components/Clients/Clients";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
// Data Fetching
import { fetchImages } from "../../redux/store/ApiStore";
// Reducers
import { loadingHandler } from "../../redux/slices/SpinnerSlice";

const About = () => {
  const dispatchImages = useDispatch();
  const dispatchSpinner = useDispatch();
  const imagesState = useSelector((state) => state.imagesApi.data);
  useEffect(() => {
    dispatchImages(fetchImages());
  }, [dispatchImages]);
  useEffect(() => {
    if (imagesState) {
      dispatchSpinner(loadingHandler(false));
    } else {
      dispatchSpinner(loadingHandler(true));
    }
  }, [imagesState, dispatchSpinner]);
  return (
    <div className="about">
      {/* BreadCrumbs */}
      <Breadcrumb />

      {/* AboutUs */}
      <AboutUs />

      {/* Tradition */}
      <Tradition />

      {/* Team */}
      <Team />

      {/* Clients */}
      <Clients />
    </div>
  );
};

export default About;
