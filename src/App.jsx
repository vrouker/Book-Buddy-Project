import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Navigations from './components/Navigations'
import Books from './components/Books'

function App() {
  const [token, setToken] = useState(null)
  const [singleBook, setSingleBook] = useState({})

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <div id="routeSection">
        <Navigations className="navBar"/>
        <Books/>
        <Routes>
          <Route path="/books" element={<Books setSingleBook={setSingleBook}/>}/>
          <Route path="/books/:id" element={<h1>A single book should show here!</h1>}/>
          <Route path="/account" element={<h1>User account goes here!</h1>}/>
          <Route path="/login" element={<h1>Login page goes heres!</h1>}/>
          <Route path="/register" element={<h1>Register form goes here</h1>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
