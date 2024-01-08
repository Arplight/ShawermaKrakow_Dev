import PropTypes from "prop-types";
const TeamCard = ({ cardImage, cardTitle, cardDescription }) => {
  return (
    <div className="team-card">
      <div className="member-image">
        <img src={cardImage} alt="team-member" />
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
