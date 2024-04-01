import { GoSearch } from "react-icons/go";
import useProducts from "../../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../redux/store/ApiStore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blockerSetter } from "../../../redux/slices/BlockerSlice";
import { useTranslation } from "react-i18next";

const Search = () => {
  const dispatchProducts = useDispatch();
  const dispatchBlocker = useDispatch();
  const { products } = useProducts();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    dispatchProducts(fetchProducts());
  }, [dispatchProducts]);

  useEffect(() => {
    if (products) {
      const currentResults = products.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setSearchResults(searchKeyword && currentResults);
    }
  }, [searchKeyword]);

  return (
    <section className="w-full flex flex-col items-center relative ">
      <div
        className="search w-4/5 lg:w-1/2 flex items-center h-[40px] shadow-lg shadow-[#000000b5]"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="search"
          name="search-input"
          id="search-input"
          className="w-full h-full"
          placeholder={t("searchOurStore")}
          maxLength={"50"}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <span className="h-full text-[18px] text-[#ffffff] bg-[#12342f] p-[8px] flex items-center rounded-r-[5px]">
          <GoSearch />
        </span>
      </div>
      {searchResults && searchResults.length > 0 && (
        <div
          className="absolute  w-4/5 lg:w-1/2 top-[calc(100%+3px)] shadow-lg shadow-[#000000b5] "
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="bg-[#ffffff] flex flex-col gap-0.5 h-max w-full p-1 rounded-b-[5px] max-h-[300px] overflow-y-scroll">
            {searchResults.map((result) => (
              <li
                key={result.id}
                className="w-max"
                onClick={() => dispatchBlocker(blockerSetter(null))}
              >
                <Link to={`/Details/${result.name.replaceAll(" ", "-")}`}>
                  <p className="small-paragrapgh font-primary">{result.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Search;
