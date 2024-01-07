import Stars from "../../../../public/Template icons/Stars.svg";
import PropTypes from "prop-types";
const HeroHeadings = ({ topHeading, bottomHeading, isCentered, withStyle }) => {
  return (
    <div
      className={`hero-headings ${
        isCentered ? "text-center items-center" : ""
      } ${withStyle} `}
    >
      <div className="hero-top">
        <img src={Stars} alt="stars" />
        <h4 className="font-primary italic">{topHeading}</h4>
        <img src={Stars} alt="stars" />
      </div>
      <h2 className="font-primary">{bottomHeading}</h2>
    </div>
  );
};

export default HeroHeadings;

HeroHeadings.propTypes = {
  topHeading: PropTypes.string,
  bottomHeading: PropTypes.string,
  isCentered: PropTypes.bool,
  withStyle: PropTypes.string,
};
