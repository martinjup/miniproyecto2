import {useEffect, useState} from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "../../views/MovieList/MovieList.module.css";
import { useQuery } from "../../hooks/useQuery";
import { get } from "../../firebase/httpClient";
import { Spinner } from "../Spinner/Spinner";


export default function MovieFront() {
    const [movies, setMovies] = useState([]);
    const [upcoming,setUpcoming] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
 

    const query = useQuery();
    const search = query.get("search");
    

useEffect(() => {

setIsLoading(true);
const searchUrl = search
? "search/movie?query=" + search
:"/discover/movie";
get(searchUrl).then((data) => {
setMovies(data.results);
setIsLoading(false);

const upcomingUrl = "/movie/upcoming"
get(upcomingUrl).then((data) => {
    setUpcoming(data.results);
    setIsLoading(false);
})

});



}, [search]);


if (isLoading) {
    return <Spinner />;
  }

return(
        <div>  
            <h1 className="titulo" style={{textAlign:"center"}} >Bienvenido</h1>
            <ul className={styles.moviesList}>
               {movies.map((movie)=>
                <MovieCard key={movie.id} movie={movie}/>
               )}
                    
                    
            </ul>
            <h1 style={{textAlign:"center"}}>¡Siguientes estrenos!</h1>

            <ul className={styles.moviesList}>
            {upcoming.map((movie)=>
                <MovieCard key={movie.id} movie={movie}/>
            )}
                    
                    
            </ul>
        </div>
)
        }
    