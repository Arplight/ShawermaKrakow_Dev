import { InfoData2 } from "../../../../../Data/reasons_2/Reasons_2";
import InfoCard from "../../../../common/cards/info_card/InfoCard";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";

const Reasons = () => {
  return (
    <MainSection withBackground={false}>
      <HeroHeadings
        topHeading={"What more do you need ?"}
        bottomHeading={"Reasons to buy from us"}
        isCentered={true}
        withStyle={"mb-3"}
      />
      <ul className="flex flex-col lg:flex-row justify-around items-center lg:items-end">
        {InfoData2.map((info, index) => (
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
  );
};

export default Reasons;
