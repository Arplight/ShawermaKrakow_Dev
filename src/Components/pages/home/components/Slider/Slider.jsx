import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
// Data
import useProducts from "../../../../hooks/useProducts";
import useImages from "../../../../hooks/useImages";
// Icons
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const images = useImages();
  const products = useProducts();
  const [topProducts, setTopProducts] = useState(null);
  useEffect(() => {
    if (products) {
      setTopProducts(products.filter((n) => n.top_product));
    }
  }, [products]);
  return (
    <>
      {images && topProducts && (
        <div
          className="slider py-2"
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
              delay: 3000,
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
                <div className="slider-container container m-auto flex flex-col md:flex-row gap-10 relative items-center h-[70vh]">
                  <span className="w-full h-full md:w-1/2  flex items-center justify-center slider-image">
                    <img src={product.image} alt={product.name} />
                  </span>
                  <span className="slider-info w-full h-full md:w-1/2 flex items-center justify-center z-[10]">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                      <h3 className="font-primary italic font-thin">
                        Save up to ${product.price_before_discount}
                      </h3>
                      <h1 className="font-primary">{product.name}</h1>
                      <p className="large-paragrapgh font-primary text-justify w-full md:w-4/5">
                        {product.description}
                      </p>
                      <button className="font-primary hollow-button">
                        Buy now
                        <IoIosArrowForward className="text-[20px] button-arrow" />
                      </button>
                    </div>
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Slider;
