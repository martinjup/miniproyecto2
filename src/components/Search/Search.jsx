import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState} from "react";
import { useQuery } from "../../hooks/useQuery";
import { useNavigate } from "react-router-dom";
export function Search() {
const query = useQuery();
const search = query.get("search");
let navigate = useNavigate();


const [searchText, setSearchText] = useState("");


useEffect(() => {
    setSearchText(search || "");
}, [search]);

const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/moviesList/?search="+searchText)
    
};

return (
    <form className={styles.searchContainer} onSubmit={handleSubmit} >
    <div className={styles.searchBox}>
        <input
        className={styles.searchInput}
        type="text"
        value={searchText}
        placeholder='Buscar pelicula'
        onChange={(event) => setSearchText(event.target.value)}
        
        />
        <button className={styles.searchButton} type="submit">
        <FaSearch size={25} />
        </button>

    </div>
 
    </form>
);
}

export default Search;