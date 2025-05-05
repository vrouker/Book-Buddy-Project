import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigations ({token, setToken}){

//function handles the signout of the user on all pages
    const handleSignOut = ()=>{
        setToken("")
        localStorage.clear(token)
      }

      

    return(
       <>
       { //navbar checks for a user as "signed in" before displaying the parts
            token ?
        <div className="navBar">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/account" className="navLink">My Account</Link>
            <button onClick={handleSignOut} className="button">Log Out</button>
        </div>
        :
        <div className="navBar">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/login" className="navLink">Login</Link>
            <Link to="/register" className="navLink">Sign Up</Link>
        </div>
       }
       
       </> 
    )
}