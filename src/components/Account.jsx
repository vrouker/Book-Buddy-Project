
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account({reservedBooks, setReservedBooks}){
    const token = localStorage.getItem("token")
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({})

//Function fetches the list of reserved books that match the user's token from the API
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


//Function removes the reserved book from the user's information in the API
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


//Function fetches the user's details from the API to be displayed below
    useEffect(()=>{
        async function getUserDetails () {
        try{
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
                headers:{Authorization:  `Bearer ${token}`}
            })
            const results = await response.json();
            setUserDetails(results)
        }catch (error){
            console.log(error)
        }
        }
        getUserDetails();
    },[])

    return(
        <>
            <div className="accountInfo">
            <h1>Acount Info</h1>
            <p>First Name: {userDetails.firstname}</p>
            <p>Last Name: {userDetails.lastname}</p>
            <p>Email: {userDetails.email}</p>
            </div>


            <>
            {//Maps over the reserved books to be displayed on the account page of the user
                reservedBooks && reservedBooks.map((reservedBook)=>
                    <div key={reservedBook.id} className="singleBookCard">
                        <h2>{reservedBook.title} by {reservedBook.author}</h2>
                        <img src={reservedBook.coverimage} className="detailCover"/>
                        <br/><br/>
                        <button onClick={()=>handleRemove(reservedBook.id)} className="button">Remove Reservation</button>
                    </div>
                )
            }
            </>
        </>
    )
}