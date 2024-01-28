import { useEffect, useState } from "react";
import { filterBoardData } from "../../../../../Data/filter_board/Filter_board";
import { produce } from "immer";

const FilterBoard = () => {
  // State Object Initial State
  const stateObjectInitial = {
    sortBy: null,
    currentCategories: [],
    priceRange: 50,
    isCleared: true,
  };
  // State Object
  const [stateObject, setStateObject] = useState(stateObjectInitial);
  // Sort Setter
  function sortSetter(e) {
    const currentSort = e.target.getAttribute("data-sort");
    setStateObject(
      produce((draft) => {
        draft.sortBy = currentSort;
      })
    );
  }
  // Category Setter
  function categorySetter(e) {
    const currentCategory = e.target.getAttribute("data-category");
    if (e.target.checked) {
      setStateObject(
        produce((draft) => {
          draft.currentCategories.push(currentCategory);
        })
      );
    } else {
      setStateObject(
        produce((draft) => {
          draft.currentCategories = draft.currentCategories.filter(
            (category) => category !== currentCategory
          );
        })
      );
    }
  }
  // Price Setter
  function priceSetter(e) {
    const currentPrice = Number(e.target.value);
    setStateObject(
      produce((draft) => {
        draft.priceRange = currentPrice;
      })
    );
  }
  // Reset Setter
  function resetSetter() {
    setStateObject(stateObjectInitial);
  }
  // isCleared Setter
  useEffect(() => {
    const clearedSort = stateObject.sortBy === null;
    const clearedFilters =
      stateObject.priceRange === 50 &&
      stateObject.currentCategories.length === 0;
    if (clearedFilters && clearedSort) {
      setStateObject(
        produce((draft) => {
          draft.isCleared = true;
        })
      );
    } else {
      setStateObject(
        produce((draft) => {
          draft.isCleared = false;
        })
      );
    }
  }, [stateObject]);
  // CALLING
  useEffect(() => {}, []);
  console.log(stateObject);
  return (
    <aside className="filter-board w-1/5 hidden md:flex flex-col py-6 gap-2">
      <button
        className={`full-button font-secondary ${
          stateObject.isCleared && "button-disabled"
        }`}
        onClick={resetSetter}
        disabled={stateObject.isCleared}
      >
        Clear Filters
      </button>
      <div>
        <h3 className="font-primary pb-0.5 mb-1 border-b-[1px] border-b-[#12342f2c] ">
          Sort By
        </h3>

        <ul className="flex flex-col gap-0.5">
          {filterBoardData[0].sortMenu.map((item, index) => (
            <li key={index}>
              <label
                htmlFor={item}
                className="small-paragrapgh font-primary flex items-center gap-[8px]"
              >
                <input
                  type="radio"
                  name="sort"
                  id={item}
                  value={item}
                  checked={stateObject.sortBy === item}
                  data-sort={item}
                  onChange={(e) => sortSetter(e)}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-primary pb-0.5 mb-1 border-b-[1px] border-b-[#12342f2c]">
          Filter By
        </h3>

        <div className="flex flex-col gap-1">
          <span>
            <h4 className="font-primary mb-0.5">Category</h4>
            <ul className="flex flex-col gap-0.5">
              {filterBoardData[0].categoryMenu.map((item, index) => (
                <li key={index}>
                  <label
                    htmlFor={item}
                    className="small-paragrapgh font-primary flex items-center gap-[8px]"
                  >
                    <input
                      type="checkbox"
                      name={item}
                      id={item}
                      value={item}
                      checked={stateObject.currentCategories.includes(item)}
                      data-category={item}
                      onChange={(e) => categorySetter(e)}
                    />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </span>
          <span>
            <label
              htmlFor="range"
              className="small-paragrapgh font-primary flex items-start flex-col w-full"
            >
              <h4 className="font-primary mb-0.5">Price:</h4>
              <input
                type="range"
                name="range"
                id="range"
                className="p-0 w-full"
                min={10}
                max={50}
                onChange={(e) => priceSetter(e)}
                value={stateObject.priceRange}
              />
            </label>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default FilterBoard;
