import PropTypes from "prop-types";
const QualityBadge = ({ BadgeIcon, BadgeLabel }) => {
  return (
    <div className="flex items-center gap-1 w-max">
      <img src={BadgeIcon} alt="badge" className="w-[50px] h-[50px]" />
      <h4 className="font-primary font-bold">{BadgeLabel}</h4>
    </div>
  );
};

export default QualityBadge;
QualityBadge.propTypes = {
  BadgeIcon: PropTypes.string,
  BadgeLabel: PropTypes.string,
};
