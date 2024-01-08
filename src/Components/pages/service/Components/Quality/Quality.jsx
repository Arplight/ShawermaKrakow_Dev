import { qualityData } from "../../../../../Data/quality/Quality";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import QualityBadge from "../../../../common/quality_badge/QualityBadge";
import MainSection from "../../../../common/sections/main_section/MainSection";
import useImages from "../../../../hooks/useImages";

const Quality = () => {
  const Images = useImages();
  return (
    <MainSection
      withBackground={true}
      withStyle={"flex flex-col md:flex-row gap-x-10 gap-y-5 "}
    >
      <span className="w-full md:w-1/2 flex flex-col gap-3">
        <HeroHeadings
          topHeading={"Check Us Out"}
          bottomHeading={"Quality of our hand cut steaks and roasts"}
          isCentered={false}
        />
        <p className="small-paragrapgh font-primary text-justify w-full lg:w-4/5">
          Discover top-quality beef, sausage, and meats, crafted for exceptional
          flavor and excellence. Indulge in our premium selection, where every
          bite embodies superior taste and quality.
        </p>
        <ul className="flex flex-col gap-2">
          {qualityData.map((badge, index) => (
            <li key={index}>
              <QualityBadge
                BadgeIcon={badge.badgeIcon}
                BadgeLabel={badge.badgeLabel}
              />
            </li>
          ))}
        </ul>
      </span>
      <span className="w-full md:w-1/2">
        {Images && <img src={Images[2].url} alt="quality" />}
      </span>
    </MainSection>
  );
};

export default Quality;
