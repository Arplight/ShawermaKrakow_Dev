import Polish from "../../../public/Template icons/Polish.svg";
import English from "../../../public/Template icons/English.svg";

export const navLinks = [
  { label: "home", route: "/" },
  { label: "products", route: "/Products", mobileOnly: false },
  { label: "aboutUs", route: "/About-Us", mobileOnly: false },
  { label: "service", route: "/Service", mobileOnly: false },
  { label: "contact", route: "/Contact", mobileOnly: false },
  { label: "order", route: "/Order", mobileOnly: true },
];

export const navLang = [
  { langIcon: Polish, langLabel: "Polish" },
  { langIcon: English, langLabel: "English" },
];
