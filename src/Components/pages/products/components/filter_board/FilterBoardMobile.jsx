import { filterBoardData } from "../../../../../Data/filter_board/Filter_board";
import { FaFilter } from "react-icons/fa";
import { BiSort } from "react-icons/bi";
import { FcClearFilters, FcFilledFilter } from "react-icons/fc";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import useBoard from "../../../../hooks/useBoard";

const FilterBoardMobile = () => {
  const [boardIsOpened, setBoardIsOpened] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const stateObject = useSelector((state) => state.Board.stateObject);
  const { sortSetter, categorySetter, priceSetter, resetSetter } = useBoard();
  return (
    <div className="flex md:hidden">
      {/* Mobile board */}
      <div className={`mobile-board ${boardIsOpened ? "board-opened" : ""}`}>
        <span className="container m-auto ">
          <button onClick={() => setCurrentMenu("sort")}>
            <BiSort />
            Sort
          </button>
          <button onClick={() => setCurrentMenu("filter")}>
            <FaFilter />
            Filter
          </button>
          <button
            className={`main-button font-secondary ${
              stateObject.isCleared && "button-disabled"
            }`}
            onClick={resetSetter}
            disabled={stateObject.isCleared}
          >
            Clear Filters
          </button>
        </span>

        <button
          className="h-full"
          id="collapse-button"
          onClick={() => {
            setBoardIsOpened(!boardIsOpened);
            setCurrentMenu("");
          }}
        >
          {boardIsOpened ? <FcClearFilters /> : <FcFilledFilter />}
        </button>
      </div>

      {/* sort menu */}
      <div
        className={`mobile-board-menu ${
          currentMenu === "sort" ? "show-menu" : ""
        }`}
      >
        <span className="menu container m-auto">
          <button
            className="close-button absolute top-0 right-0"
            onClick={() => setCurrentMenu("")}
          >
            <IoClose />
          </button>
          <h3 className="font-primary pb-0.5 mb-1 border-b-[1px] border-b-[#12342f2c] ">
            Sort By
          </h3>
          <ul className="flex flex-col gap-0.5">
            {filterBoardData[0].sortMenu.map((item, index) => (
              <li key={index}>
                <label
                  htmlFor={`${item}-mobile`}
                  className="small-paragrapgh font-primary flex items-center gap-[8px]"
                >
                  <input
                    type="radio"
                    name="sort-mobile"
                    id={`${item}-mobile`}
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
        </span>
      </div>

      {/* Filter menu */}
      <div
        className={`mobile-board-menu ${
          currentMenu === "filter" ? "show-menu" : ""
        }`}
      >
        <div className="menu container m-auto">
          <button
            className="close-button absolute top-0 right-0 "
            onClick={() => setCurrentMenu("")}
          >
            <IoClose />
          </button>
          <h3 className="font-primary pb-0.5 mb-1 border-b-[1px] border-b-[#12342f2c]">
            Filter By
          </h3>
          <span>
            <h4 className="font-primary mb-0.5">Category</h4>
            <ul className="flex flex-col gap-0.5">
              {filterBoardData[0].categoryMenu.map((item, index) => (
                <li key={index}>
                  <label
                    htmlFor={`${item}-mobile`}
                    className="small-paragrapgh font-primary flex items-center gap-[8px]"
                  >
                    <input
                      type="checkbox"
                      name={`${item}-mobile`}
                      id={`${item}-mobile`}
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
          <span className="mt-1 block">
            <label
              htmlFor="range-mobile"
              className="small-paragrapgh font-primary flex items-start flex-col w-full"
            >
              <h4 className="font-primary mb-0.5">
                Price: ${stateObject.priceRange.toFixed(2).toLocaleString()}
              </h4>
              <input
                type="range"
                name="range-mobile"
                id="range-mobile"
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
    </div>
  );
};

export default FilterBoardMobile;
