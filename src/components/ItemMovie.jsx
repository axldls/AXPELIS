import { Link } from "react-router-dom";

const ItemMovie = ({id, title, type, year, poster}) =>{
    
    
    return(
        <Link to={`/movies/${id}`} style={{ color:`inherit`,textDecoration:`inherite` }}>
            <article>
                <div className="item-movie" style={{backgroundImage: `url(${poster})`}}>
                    <div className="info">
                        <h4>{title}</h4>
                        <p className="row-info"><span>{type}</span><span></span>{year}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default ItemMovie;