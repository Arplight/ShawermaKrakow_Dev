// Components
import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import AddWishList from "../../buttons/add_wishlist/AddWishList";
import AddCart from "../../buttons/add_cart/AddCart";
const ProductCard = ({
  cardTitle,
  cardCategory,
  cardPrice,
  cardImage,
  cardId,
}) => {
  return (
    <div className="product-card m-auto">
      <div className="card-top">
        <Link to={`/Details/${cardTitle.replaceAll(" ", "-")}`}>
          <LazyLoad offset={200}>
            <img src={cardImage} alt={cardTitle} />
          </LazyLoad>
        </Link>
        <div className="card-buttons">
          <AddWishList currentId={cardId} />
          <AddCart
            currentId={cardId}
            currentImage={cardImage}
            currentTitle={cardTitle}
            currentPrice={cardPrice}
          />
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
  cardId: PropTypes.number,
};
