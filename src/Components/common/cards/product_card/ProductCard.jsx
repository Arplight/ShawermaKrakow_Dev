import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addCartItem, removeCartItem } from "../../../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

const ProductCard = ({
  cardTitle,
  cardCategory,
  cardPrice,
  cardImage,
  cardId,
}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  // const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);
  const dispatchAddCartItem = useDispatch();
  const dispatchRemoveCartItem = useDispatch();
  useEffect(() => {
    if (isAddedToCart) {
      dispatchAddCartItem(addCartItem({ itemId: cardId, itemQuantity: 1 }));
    } else {
      dispatchRemoveCartItem(removeCartItem(cardId));
    }
  }, [isAddedToCart, cardId, dispatchAddCartItem, dispatchRemoveCartItem]);

  return (
    <div className="product-card m-auto">
      <div className="card-top">
        <Link to={`/Details/${cardTitle.replaceAll(" ", "-")}`}>
          <LazyLoad offset={100}>
            <img src={cardImage} alt={cardTitle} />
          </LazyLoad>
        </Link>
        <div className="card-buttons">
          <span>
            <IoMdHeartEmpty />
            {/* <IoMdHeart /> */}
          </span>

          <span onClick={() => setIsAddedToCart(!isAddedToCart)}>
            {isAddedToCart ? <PiShoppingCartFill /> : <PiShoppingCart />}
          </span>
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
