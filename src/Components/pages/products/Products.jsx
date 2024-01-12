import { useDispatch } from "react-redux";
import ProductCard from "../../common/cards/product_card/ProductCard";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import ProductsSection from "../../common/sections/products_section/ProductsSection";
import FilterBoard from "./components/filter_board/FilterBoard";
import FilterBoardMobile from "./components/filter_board/FilterBoardMobile";
import useProducts from "../../hooks/useProducts";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsApiSlice";

const Products = () => {
  const dispatchProducts = useDispatch();
  useEffect(() => {
    dispatchProducts(fetchProducts());
  }, [dispatchProducts]);
  const products = useProducts();
  return (
    <div className="products">
      {/* BreadCrumbs */}
      <Breadcrumb />

      {/* Main container */}
      <div className="flex container m-auto gap-4">
        {/* FilterBoard */}
        <FilterBoard />

        {/* Products */}
        <ProductsSection
          isPaginated={true}
          withStyle={"w-full lg:w-4/5"}
          isSingle={false}
        >
          <ul className="w-full grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
            {products &&
              products.map((product) => (
                <li key={product.id} className="flex justify-center">
                  <ProductCard
                    cardCategory={product.category}
                    cardTitle={product.name}
                    cardImage={product.image}
                    cardPrice={product.price_before_discount}
                  />
                </li>
              ))}
          </ul>
        </ProductsSection>
      </div>
      {/* Mobile filter board */}
      <FilterBoardMobile />
    </div>
  );
};

export default Products;
