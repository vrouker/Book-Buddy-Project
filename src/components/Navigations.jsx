import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigations ({token, setToken}){

    const handleSignOut = ()=>{
        setToken("")
        localStorage.clear(token)
      }

      

    return(
       <>
       {
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