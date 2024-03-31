import { useTranslation } from "react-i18next";
import { InfoData } from "../../../../../Data/reasons/Reasons";
import InfoCard from "../../../../common/cards/info_card/InfoCard";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";

const Reasons = () => {
  const { t } = useTranslation();
  return (
    <MainSection withBackground={false}>
      <HeroHeadings
        topHeading={t("whatMoreDoYouNeed")}
        bottomHeading={t("reasonsToBuyFromUs")}
        isCentered={true}
        withStyle={"mb-3"}
      />
      <ul className="flex flex-col lg:flex-row justify-around items-center lg:items-end">
        {InfoData.map((info, index) => (
          <li key={index}>
            <InfoCard
              infoDescription={t(info.infoDescription)}
              infoIcon={info.infoIcon}
              infoTitle={t(info.infoTitle)}
            />
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Reasons;
