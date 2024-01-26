import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import ContactInfo from "./components/contact_info/ContactInfo";
import ContactForm from "./components/contact_form/ContactForm";
// Hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Reducers
import { loadingHandler } from "../../redux/slices/SpinnerSlice";

const Contact = () => {
  const dispatchSpinner = useDispatch();
  useEffect(() => {
    dispatchSpinner(loadingHandler(false));
  }, [dispatchSpinner]);
  return (
    <div className="contact">
      {/* BreadCrumbs */}
      <Breadcrumb />

      {/* Contact info */}
      <ContactInfo />

      {/*  Contact From */}
      <ContactForm />
    </div>
  );
};

export default Contact;
