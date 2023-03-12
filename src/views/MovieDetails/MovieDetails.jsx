import styles from "./MovieDetails.module.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router"
import {get} from "../../firebase/httpClient";
import Navbar from "../../components/Navbar/Navbar";



export function MovieDetails() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
        setMovie(data);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const imgUrl = "https://image.tmdb.org/t/p/w500"+ movie.poster_path;

    return(
        <div className={styles.detailsContainer}>
        <Navbar/>
        
        <img className={`${styles.col} ${styles.movieImage}`} src={imgUrl} alt={movie.title} />

        <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
        <p>
        <strong>Genres:</strong>{" "}
        {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Lenguaje original:</strong> {movie.original_language}
        </p>
        <p>
          <strong>Popularidad</strong> {movie.popularity}
        </p>
        <p>
          <strong>Presupuesto: </strong> {movie.budget}
        </p>
        
        <p>
          <strong>Fecha de estreno:</strong> {movie.release_date}
        </p>
        <p>
        <strong>Compañias de producción:</strong>{" "}
        {movie.production_companies.map((comp) => comp.name).join(", ")}
        </p>
        <p>
          <strong>Status</strong> {movie.status}
        </p>

        </div>
        </div>
    
    )
}