import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
// import Icon from "../../../public/Brand/Favicon.ico";
const Seo = ({ currentPage, currentPath }) => {
  return (
    <Helmet>
      {/* Title */}
      <title>ShawermaKrakow | {currentPage}</title>

      {/* Meta */}
      <meta name="theme-color" content="#12342f" />
      <meta
        name="description"
        content="Discover the authentic flavors of shawarma, delicious meals, meats, beefs, sausages, and halal foods at ShawermaKrakow, your go-to restaurant in Poland."
      />
      <meta
        name="keywords"
        content="shawarma, meals, meats, beefs, sausages, halal food, Polish restaurant, Krakow dining, arabian food, oriental food"
      />
      <meta name="author" content="ShawermaKrakow" />
      <meta
        name="google-site-verification"
        content="lYuyLypn3X1axckop6JZimGtPDuI68L6t8G4Hf1hMz4"
      />
      <link
        rel="canonical"
        href={`https://shawermakrakow.com/${currentPath}`}
      />

      {/* Open graph */}
      <meta property="og:title" content={`ShawermaKrakow - ${currentPage}`} />
      <meta
        property="og:description"
        content="Discover the authentic flavors of shawarma, delicious meals, meats, beefs, sausages, and halal foods at ShawermaKrakow, your go-to restaurant in Poland."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://shawermakrakow.com/storage/images/main/seo/seo.webp"
      />
      <meta
        property="og:url"
        content={`https://shawermakrakow.com/${currentPath}`}
      />
      <meta property="og:site_name" content="ShawermaKrakow" />
      <meta property="og:locale" content="pl_PL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`ShawermaKrakow - ${currentPage}`} />
      <meta name="twitter:site" content="@shawermakrakow" />
      <meta name="twitter:creator" content="@shawermakrakow" />
      <meta
        name="twitter:description"
        content="Discover the authentic flavors of shawarma, delicious meals, meats, beefs, sausages, and halal foods at ShawermaKrakow, your go-to restaurant in Poland."
      />
      <meta
        name="twitter:image"
        content="https://shawermakrakow.com/storage/images/main/seo/seo.webp"
      />
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  currentPage: PropTypes.string,
  currentPath: PropTypes.string,
};
