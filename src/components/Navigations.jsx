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
        <div>
            <Link to="/">Home</Link>
            <Link to="/account">My Account</Link>
            <input
            type="text"
            placeholder="Search here"
            />
            <button onClick={handleSignOut}>Log Out</button>
        </div>
        :
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
            <input
            type="text"
            placeholder="Search here"
            />
        </div>
       }
       
       </> 
    )
}