import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Books({allBooks, setAllBooks}){
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")

//Function fetches a list of all books from the API
    useEffect(()=>{
        const getAllBooks = async()=>{
            const res = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")

            const results = await res.json();
            setAllBooks(results);
        } 
        getAllBooks();
    },[])
    
//Function navigates to the single book page when the "details" button is clicked
    const getDetails = (bookId)=>{
        navigate (`/books/${bookId}`)
    }

//Function filters the books based on the search term provided by the user in the search bar input
    const filteredBooks = allBooks.filter((book)=>book.title.toLowerCase().includes(searchTerm.toLowerCase()))




    return(
        <>
        <div>
        <h1 className="welcomeMessage">Welcome to Mr. Hop's Library!</h1>

        <h2 className="mainPageMessage">Browse our book selection below or search to find your next great read!</h2>
        <input className="searchBar"
            type = "text"
            placeholder="Begin typing to search for a book"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
        />
        </div>
        
        <div className="AllBookCards">

        {//Maps over the list of filtered books based on the user's search input
            filteredBooks && 
            filteredBooks.map((book)=>
                <div key={book.id} className="BookCard">
                    <img src={book.coverimage} className="bookCardImage"/>
                    <h2>{book.title}</h2>
                    <h2>{book.available}</h2>
                    <button onClick={()=>getDetails(book.id)} className="button">More details!</button>
                </div>
            )}
            </div>
        </>
    )
}
