import { Link } from "react-router-dom";
import Logo from "../../../../public/Brand/Logo.png";
import PackFood from "../../../../public/Images/Main/Pack-food.webp";
import Blik from "../../../../public/Template icons/Blik.svg";
import {
  footerContact,
  footerPages,
  footerSocial,
} from "../../../Data/footer/Footer";
import useDate from "../../hooks/useDate";
// Components
import SubscriptionForm from "./Components/SubscriptionForm";

const Footer = () => {
  const [currentYear] = useDate();
  return (
    <footer>
      <section className="bg-[#12342f] py-3 ">
        <div className="flex flex-col md:flex-row gap-y-2 container m-auto relative ">
          <span className="flex flex-col gap-1 w-full md:w-1/2">
            <h3 className="font-secondary">Keep in touch</h3>
            {/* Footer Form */}
            <SubscriptionForm />
            <p className="small-paragrapgh paragraph-secondary w-full sm:w-3/5 	">
              Stay updated with our latest offers and news by subscribing to our
              newsletter!
            </p>
          </span>
          <span className="flex flex-col gap-1 w-full md:w-1/2">
            <h3 className="font-secondary">Follow us</h3>
            <p className="small-paragrapgh paragraph-secondary  w-full sm:w-3/5 	">
              Connect with us on social media for more updates and
              behind-the-scenes content!
            </p>
            <ul className="flex gap-1">
              {footerSocial.map((social, index) => (
                <li key={index}>
                  <a href={social.socialLink} target="_blank" rel="noreferrer">
                    {<social.socialIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </span>
          <div className="pack-food hidden md:block">
            <img src={PackFood} alt="pack-food" />
          </div>
        </div>
      </section>
      <section className="bg-[#0f2f2a] py-3">
        <div className="flex flex-col md:flex-row gap-y-2 container m-auto">
          <span className="flex flex-col gap-2 w-full md:w-1/2">
            <div className=" h-[100px]">
              <img src={Logo} alt="Logo" className="h-full " />
            </div>
            <ul className="flex flex-col gap-1">
              {footerContact.map((contact, index) => (
                <li className="flex gap-1 items-center" key={index}>
                  <contact.contactIcon />
                  {contact.contactRef !== null ? (
                    <a
                      className="small-paragrapgh paragraph-secondary"
                      href={contact.contactRef}
                    >
                      {contact.contactInfo}
                    </a>
                  ) : (
                    <p className="small-paragrapgh paragraph-secondary  w-full sm:w-3/5">
                      {contact.contactInfo}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </span>
          <span className="flex flex-col gap-1 w-full md:w-1/2">
            <h3 className="font-secondary">Pages</h3>
            <ul className="flex flex-col gap-1">
              {footerPages.map((page, index) => (
                <li key={index} className="flex">
                  <Link
                    to={page.route}
                    className="paragraph-secondary small-paragrapgh"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </section>
      <section className="bg-[#12342f]">
        <div className="flex flex-col md:flex-row gap-y-1 container m-auto py-[20px] flex items-center">
          <span className="flex w-full md:w-1/2 items-center justify-center md:justify-start">
            <p className="paragraph-secondary small-paragrapgh text-center">
              Shawerma-Krakow &copy; {currentYear} All Rights Reserved
            </p>
          </span>
          <span className="flex justify-center md:justify-start w-full md:w-1/2">
            <div className="h-[20px]">
              <img src={Blik} alt="Blik" className="w-full h-full" />
            </div>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
