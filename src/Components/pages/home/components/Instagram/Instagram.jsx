import { useEffect, useState } from "react";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import useImages from "../../../../hooks/useImages";
import { FaInstagram } from "react-icons/fa6";
import LazyLoad from "react-lazy-load";
import { FadeLoader } from "react-spinners";

const Instagram = () => {
  const Images = useImages();
  const [filteredImages, setFilteredImages] = useState([]);
  // loadingState
  const [isLoaded, setIsLoaded] = useState(false);
  function instagramFilter() {
    if (Images) {
      const instagramImages = Images.filter(
        (n) => n.label === "instagram"
      ).reverse();

      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setFilteredImages(instagramImages.slice(0, 6));
      } else if (window.innerWidth <= 768) {
        setFilteredImages(instagramImages.slice(0, 4));
      } else {
        setFilteredImages(instagramImages);
      }
    }
  }
  useEffect(() => {
    instagramFilter();

    function handleResize() {
      instagramFilter();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [Images]);
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
      <ul className="flex justify-center gap-[3px] sm:gap-[5px]">
        {Images &&
          filteredImages.map((picture, index) => (
            <li
              key={picture.id}
              className="w-[300px] h-[100px] sm:h-[150px] md:h-[200px] insta-img "
            >
              <LazyLoad offset={200} className="h-full w-full">
                <img
                  src={picture.url}
                  alt={`instagram ${index}`}
                  className="h-full w-full object-cover"
                  onLoad={() => setIsLoaded(true)}
                />
              </LazyLoad>
              {!isLoaded && (
                <FadeLoader
                  color="#12342f"
                  cssOverride={{
                    position: "absolute",
                    top: "50%",
                    left: "48%",
                  }}
                />
              )}
              <a
                href="https://www.instagram.com/Shawermaklubhaus_krk/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="overlay">
                  <FaInstagram />
                </div>
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Instagram;
