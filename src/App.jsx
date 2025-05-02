import { useState, useEffect} from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Navigations from './components/Navigations'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Register from './components/Register'
import Login from './components/Login'
import Account from './components/Account'




function App() {
  const [token, setToken] = useState(null)
  const [singleBook, setSingleBook] = useState({})
  const [reservedBooks, setReservedBooks] = useState([])

  useEffect(()=>{
    if (token) {
      localStorage.setItem("token", token)
    }
  },[token])

  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
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

          <Route path="/books/:id" element={<SingleBook singleBook={singleBook} setSingleBook={setSingleBook} token={token} setReservedBooks={setReservedBooks}/>}/>

          <Route path="/account" element={<Account reservedBooks={reservedBooks} setReservedBooks={setReservedBooks}/>}/>

          <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>

          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
