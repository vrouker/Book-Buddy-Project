import { use } from "react";
import { useState } from "react";

export default function SearchBar({onSearch}){
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value)
    }
    return(

        <>
        <input className="searchBar"
            type = "text"
            placeholder="Begin typing to search for a book"
            value={searchTerm}
            onChange = {handleSearch}
        />
        </>
    )
}