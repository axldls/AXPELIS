import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=90df80f1";

export const useFetch = (params, byId = false) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchMovie = async (url) => {
    setIsLoading(true);
    setError(false);

    try {
      const respuesta = await fetch(url);
      const respuestaJson = await respuesta.json();
      console.log("Respuesta OMDb:", respuestaJson);

      if (respuestaJson.Response === "True") {
        if (respuestaJson.Search) {
          // 🔎 Filtramos: solo películas con poster válido
          const filtered = respuestaJson.Search.filter(
            (item) => item.Type === "movie" && item.Poster && item.Poster !== "N/A"
          );

          setData(filtered);
        } else {
          // 🔎 Cuando pedís por ID (&i=...), guardamos el objeto tal cual
          setData(respuestaJson);
        }
        setError(false);
      } else {
        setError(true);
        setData(null);
      }
    } catch (err) {
      console.error("Error en fetch:", err);
      setError(true);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (params) {
      const url = byId
        ? `${API_ENDPOINT}&i=${params}` // detalle por ID
        : `${API_ENDPOINT}&s=${params}`; // búsqueda por título
      fetchMovie(url);
    }
  }, [params, byId]);

  return { isLoading, error, data };
};
