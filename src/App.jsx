import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Navigations from './components/Navigations'
import Books from './components/Books'
import SingleBook from './components/SingleBook'

function App() {
  const [token, setToken] = useState(null)
  const [singleBook, setSingleBook] = useState({})

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <div id="routeSection">
        <Navigations className="navBar"/>
        <Routes>
          <Route path="/" element={<Books/>}/>

          <Route path="/books/:id" element={<SingleBook singleBook={singleBook} setSingleBook={setSingleBook}/>}/>

          <Route path="/account" element={<h1>User account goes here!</h1>}/>

          <Route path="/login" element={<h1>Login page goes heres!</h1>}/>

          <Route path="/register" element={<h1>Register form goes here</h1>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
