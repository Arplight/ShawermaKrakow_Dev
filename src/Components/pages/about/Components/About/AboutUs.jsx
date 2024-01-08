import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import useImages from "../../../../hooks/useImages";

const AboutUs = () => {
  const Images = useImages();
  return (
    <MainSection
      withBackground={false}
      withStyle={"flex flex-col md:flex-row gap-x-10 gap-y-5 flex-col-reverse"}
    >
      <span className="w-full md:w-1/2 flex">
        {Images && (
          <img src={Images[6].url} alt="Mission" className="object-contain" />
        )}
      </span>
      <span className="w-full md:w-1/2 flex flex-col gap-3">
        <HeroHeadings
          topHeading={"About Us"}
          bottomHeading={`Mission Driven, Flavor Focused`}
          isCentered={false}
          withStyle={"w-full lg:w-4/5"}
        />
        <p className="small-paragrapgh font-primary text-justify w-full lg:w-4/5">
          Driven by a mission to deliver culinary excellence, we remain
          relentlessly focused on flavor. Our commitment to quality ingredients
          and taste mastery defines every dish, ensuring an unforgettable dining
          experience that&apos;s both purposeful and flavorful.
        </p>
      </span>
    </MainSection>
  );
};

export default AboutUs;
