import styles from "./MovieCard.module.css"
import {Link} from 'react-router-dom'

function MovieCard({movie}){
    const imgUrl = "https://image.tmdb.org/t/p/w300"+ movie.poster_path;
    return(
        
         <li className={styles.movieCard}>
             <Link className="link" to={"/movies/"+ movie.id}>
                <img className ={styles.movieImg} src= {imgUrl} alt = {movie.title}/>
                <div>
                    {movie.title}<br />
                    Lenguaje: {movie.original_language}<br />
                    Popularidad: {movie.popularity}
                </div>

             
             </Link>
             
             </li>
             

    )

}

export default MovieCard;