import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import ContactInfo from "./components/contact_info/ContactInfo";
import ContactForm from "./components/contact_form/ContactForm";
const Contact = () => {
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
