import { useState } from "react";

export default function Register(){

    const [firstName, setFirstName] = useState ("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit (event){
        event.preventDefault();
        try{
            const response = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", {
                method: "POST",
                headers: {'Content-type':'application/json'},
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                })
            })
            const result = await response.json();
            console.log(result)
        } catch (error){
            console.log(error)
        }

    }


    return(
        <>
        <h2>Sign Up Here!</h2>
        {
            <form className="RegisterForm" onSubmit={handleSubmit}>
                <label>
                    First Name: 
                        <input
                            name="firstName"
                            onChange = {(e)=>setFirstName(e.target.value)}
                            value={firstName}
                        />
                </label>
                    <br/><br/>
                <label>
                    Last Name: 
                        <input
                            name="lastName"
                            onChange={(e)=>setLastName(e.target.value)}
                            value={lastName}
                        />
                </label>
                    <br/><br/>
                <label>
                    Email:
                        <input
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
                <button>Submit</button>

            </form>
        }
        </>
    )
}