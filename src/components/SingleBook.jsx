import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleBook({reservedBooks, setReservedBooks}){
    const {id} = useParams();

    const [singleBook, setSingleBook] = useState({})

    useEffect(()=>{
        async function getSingleBook (){
            const res = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
            const result = await res.json();
            setSingleBook(result)
        }
        getSingleBook();
    }, [])

    const token = localStorage.getItem("token")

    async function handleReserve (){
        try{
            const response = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",{
                method:"POST",
                headers: {'Content-type':'application/json',
                    Authorization: `Bearer ${token}`},
                body: JSON.stringify(
                    {
                        bookId: singleBook.id,
                        title: singleBook.title,
                        author:singleBook.author,
                        cover:singleBook.coverimage,
                        description:singleBook.description,
                    }
                )})
            const result = await response.json();
            setReservedBooks(prevState => [...prevState, result])
            console.log(result)

        } catch (error){
            console.log(error)
        }
    }
    return(
        <>
            {
                token ?
                singleBook && 
                <div className="singleBookCard">
                <h1>{singleBook.title}</h1>
                <h2>{singleBook.author}</h2>
                <img src={singleBook.coverimage}/>
                <p>{singleBook.description}</p>
                <p>{singleBook.available}</p>
                <button onClick={handleReserve}>Reserve Book</button>
            </div>
            :
            <div>
                <div className="singleBookCard">
                <h1>{singleBook.title}</h1>
                <h2>{singleBook.author}</h2>
                <img src={singleBook.coverimage}/>
                <p>{singleBook.description}</p>
                <p>{singleBook.available}</p>
                </div>
            </div>
            }
        </>
    )
}