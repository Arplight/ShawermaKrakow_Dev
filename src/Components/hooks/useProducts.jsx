import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const response = useSelector((state) => state.productsApi.data);
  useEffect(() => {
    setProducts(response ? response[0].products : null);
  }, [response]);
  return products;
};

export default useProducts;
