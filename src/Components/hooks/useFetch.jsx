import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setResponseData(response.data);
      } catch (error) {
        console.error("Data fetching error", error);
      }
    };
    fetchData();
  }, []);
  return responseData;
};

export default useFetch;
