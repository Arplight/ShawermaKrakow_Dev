// Hooks
import { useState, useEffect } from "react";
import useWishList from "../../../hooks/useWishList";
import { useDispatch } from "react-redux";
// Reducers
import {
  addWishListItem,
  removeWishListItem,
} from "../../../redux/slices/WishlistSlice";
// Icons
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import PropTypes from "prop-types";

// state
const AddWishList = ({ currentId }) => {
  const { isFoundedInWishList } = useWishList(currentId);
  const [isAddedToWishList, setIsAddedToWishList] =
    useState(isFoundedInWishList);

  // Dispatching
  const dispatchAddWishListItem = useDispatch();
  const dispatchRemoveWishListItem = useDispatch();

  // WishList Handlers
  function addToWishList() {
    dispatchAddWishListItem(addWishListItem(currentId));
    setIsAddedToWishList(true);
  }
  function removeFromWishList() {
    dispatchRemoveWishListItem(removeWishListItem(currentId));
    setIsAddedToWishList(false);
  }
  // wishListStateUpdater
  useEffect(() => {
    setIsAddedToWishList(isFoundedInWishList);
  }, [isFoundedInWishList]);
  return (
    <span>
      {isAddedToWishList ? (
        <IoMdHeart onClick={removeFromWishList} />
      ) : (
        <IoMdHeartEmpty onClick={addToWishList} />
      )}
    </span>
  );
};

export default AddWishList;

AddWishList.propTypes = {
  currentId: PropTypes.number.isRequired,
};
