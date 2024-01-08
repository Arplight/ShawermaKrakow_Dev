import { traditionData } from "../../../../../Data/tradition/Tradition";
import InfoCard from "../../../../common/cards/info_card/InfoCard";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";

const Tradition = () => {
  return (
    <MainSection withBackground={true} withStyle={"flex flex-col"}>
      <HeroHeadings
        topHeading={"What we provide"}
        bottomHeading={`30 Years of tradition`}
        isCentered={true}
        withStyle={"mb-3"}
      />

      <ul className="flex flex-col lg:flex-row justify-evenly  flex-wrap items-center lg:items-start">
        {traditionData.map((tradition, index) => (
          <li key={index}>
            <InfoCard
              infoDescription={tradition.traditionDescription}
              infoIcon={tradition.traditionIcon}
              infoTitle={tradition.traditionTitle}
            />
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Tradition;
