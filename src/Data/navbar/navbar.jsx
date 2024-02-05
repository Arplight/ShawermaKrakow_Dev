import Polish from "../../../public/Template icons/Polish.svg";
import English from "../../../public/Template icons/English.svg";

export const navLinks = [
  { label: "Home", route: "/" },
  { label: "Products", route: "/Products", mobileOnly: false },
  { label: "About Us", route: "/About-Us", mobileOnly: false },
  { label: "Service", route: "/Service", mobileOnly: false },
  { label: "Contact", route: "/Contact", mobileOnly: false },
  { label: "Order", route: "/Order", mobileOnly: true },
];

export const navLang = [
  { langIcon: Polish, langLabel: "Polish" },
  { langIcon: English, langLabel: "English" },
];
