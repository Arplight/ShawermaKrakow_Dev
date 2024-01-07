import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import PropTypes from "prop-types";
const ProductCard = ({
  cardTitle,
  cardCategory,
  cardPrice,
  cardImage,
  cardLink,
}) => {
  return (
    <div className="product-card">
      <div className="card-top">
        <img src={cardImage} alt={cardTitle} />
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
  cardLink: PropTypes.string,
};
