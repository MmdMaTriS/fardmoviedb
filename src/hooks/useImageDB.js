import { useEffect, useState } from "react";

export default function useImageDB(endpoint, options) {
  const [imgData, setImgData] = useState(null);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    setImgLoading(true);
    fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=fda513da3da338ad49c9fb831abddb97&${new URLSearchParams(
        options?.query
      ).toString()}`
    )
      .then((r) => r.json())
      .then(setImgData)
      .finally(() => {
        setImgLoading(false);
      });
  }, [endpoint, options]);
  return { imgData, imgLoading };
}
