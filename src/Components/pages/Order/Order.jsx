import { useEffect } from "react";
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import { useDispatch, useSelector } from "react-redux";
import MainSection from "../../common/sections/main_section/MainSection";
import TrackingForm from "./Components/Tracking_Form/TrackingForm";
import TrackingPage from "./Components/Tracking_Page/TrackingPage";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import Seo from "../../Seo/Seo";

const Order = () => {
  const dispatchSpinner = useDispatch();
  const isAuth = useSelector((state) => state.orderTracking.isAuth);
  useEffect(() => {
    dispatchSpinner(loadingHandler(false));
  }, [dispatchSpinner]);
  return (
    <>
      <Seo currentPage={"Order"} currentPath={"Order"} />
      <Breadcrumb />
      <MainSection withBackground={false}>
        {isAuth ? <TrackingPage /> : <TrackingForm />}
      </MainSection>
    </>
  );
};

export default Order;