import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import ExcellenceImage from "../../../../../../public/Template icons/Excelence.webp";
import { useTranslation } from "react-i18next";
const Excellence = () => {
  const { t } = useTranslation();
  return (
    <MainSection withBackground={false} withStyle={"flex flex-col"}>
      <HeroHeadings
        topHeading={t("ourExcellence")}
        bottomHeading={t("irresistibleFlavor")}
        isCentered={true}
        withStyle={"mb-3 text-center gap-2 w-full md:w-3/5 m-auto text-center"}
        withImage={ExcellenceImage}
      />
    </MainSection>
  );
};

export default Excellence;
