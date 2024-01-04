import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Test from "../../../../../../public/Images/Main/Pack-food.webp";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Banner from "../../../../../../public/Images/Main/Banner-2.webp";
const Slider = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://shawermakrakow.com/products");
  //       setData(response.products);
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(data);
  return (
    <div className="slider py-2" style={{ backgroundImage: `url(${Banner})` }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-container container m-auto flex flex-col md:flex-row gap-10 relative">
            <span className="w-full h-full md:w-1/2  flex items-center justify-center slider-image">
              <img src={Test} alt="" />
            </span>
            <span className="slider-info w-full h-full md:w-1/2 flex items-center justify-center z-[10]">
              <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                <h3 className="font-primary italic ">Save up to $12.00</h3>
                <h1 className="font-primary">Fresh Turkey</h1>
                <p className="large-paragrapgh font-primary text-justify w-full md:w-4/5">
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="font-primary hollow-button">
                  Buy now
                  <IoIosArrowForward className="text-[20px] button-arrow" />
                </button>
              </div>
            </span>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
