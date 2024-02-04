import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../../common/cards/product_card/ProductCard";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import ProductsSection from "../../common/sections/products_section/ProductsSection";
import FilterBoard from "./components/filter_board/FilterBoard";
import FilterBoardMobile from "./components/filter_board/FilterBoardMobile";
import { fetchProducts } from "../../redux/store/ApiStore";
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import { MdErrorOutline } from "react-icons/md";
import Seo from "../../Seo/Seo";

const Products = () => {
  const dispatchProducts = useDispatch();
  const [currentPageData, setCurrentPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const perPage = 6;
  const offset = currentPage * perPage;
  const products = useSelector((state) => state.Board.currentProducts);
  const dispatchSpinner = useDispatch();
  useEffect(() => {
    dispatchProducts(fetchProducts());
  }, [dispatchProducts]);

  useEffect(() => {
    if (products) {
      dispatchSpinner(loadingHandler(false));
      setCurrentPageData(products.slice(offset, offset + perPage));
      setPageCount(Math.ceil(products.length / perPage));
    } else {
      dispatchSpinner(loadingHandler(true));
    }
  }, [products, offset, perPage, dispatchProducts, dispatchSpinner]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div className="products">
      {/* Seo */}
      <Seo currentPage={"Products"} currentPath={"Products"} />
      {/* BreadCrumbs */}
      <Breadcrumb />

      <div className="flex container m-auto gap-4">
        {/* FilterBoard */}
        <FilterBoard />

        {/* Products */}
        <ProductsSection
          isPaginated={true}
          withStyle={"w-full lg:w-4/5 flex"}
          isSingle={false}
        >
          {currentPageData && currentPageData.length > 0 ? (
            <>
              <ul className="w-full grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {currentPageData.map((product) => (
                  <li key={product.id} className="flex justify-center">
                    <ProductCard
                      cardCategory={product.category}
                      cardTitle={product.name}
                      cardImage={product.image}
                      cardPrice={product.price_before_discount}
                      cardId={product.id}
                    />
                  </li>
                ))}
              </ul>
              {/* Pagination */}
              <ReactPaginate
                previousLabel={"<"}
                breakLabel="..."
                pageRangeDisplayed={3}
                marginPagesDisplayed={0}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination_prev"}
                nextLinkClassName={"pagination_next"}
                disabledClassName={"pagination_link_disabled"}
                activeClassName={"pagination_active"}
                pageLinkClassName={"page"}
                disabledLinkClassName={"button-disabled"}
              />
            </>
          ) : (
            <div className="m-auto flex flex-col gap-1 items-center">
              <MdErrorOutline className="fill-[#12342f] text-[130px]" />
              <h3 className="font-primary">No Results Found</h3>
            </div>
          )}
        </ProductsSection>
      </div>
      {/* Mobile filter Board */}
      <FilterBoardMobile />
    </div>
  );
};

export default Products;
