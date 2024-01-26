import PropTypes from "prop-types";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import { FadeLoader } from "react-spinners";

const TeamCard = ({ cardImage, cardTitle, cardDescription }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="team-card">
      <div className="member-image">
        <LazyLoad offset={200}>
          <img
            src={cardImage}
            alt="team-member"
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
      </div>
      <div className="member-info">
        <div className="member-name">
          <h3 className="font-primary">{cardTitle}</h3>
        </div>
        <div className="member-position">
          <p className="small-paragrapgh font-secondary italic">
            {cardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  cardImage: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
};
