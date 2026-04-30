import { useParams, Link } from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import "./SingleMovie.css";



const SingleMovie =() => {

    const {id} = useParams();
    const {isLoading, error, data} = useFetch(`&i=${id}`);

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar la película</p>;
    if (!data) return <p>No se encontró la película</p>;

    const {Title, Year, Genre, Director, Actors, Plot, Poster, Release, Runtime} = data;


    return (
        !isLoading ?
        <div className="single-movie">
            <img src={Poster} alt={Title} />
            <div className="single-info">
                <Link to="/" className="back-button">← Volver al Inicio</Link>
                <h2>{Title}</h2>
                <p><strong>Year:</strong> {Year}</p>
                <p><strong>Genre:</strong> {Genre}</p>
                <p><strong>Director:</strong> {Director}</p>
                <p><strong>Actors:</strong> {Actors}</p>
                <p><strong>Plot:</strong> {Plot}</p>
                <p><strong>Runtime:</strong> {Runtime}</p>
            </div>
        </div>
        :"Cargando..."
    )
}

export default SingleMovie; 