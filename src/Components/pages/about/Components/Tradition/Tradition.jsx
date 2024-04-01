import { useTranslation } from "react-i18next";
import { traditionData } from "../../../../../Data/tradition/Tradition";
import InfoCard from "../../../../common/cards/info_card/InfoCard";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";

const Tradition = () => {
  const { t } = useTranslation();
  return (
    <MainSection withBackground={true} withStyle={"flex flex-col"}>
      <HeroHeadings
        topHeading={t("whatWeProvide")}
        bottomHeading={t("yearsOfTradition")}
        isCentered={true}
        withStyle={"mb-3"}
      />

      <ul className="flex flex-col lg:flex-row justify-evenly  flex-wrap items-center lg:items-start">
        {traditionData.map((tradition, index) => (
          <li key={index}>
            <InfoCard
              infoDescription={t(tradition.traditionDescription)}
              infoIcon={tradition.traditionIcon}
              infoTitle={t(tradition.traditionTitle)}
            />
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Tradition;
