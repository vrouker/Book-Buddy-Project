import { useState, useEffect} from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Navigations from './components/Navigations'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Register from './components/Register'
import Login from './components/Login'




function App() {
  const [token, setToken] = useState(null)
  const [singleBook, setSingleBook] = useState({})

  useEffect(()=>{
    if (token) {
      localStorage.setItem("token", token)
    }
  },[token])

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    if (storedToken){
      setToken(storedToken)
    }
  }, [])

  


  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <div id="routeSection">
        <Navigations className="navBar" token={token} setToken={setToken}/>
        <Routes>
          <Route path="/" element={<Books/>}/>

          <Route path="/books/:id" element={<SingleBook singleBook={singleBook} setSingleBook={setSingleBook}/>}/>

          <Route path="/account" element={<h1>User account goes here!</h1>}/>

          <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>

          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
