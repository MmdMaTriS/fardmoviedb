import { useEffect, useState } from "react";

export default function useMovieDB(endpoint, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=fda513da3da338ad49c9fb831abddb97&${new URLSearchParams(
        options?.query
      ).toString()}`
    )
      .then((r) => r.json())
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint, options]);
  return { data, loading };
}
