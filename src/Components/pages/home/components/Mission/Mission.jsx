import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import { IoIosArrowForward } from "react-icons/io";
import useImages from "../../../../hooks/useImages";
import { Link } from "react-router-dom";

const Mission = () => {
  const Images = useImages();
  return (
    <MainSection
      withBackground={false}
      withStyle={"flex flex-col md:flex-row gap-x-10 gap-y-5 "}
    >
      <span className="w-full md:w-1/2 flex flex-col gap-3">
        <HeroHeadings
          topHeading={"About Us"}
          bottomHeading={`Mission Driven, Flavor Focused`}
          isCentered={false}
        />
        <p className="small-paragrapgh font-primary text-justify w-full lg:w-4/5">
          Driven by a mission to deliver culinary excellence, we remain
          relentlessly focused on flavor. Our commitment to quality ingredients
          and taste mastery defines every dish, ensuring an unforgettable dining
          experience that&apos;s both purposeful and flavorful.
        </p>
        <Link
          to={"/About-Us"}
          className="link-btn font-primary arrow-button pl-[0px]"
        >
          Our story <IoIosArrowForward className="text-[20px] button-arrow " />
        </Link>
      </span>
      <span className="w-full md:w-1/2 flex">
        {Images && (
          <div className="relative ml-auto  h-max w-3/5 md:w-auto">
            <img src={Images[5].url} alt="Mission" className="ml-auto " />
            <img
              src={Images[4].url}
              alt="Mission-2"
              className="absolute top-2  right-[55%] h-4/5 "
            />
          </div>
        )}
      </span>
    </MainSection>
  );
};

export default Mission;
