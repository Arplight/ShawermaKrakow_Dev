import PropTypes from "prop-types";
import useImages from "../../../hooks/useImages";

const MainSection = ({ children, withBackground, withStyle }) => {
  const images = useImages();

  return (
    <>
      {withBackground ? (
        images && (
          <section
            className={`py-6 ${withBackground ? "background-section" : ""}`}
            style={
              withBackground
                ? {
                    backgroundImage: `url(${images[0].url})`,
                  }
                : {}
            }
          >
            <div className={`container m-auto ${withStyle}`}>{children}</div>
          </section>
        )
      ) : (
        <section className="py-6">
          <div className={`container m-auto ${withStyle}`}>{children}</div>
        </section>
      )}
    </>
  );
};

export default MainSection;

MainSection.propTypes = {
  children: PropTypes.any,
  withBackground: PropTypes.bool,
  withStyle: PropTypes.string,
};
