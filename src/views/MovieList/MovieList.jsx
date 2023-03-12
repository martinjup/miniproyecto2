import {useEffect, useState} from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { get } from "../../firebase/httpClient";
import Navbar from "../../components/Navbar/Navbar";
import { Spinner } from "../../components/Spinner/Spinner";
import { useQuery } from "../../hooks/useQuery";
import ReactPaginate from "react-paginate";

export function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setcurrentPage] = useState(0);

    const query = useQuery();
    const search = query.get("search");
    
    useEffect(() => {

      setIsLoading(true);

      const handlePageChange = (pages) =>{
        setcurrentPage(pages.page);
      }
      const searchUrl = search
        ? "/search/movie?query=" + search
        :"/discover/movie";
      get(searchUrl).then((data) => {
        setMovies(data.results);
        setIsLoading(false);
        console.log(data.page)
        setcurrentPage(data.page);
        
      });
      
      

    }, [search]);

    if (isLoading) {
      return <Spinner />;
    }
        

return(
        <div>  
            <Navbar/>
            <br />
            <div id="Space"><p>.</p></div>
            <ul className={styles.moviesList}>
                {movies.map((movie) =>{
                    return(
                            <MovieCard key={movie.id} movie={movie}/>
                    );
                    })}
            </ul>
            <ReactPaginate
					  pageCount={pageCount}
					  pageRange={2}
					  marginPagesDisplayed={2}
					  onPageChange={''}
					  containerClassName={'container'}
					  previousLinkClassName={'page'}
					  breakClassName={'page'}
					  nextLinkClassName={'page'}
					  pageClassName={'page'}
					  disabledClassNae={'disabled'}
					  activeClassName={'active'}
				    />
              

            
            
        </div>
 ); 

        }