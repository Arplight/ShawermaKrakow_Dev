import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const useImages = () => {
  const [images, setImages] = useState(null);
  const response = useSelector((state) => state.imagesApi.data);
  useEffect(() => {
    if (response) {
      setImages(response[0].images);
    }
  }, [response]);
  return images;
};

export default useImages;
