// Hooks
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Components
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import Excellence from "./Components/Excellence/Excellence";
import Quality from "./Components/Quality/Quality";
import Reasons from "./Components/Reasons/Reasons";
// Api fetching
import { fetchImages } from "../../redux/store/ApiStore";

const Service = () => {
  // Data Fetching

  const dispatchImages = useDispatch();
  useEffect(() => {
    dispatchImages(fetchImages());
  }, []);
  return (
    <div className="service">
      {/* BreadCrumbs */}
      <Breadcrumb />

      {/* Excellence */}
      <Excellence />

      {/* Quality */}
      <Quality />

      {/* Reasons_2 */}
      <Reasons />
    </div>
  );
};

export default Service;
