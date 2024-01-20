// Icons
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
// Components
import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
// Reducers
import { addCartItem, removeCartItem } from "../../../redux/slices/CartSlice";
import {
  addWishListItem,
  removeWishListItem,
} from "../../../redux/slices/WishlistSlice";
// Hooks
import useCart from "../../../hooks/useCart";
import useWishList from "../../../hooks/useWishList";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const ProductCard = ({
  cardTitle,
  cardCategory,
  cardPrice,
  cardImage,
  cardId,
}) => {
  // state
  const { isFoundedInCart } = useCart(cardId);
  const { isFoundedInWishList } = useWishList(cardId);
  const [isAddedToCart, setIsAddedToCart] = useState(isFoundedInCart);
  const [isAddedToWishList, setIsAddedToWishList] =
    useState(isFoundedInWishList);

  // Dispatching
  const dispatchAddCartItem = useDispatch();
  const dispatchRemoveCartItem = useDispatch();
  const dispatchAddWishListItem = useDispatch();
  const dispatchRemoveWishListItem = useDispatch();

  // Cart Handlers
  function addToCart() {
    dispatchAddCartItem(addCartItem({ itemId: cardId, itemQuantity: 1 }));
    setIsAddedToCart(true);
  }
  function removeFromCart() {
    dispatchRemoveCartItem(removeCartItem(cardId));
    setIsAddedToCart(false);
  }

  // WishList Handlers
  function addToWishList() {
    dispatchAddWishListItem(addWishListItem(cardId));
    setIsAddedToWishList(true);
  }
  function removeFromWishList() {
    dispatchRemoveWishListItem(removeWishListItem(cardId));
    setIsAddedToWishList(false);
  }

  // cartStateUpdater
  useEffect(() => {
    setIsAddedToCart(isFoundedInCart);
  }, [isFoundedInCart]);
  return (
    <div className="product-card m-auto">
      <div className="card-top">
        <Link to={`/Details/${cardTitle.replaceAll(" ", "-")}`}>
          <LazyLoad offset={200}>
            <img src={cardImage} alt={cardTitle} />
          </LazyLoad>
        </Link>
        <div className="card-buttons">
          <span>
            {isAddedToWishList ? (
              <IoMdHeart onClick={removeFromWishList} />
            ) : (
              <IoMdHeartEmpty onClick={addToWishList} />
            )}
          </span>

          <span>
            {isAddedToCart ? (
              <PiShoppingCartFill onClick={removeFromCart} />
            ) : (
              <PiShoppingCart onClick={addToCart} />
            )}
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
