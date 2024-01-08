import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import ExcellenceImage from "../../../../../../public/Template icons/Excelence.webp";
const Excellence = () => {
  return (
    <MainSection withBackground={false} withStyle={"flex flex-col"}>
      <HeroHeadings
        topHeading={"Our excellence"}
        bottomHeading={`“An irresistible flavor of spices and freshly roasted meat, a pleasant fuss before a delicious dinner, smiles of hospitable waiters”`}
        isCentered={true}
        withStyle={"mb-3 text-center gap-2 w-full md:w-3/5 m-auto text-center"}
        withImage={ExcellenceImage}
      />
    </MainSection>
  );
};

export default Excellence;
