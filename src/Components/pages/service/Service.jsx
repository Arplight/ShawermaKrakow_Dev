// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Components
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import Excellence from "./Components/Excellence/Excellence";
import Quality from "./Components/Quality/Quality";
import Reasons from "./Components/Reasons/Reasons";
import Seo from "../../Seo/Seo";
// Api fetching
import { fetchImages } from "../../redux/store/ApiStore";
// Reducers
import { loadingHandler } from "../../redux/slices/SpinnerSlice";

const Service = () => {
  // Data Fetching
  const dispatchImages = useDispatch();
  const dispatchSpinner = useDispatch();
  // Data state
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
    <div className="service">
      {/* Seo */}
      <Seo currentPage={"Services"} currentPath={"Service"} />
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
