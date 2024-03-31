import { FaFacebook, FaYoutube, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocation } from "react-icons/io5";

export const footerSocial = [
  {
    socialLink: "https://www.facebook.com/shawermahaus/",
    socialIcon: FaFacebook,
    label: "facebook",
  },
  {
    socialLink: "https://www.instagram.com/Shawermaklubhaus_krk/",
    socialIcon: FaInstagram,
    label: "instagram",
  },
  {
    socialLink: "https://www.youtube.com/@shawermaklubhaus007",
    socialIcon: FaYoutube,
    label: "youtube",
  },
];

export const footerContact = [
  {
    contactInfo: "Shawerma Klub Haus, Wiślna 3, 31-007 Kraków, Poland",
    contactIcon: IoLocation,
    contactRef: null,
  },
  {
    contactInfo: "Call Us:  +48 662 966 656",
    contactIcon: FaPhoneAlt,
    contactRef: "tel:+48 662 966 656",
  },

  {
    contactInfo: "Hassan@shawermakrakow.com",
    contactIcon: IoMail,
    contactRef: "mailto:Hassan@shawermakrakow.com",
  },
];

export const footerPages = [
  { label: "home", route: "/" },
  { label: "products", route: "/Products" },
  { label: "aboutUs", route: "/About-Us" },
  { label: "service", route: "/Service" },
  { label: "contact", route: "/Contact" },
];
