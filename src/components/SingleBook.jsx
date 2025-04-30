/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleBook(){
    const {id} = useParams();

    const [singleBook, setSingleBook] = useState({})

    useEffect(()=>{
        async function getSingleBook (){
            const res = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
            const result = await res.json();
            setSingleBook(result)
            console.log(result)
        }
        getSingleBook();
    }, [])
    return(
        <>
            {
                singleBook && 
                <div className="singleBookCard">
                <h1>{singleBook.title}</h1>
                <img src={singleBook.coverimage}/>
                <h2>{singleBook.author}</h2>
                <p>{singleBook.description}</p>
                <p>{singleBook.available}</p>
            </div>
            }
        </>
    )
}