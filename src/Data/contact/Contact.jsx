import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocation } from "react-icons/io5";

export const contactInfo = [
  {
    contactInfo: "+48 662 966 656",
    contactIcon: <FaPhoneAlt />,
    contactTitle: "phone",
  },
  {
    contactInfo: "Hassan@shawermakrakow.com",
    contactIcon: <IoMail />,
    contactTitle: "Email",
  },

  {
    contactInfo: "Shawerma Klub Haus, Wiślna 3, 31-007 Kraków, Poland",
    contactIcon: <IoLocation />,
    contactTitle: "address",
  },
];
