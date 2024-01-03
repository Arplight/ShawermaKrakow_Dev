import { SlMagnifier } from "react-icons/sl";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import Polish from "../../../public/Template icons/Polish.svg";
import English from "../../../public/Template icons/English.svg";

export const navLinks = [
  { label: "Home", route: "/" },
  { label: "Products", route: "/Products" },
  { label: "About Us", route: "/About-Us" },
  { label: "Service", route: "/Service" },
  { label: "Contact", route: "/Contact" },
];

export const navIcons = [
  { icon: SlMagnifier, route: null, isRelative: false, iconType: "magnifier" },
  { icon: IoLanguage, route: null, isRelative: true, iconType: "language" },
  {
    icon: IoMdHeartEmpty,
    route: "/Wishlist",
    isRelative: false,
    iconType: "heart",
  },
  {
    icon: TbShoppingBagPlus,
    route: "/Cart",
    isRelative: true,
    iconType: "shop",
  },
];

export const navLang = [
  { langIcon: Polish, langLabel: "Polish" },
  { langIcon: English, langLabel: "English" },
];
