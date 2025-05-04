
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
            {
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