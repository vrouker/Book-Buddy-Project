/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account({reservedBooks, setReservedBooks}){
    const token = localStorage.getItem("token")
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({})

    
    useEffect(()=>{
        const getReservedBooks = async () => {
            const response = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations", {
                headers: {Authorization: `Bearer ${token}`}
            })
            const result = await response.json();
            setReservedBooks(result)
        }
        getReservedBooks();
    }, [refresh])

    async function handleRemove(id){
        try{
            const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${id}`, {
                method: "DELETE",
                headers: {Authorization: `Bearer ${token}`}
            })
            setRefresh(!refresh)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        async function getUserDetails () {
        try{
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
                headers:{Authorization:  `Bearer ${token}`}
            })
            const results = await response.json();
            setUserDetails(results)
            console.log(results)
        }catch (error){
            console.log(error)
        }
        }
        getUserDetails();
    },[])
    
    return(
        <>
            <div>
            <h1>Acount Info</h1>
            </div>


            <>
            {
                reservedBooks && reservedBooks.map((reservedBook)=>
                    <div key={reservedBook.id}>
                        <h2>{reservedBook.title} by {reservedBook.author}</h2>
                        <img src={reservedBook.coverimage}/>
                        <button onClick={()=>handleRemove(reservedBook.id)}>Remove Reservation</button>
                    </div>
                )
            }
            </>
        </>
    )
}