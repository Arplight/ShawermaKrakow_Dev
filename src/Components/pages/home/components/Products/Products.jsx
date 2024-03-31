import { useTranslation } from "react-i18next";
import ProductCard from "../../../../common/cards/product_card/ProductCard";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import ProductsSection from "../../../../common/sections/products_section/ProductsSection";
import useProducts from "../../../../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const { t } = useTranslation();
  return (
    <ProductsSection isPaginated={false} isSingle={true}>
      <HeroHeadings
        topHeading={t("shopTrendingProducts")}
        bottomHeading={t("discoverOurDepartments")}
        isCentered={true}
        withStyle={"mb-3"}
      />
      <ul className="w-full grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products &&
          products.slice(0, 8).map((product) => (
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
    </ProductsSection>
  );
};

export default Products;
