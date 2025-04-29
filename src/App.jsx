import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Navigations from './components/Navigations'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <div id="routeSection">
        <Navigations className="navBar"/>
        <Routes>
          <Route path="/books" element={<h1>Books go here!</h1>}/>
          <Route path="/books/:id" element={<h1>A single book should show here!</h1>}/>
          <Route path="/account" element={<h1>User account goes here!</h1>}/>
          <Route path="/login" element={<h1>Login page goes heres!</h1>}/>
          <Route path="/register" element={<h1>Register form goes here</h1>}/>
        </Routes>
      </div>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
    </>
  )
}

export default App
