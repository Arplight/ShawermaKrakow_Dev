import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({
  cardTitle,
  cardCategory,
  cardPrice,
  cardImage,
  cardId,
}) => {
  return (
    <div className="product-card">
      <div className="card-top">
        <Link to={`/Product_details/${cardId}`}>
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
        <p className="small-paragrapgh font-primary">Rs. {cardPrice}</p>
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
  cardId: PropTypes.number,
};
