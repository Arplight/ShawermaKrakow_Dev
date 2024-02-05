import { useEffect, useState } from "react";
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import { useDispatch } from "react-redux";
import MainSection from "../../common/sections/main_section/MainSection";
import TrackingForm from "./Components/Tracking_Form/TrackingForm";
import TrackingPage from "./Components/Tracking_Page/TrackingPage";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";

const Order = () => {
  const [isFounded, setIsFounded] = useState(false);
  const dispatchSpinner = useDispatch();
  useEffect(() => {
    dispatchSpinner(loadingHandler(false));
  }, [dispatchSpinner]);
  return (
    <>
      <Breadcrumb />
      <MainSection withBackground={false}>
        {isFounded ? <TrackingPage /> : <TrackingForm />}
      </MainSection>
    </>
  );
};

export default Order;
