import { useState } from "react";

const FormSearch = () => {

    const [title, setTitle] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log("title", title);
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