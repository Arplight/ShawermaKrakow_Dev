// Hooks
import { useDispatch } from "react-redux";

import { useEffect } from "react";
// Components
import AboutUs from "./Components/About/AboutUs";
import Tradition from "./Components/Tradition/Tradition";
import Team from "./Components/Team/Team";
import Clients from "./Components/Clients/Clients";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
// Data Fetching
import { fetchImages } from "../../redux/store/ApiStore";

const About = () => {
  const dispatchImages = useDispatch();
  useEffect(() => {
    dispatchImages(fetchImages());
  }, [dispatchImages]);

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
