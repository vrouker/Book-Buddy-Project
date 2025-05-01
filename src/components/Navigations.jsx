/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

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