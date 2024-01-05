import { useEffect } from "react";
import { InfoData } from "../../../Data/reasons/Reasons";
import InfoCard from "../../common/cards/info_card/InfoCard";
import HeroHeadings from "../../common/hero_headings/HeroHeadings";
import MainSection from "../../common/sections/main_section/MainSection";
import { fetchData } from "../../redux/slices/apiSlice";
import Slider from "./components/Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  // fetch the required api data once for each page separately, then subcomponents can read data using useSelector hook from redux, then use a custom hook for fetching logic
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const data = useSelector((state) => state.api.data);

  console.log("passed");
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
