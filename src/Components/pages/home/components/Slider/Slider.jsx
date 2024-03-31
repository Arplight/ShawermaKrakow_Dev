import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
// Data
import useProducts from "../../../../hooks/useProducts";
import useImages from "../../../../hooks/useImages";
// Icons
import { IoIosArrowForward } from "react-icons/io";
// React Router
import { Link } from "react-router-dom";
// Loader
import { BeatLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const images = useImages();
  const { products } = useProducts();
  const [topProducts, setTopProducts] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (products) {
      setTopProducts(products.filter((n) => n.top_product));
    }
  }, [products]);
  return (
    <div className="min-h-[50vh] relative">
      {!isLoaded && (
        <BeatLoader
          color="#12342f"
          cssOverride={{
            position: "absolute",
            top: "40%",
            right: "calc(50% - 30px)",
            zIndex: "100",
          }}
        />
      )}
      {images && topProducts && (
        <div
          className="slider py-2 background-section"
          style={{
            backgroundImage: `url(${images[0].url})`,
          }}
        >
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            speed={900}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {topProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="slider-container container m-auto flex flex-col md:flex-row gap-10 relative items-center h-[70vh] md:h-[60vh] 2xl:h-[70vh]">
                  <span className="w-full h-full md:w-1/2  flex items-center justify-center slider-image">
                    <Fade duration={1500}>
                      <img
                        src={product.image}
                        alt={product.name}
                        onLoad={() => setIsLoaded(true)}
                      />
                    </Fade>
                  </span>
                  <span className="slider-info w-full h-full md:w-1/2 flex items-center justify-center z-[10]">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                      <Fade duration={1500}>
                        <h3 className="font-primary italic font-thin">
                          {t("saveUpTo")} zł
                          {product.price_before_discount
                            .toFixed(2)
                            .toLocaleString()}
                        </h3>
                      </Fade>
                      <Fade duration={1500} delay={500}>
                        <h1 className="font-primary">{product.name}</h1>
                      </Fade>
                      <Fade duration={1500} delay={1000}>
                        <p className="large-paragrapgh font-primary text-justify w-full md:w-4/5">
                          {product.description}
                        </p>
                      </Fade>
                      <Fade duration={1500} direction="up" delay={1000}>
                        <Link
                          to={`Details/${product.name.replaceAll(" ", "-")}`}
                          className="link-btn font-primary hollow-button"
                        >
                          {t("buyNow")}
                          <IoIosArrowForward className="text-[20px] button-arrow" />
                        </Link>
                      </Fade>
                    </div>
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Slider;
