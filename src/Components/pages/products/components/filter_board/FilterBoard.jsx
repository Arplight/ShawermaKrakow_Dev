import { useSelector } from "react-redux";
import { filterBoardData } from "../../../../../Data/filter_board/Filter_board";
import useBoard from "../../../../hooks/useBoard";
import useProducts from "../../../../hooks/useProducts";

const FilterBoard = () => {
  const { sortSetter, categorySetter, priceSetter, resetSetter } = useBoard();
  const stateObject = useSelector((state) => state.Board.stateObject);
  const { topPrice } = useProducts();
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
              <h4 className="font-primary mb-0.5">
                Price: zł {stateObject.priceRange.toFixed(2).toLocaleString()}
              </h4>
              <input
                type="range"
                name="range"
                id="range"
                className="p-0 w-full"
                min={10}
                max={topPrice}
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
