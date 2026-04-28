import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=90df80f1";

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
        console.log("Respuesta OMDb:", respuestaJson);
        if (respuestaJson.Response === "True") {
          setData(respuestaJson.Search || respuestaJson); // lista de películas
          setError(false);
        } else {
          setError(true);
          setData(null);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error en fetch:", error);
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
