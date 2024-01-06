import { useEffect } from "react";
import { InfoData } from "../../../Data/reasons/Reasons";
import InfoCard from "../../common/cards/info_card/InfoCard";
import HeroHeadings from "../../common/hero_headings/HeroHeadings";
import MainSection from "../../common/sections/main_section/MainSection";
import { fetchProducts } from "../../redux/slices/productsApiSlice";
import Slider from "./components/Slider/Slider";
import { useDispatch } from "react-redux";
import { fetchImages } from "../../redux/slices/imagesApiSlice";

const Home = () => {
  const dispatchProducts = useDispatch();
  const dispatchImages = useDispatch();

  useEffect(() => {
    dispatchProducts(fetchProducts());
    dispatchImages(fetchImages());
  }, [dispatchImages, dispatchProducts]);

  return (
    <div className="home">
      {/* Slider */}
      <Slider />
      {/* Reasons */}
      <MainSection>
        <HeroHeadings
          topHeading={"What more do you need ?"}
          bottomHeading={"Reasons to buy from us"}
        />
        <ul className="flex flex-col lg:flex-row justify-around items-center lg:items-end">
          {InfoData.map((info, index) => (
            <li key={index}>
              <InfoCard
                infoDescription={info.infoDescription}
                infoIcon={info.infoIcon}
                infoTitle={info.infoTitle}
              />
            </li>
          ))}
        </ul>
      </MainSection>
    </div>
  );
};

export default Home;
