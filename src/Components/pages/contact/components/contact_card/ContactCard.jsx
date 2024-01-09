import PropTypes from "prop-types";

const ContactCard = ({ cardIcon, cardTitle, cardInfo }) => {
  return (
    <div className="contact-card flex flex-col items-center gap-1  p-2  w-full h-full text-center">
      <span className="card-icon w-[60px] h-[60px] flex justify-center items-center text-[30px] rounded-[60px]">
        {cardIcon}
      </span>
      <span>
        <h3 className="font-primary">{cardTitle}</h3>
      </span>
      <span>
        <p className="large-paragrapgh font-primary italic">{cardInfo}</p>
      </span>
    </div>
  );
};

export default ContactCard;

ContactCard.propTypes = {
  cardIcon: PropTypes.any,
  cardTitle: PropTypes.string,
  cardInfo: PropTypes.string,
};
