// Hooks
import { useDispatch } from "react-redux";
import { fetchImages } from "../../redux/slices/imagesApiSlice";
import { useEffect } from "react";
// Components
import AboutUs from "./Components/About/AboutUs";
import Tradition from "./Components/Tradition/Tradition";
import Team from "./Components/Team/Team";
import Clients from "./Components/Clients/Clients";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
// Data Fetching
const About = () => {
  const dispatchImages = useDispatch();
  useEffect(() => {
    dispatchImages(fetchImages());
  }, []);

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
