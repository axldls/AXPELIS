import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=25b7a39d";

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchMovie = (url) => {
    setIsLoading(true);
    setError(false);

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => {
        console.log("data:", respuestaJson);
        setData(respuestaJson);     
        setIsLoading(false);         
      })
      .catch((error) => {
        console.error(error);
        setError(true);              
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (params) {
      fetchMovie(`${API_ENDPOINT}&s=${params}`);
    }
  }, [params]);

  return { isLoading, error, data };
};
