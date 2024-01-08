import { useLocation } from "react-router-dom";
import Stars from "../../../../../public/Template icons/Stars_light.svg";

const Breadcrumb = () => {
  const location = useLocation().pathname.slice(1);

  return (
    <section className="breadcrumb">
      <div className="container m-auto ">
        <div className="title">
          <img src={Stars} alt="stars-left" />
          <h2 className="font-secondary">{location}</h2>
          <img src={Stars} alt="stars-right" />
        </div>

        <p className="large-paragrapgh font-secondary">Home / {location}</p>
      </div>
    </section>
  );
};

export default Breadcrumb;
