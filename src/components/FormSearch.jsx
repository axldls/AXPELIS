import { useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { DataContext, DataProvider } from "../context/DataContext";

const FormSearch = () => {

    const [title, setTitle] = useState("");
    const {setQuery, error} = useContext(DataContext);

    //const {data} = useFetch("&s=avengers")

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title);
        //console.log("title", title);
    }

    return(
        <div className="FormSearch">
            <h2>AXMOVIES</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busca tu pelicula favorita" onChange={e =>setTitle(e.target.value)}/>
                <input type="submit" value={"Buscar"} />
            </form>
        </div> 
    );
}

export default FormSearch