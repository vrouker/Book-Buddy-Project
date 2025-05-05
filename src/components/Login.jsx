import { useState } from "react";

export default function Login({setToken}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


//Function recall the API the login information and sets the token for the user to use on the other pages
    async function handleSubmit(e){
        e.preventDefault();
        try{
          const response = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
            method: "POST",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                email: email,
                password:password
            })
          });
          const result = await response.json();
          setToken(result.token)

        } catch (error) {
          console.log(error)
        }
      }


    return(

        <>
        <div className="logInForm">
            <h2>Log in here!</h2>
           {
               <form onSubmit={handleSubmit}>
                <label>
                    Email: 
                    <input
                        className="emailInput"
                        name="email"
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        />
                </label>
                <br/><br/>
                <label>
                    Password:
                    <input
                        name="password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        />
                </label>
                <br/><br/>
                <button className="button">Log In!</button>

            </form>
           } 
           </div>
        </>
    )
}