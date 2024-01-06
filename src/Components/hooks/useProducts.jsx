import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const data = useSelector((state) => state.productsApi.data);
  useEffect(() => {
    if (data) {
      setProducts(data[0].products);
    }
  }, [data]);
  return products;
};

export default useProducts;
