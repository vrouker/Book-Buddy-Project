/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Books({setSingleBook}){
    const [allBooks, setAllBooks] = useState([]);

    const navigate = useNavigate();
    
    useEffect(()=>{
        const getAllBooks = async()=>{
            const res = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")

            const results = await res.json();
            setAllBooks(results);
        } 
        getAllBooks();
        console.log(allBooks);
    },[setAllBooks])

    const handleClick =(book)=>{
        setSingleBook(book);
        navigate("/books/:id")
    }

    return(
        <>
            {
            allBooks.map((book)=>
                <div key={book.id}>
                    <img src={book.coverimage}/>
                    <h2>{book.title}</h2>
                    <h3>{book.available}</h3>
                    <button onClick={handleClick}>More details!</button>
                </div>
            )}
        </>
    )
}