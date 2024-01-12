// Hooks
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useProducts from "../../../../hooks/useProducts";
// Components
import MainSection from "../../../../common/sections/main_section/MainSection";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import ProductCard from "../../../../common/cards/product_card/ProductCard";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const RelatedProducts = () => {
  const products = useProducts();
  const [relatedProducts, setRelatedProducts] = useState(null);
  const currentProduct = useSelector((state) => state.currentProduct.data);

  useEffect(() => {
    if (products) {
      setRelatedProducts(
        products.filter(
          (p) =>
            p.category === currentProduct.category && p.id !== currentProduct.id
        )
      );
    }
  }, [currentProduct]);
  return (
    <div className="related-products">
      {relatedProducts && relatedProducts.length > 1 && (
        <MainSection withBackground={false}>
          <HeroHeadings
            topHeading={"Related products"}
            bottomHeading={"Checkout similar products"}
            isCentered={true}
            withStyle={"mb-2"}
          />

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper py-3"
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {relatedProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  cardCategory={product.category}
                  cardImage={product.image}
                  cardPrice={product.price_before_discount}
                  cardTitle={product.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </MainSection>
      )}
    </div>
  );
};

export default RelatedProducts;
