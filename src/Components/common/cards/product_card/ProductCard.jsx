import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({ cardTitle, cardCategory, cardPrice, cardImage }) => {
  return (
    <div className="product-card m-auto">
      <div className="card-top">
        <Link to={`/Details/${cardTitle.replaceAll(" ", "-")}`}>
          <img src={cardImage} alt={cardTitle} />
        </Link>
        <div className="card-buttons">
          <IoMdHeartEmpty />
          {/* <IoMdHeart /> */}
          <PiShoppingCart />
          {/* <PiShoppingCartFill /> */}
        </div>
      </div>
      <div className="card-bottom">
        <p className="small-paragrapgh font-primary italic">{cardCategory}</p>
        <h3 className="font-primary">{cardTitle}</h3>
        <p className="small-paragrapgh font-primary">
          ${cardPrice.toFixed(2).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  cardTitle: PropTypes.string,
  cardCategory: PropTypes.string,
  cardPrice: PropTypes.number,
  cardImage: PropTypes.string,
};
