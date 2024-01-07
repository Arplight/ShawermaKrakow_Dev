import { useEffect, useState } from "react";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import useImages from "../../../../hooks/useImages";

const Instagram = () => {
  const Images = useImages();
  const instagramImages = Images.filter((n) => n.label === "instagram");
  const [filteredImages, setFilteredImages] = useState(instagramImages);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setFilteredImages(instagramImages.slice(0, 4));
      } else if (window.innerWidth < 768) {
        setFilteredImages(instagramImages.slice(0, 2));
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section>
      <div className="container m-auto">
        <HeroHeadings
          topHeading={"Our Gallery"}
          bottomHeading={`Join our instagram community`}
          isCentered={true}
          withStyle={"mb-3"}
        />
      </div>
      <ul className="flex gap-[3px] sm:gap-[5px]">
        {Images &&
          filteredImages.map((picture, index) => (
            <li
              key={picture.id}
              className={`w-[300px] h-[100px] md:h-[200px] `}
            >
              <a
                href="https://www.instagram.com/Shawermaklubhaus_krk/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={picture.url}
                  alt={`instagram ${index}`}
                  className="h-full w-full object-cover"
                />
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Instagram;
