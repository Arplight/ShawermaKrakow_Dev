import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [topPrice, setTopPrice] = useState(null);
  const response = useSelector((state) => state.productsApi.data);

  useEffect(() => {
    if (response) {
      let productsList = response[0].products;
      let top = [...productsList].sort(
        (b, a) => a.price_before_discount - b.price_before_discount
      );
      setProducts(productsList);
      setTopPrice(top[0].price_before_discount);
    }
  }, [response]);
  return { products, topPrice };
};

export default useProducts;
