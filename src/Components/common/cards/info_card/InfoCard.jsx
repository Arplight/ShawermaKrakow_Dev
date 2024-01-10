import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InfoCard = ({ infoIcon, infoTitle, infoDescription }) => {
  return (
    <div className="info-card">
      <div className="px-[70px]">
        <img src={infoIcon} alt={infoTitle} />
      </div>
      <h3 className="font-primary">{infoTitle}</h3>
      <p className="small-paragrapgh font-primary">{infoDescription}</p>
      <Link to={"/Products"} className="link-btn font-primary arrow-button">
        Start Shop
        <IoIosArrowForward className="text-[20px] button-arrow" />
      </Link>
    </div>
  );
};

export default InfoCard;
InfoCard.propTypes = {
  infoIcon: PropTypes.string,
  infoTitle: PropTypes.string,
  infoDescription: PropTypes.string,
};
