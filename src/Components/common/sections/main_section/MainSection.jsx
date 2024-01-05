import PropTypes from "prop-types";
const MainSection = ({ children }) => {
  return (
    <section className="py-6">
      <div className="container m-auto">{children}</div>
    </section>
  );
};

export default MainSection;

MainSection.propTypes = {
  children: PropTypes.any,
};
