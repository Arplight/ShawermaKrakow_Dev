import { useDispatch, useSelector } from "react-redux";
import {
  stateObjectSetter,
  categoryHandler,
  sortHandler,
  priceHandler,
  resetHandler,
} from "../redux/slices/ProductsBoardSlice";
import { produce } from "immer";
import { useEffect } from "react";

const useBoard = () => {
  const stateObject = useSelector((state) => state.Board.stateObject);
  // Dispatching
  const dispatchStateObject = useDispatch();
  const dispatchSort = useDispatch();
  const dispatchCategory = useDispatch();
  const dispatchReset = useDispatch();
  const dispatchPrice = useDispatch();
  // Sort Setter
  function sortSetter(e) {
    const currentSort = e.target.getAttribute("data-sort");
    const nextState = produce(stateObject, (draft) => {
      draft.sortBy = currentSort;
    });

    dispatchStateObject(stateObjectSetter(nextState));
  }
  // Category Setter
  function categorySetter(e) {
    const currentCategory = e.target.getAttribute("data-category");
    if (e.target.checked) {
      const nextState = produce(stateObject, (draft) => {
        draft.currentCategories.push(currentCategory);
      });
      dispatchStateObject(stateObjectSetter(nextState));
    } else {
      const nextState = produce(stateObject, (draft) => {
        draft.currentCategories = draft.currentCategories.filter(
          (category) => category !== currentCategory
        );
      });
      dispatchStateObject(stateObjectSetter(nextState));
    }
  }
  // Price Setter
  function priceSetter(e) {
    const currentPrice = Number(e.target.value);
    const nextState = produce(stateObject, (draft) => {
      draft.priceRange = currentPrice;
    });
    dispatchStateObject(stateObjectSetter(nextState));
  }
  // Reset Setter
  function resetSetter() {
    const stateObjectInitial = {
      sortBy: null,
      currentCategories: [],
      priceRange: 50,
      isCleared: true,
    };
    dispatchStateObject(stateObjectSetter(stateObjectInitial));
  }
  // isCleared Setter
  useEffect(() => {
    const clearedSort = stateObject.sortBy === null;
    const clearedFilters =
      stateObject.priceRange === 50 &&
      stateObject.currentCategories.length === 0;
    if (clearedFilters && clearedSort) {
      const nextState = produce(stateObject, (draft) => {
        draft.isCleared = true;
      });
      dispatchStateObject(stateObjectSetter(nextState));
      dispatchReset(resetHandler());
    } else {
      const nextState = produce(stateObject, (draft) => {
        draft.isCleared = false;
      });
      dispatchStateObject(stateObjectSetter(nextState));
    }
  }, [stateObject, dispatchStateObject, dispatchReset]);

  // CALLING HANDLERS
  useEffect(() => {
    dispatchCategory(categoryHandler());
    dispatchSort(sortHandler());
    dispatchPrice(priceHandler());
  }, [stateObject, dispatchCategory, dispatchSort, dispatchPrice]);
  return { sortSetter, categorySetter, priceSetter, resetSetter };
};

export default useBoard;
