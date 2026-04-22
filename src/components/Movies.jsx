import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {
  const { isLoading, data } = useContext(DataContext);

  return (
    <div className="movies-content">
      {!isLoading && data
        ? data.map((item) => (
            <ItemMovie
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              type={item.Type}
              year={item.Year}
              poster={item.Poster}
            />
          ))
        : null}
    </div>
  );
};

export default Movies;
