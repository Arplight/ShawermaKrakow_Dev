// Components
import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import AddWishList from "../../buttons/add_wishlist/AddWishList";
import AddCart from "../../buttons/add_cart/AddCart";
import { FadeLoader } from "react-spinners";
import { useState } from "react";
const ProductCard = ({
  cardTitle,
  cardCategory,
  cardPrice,
  cardImage,
  cardId,
}) => {
  // loadingState
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="product-card m-auto">
      <div className="card-top">
        <Link
          to={`/Details/${cardTitle.replaceAll(" ", "-")}`}
          className="h-full"
        >
          <LazyLoad offset={200} className="h-full">
            <img
              src={cardImage}
              alt={cardTitle}
              onLoad={() => setIsLoaded(true)}
            />
          </LazyLoad>
        </Link>
        {!isLoaded && (
          <FadeLoader
            color="#12342f"
            cssOverride={{
              position: "absolute",
              top: "50%",
              left: "48%",
            }}
          />
        )}
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
        <Link to={`/Details/${cardTitle.replaceAll(" ", "-")}`}>
          <h3 className="font-primary">{cardTitle}</h3>
        </Link>
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
