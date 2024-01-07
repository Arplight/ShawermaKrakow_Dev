import Pagination from "./pagination/Pagination";
import PropTypes from "prop-types";
const ProductsSection = ({ children, isPaginated }) => {
  return (
    <section className="py-6">
      <div className="container m-auto">
        {children}
        {isPaginated ? <Pagination /> : ""}
      </div>
    </section>
  );
};

export default ProductsSection;
ProductsSection.propTypes = {
  children: PropTypes.any,
  isPaginated: PropTypes.bool,
};
