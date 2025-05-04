import { useState, useEffect} from 'react'
import MrHop from './assets/MrHop.png'
import { Routes, Route, Link } from 'react-router-dom'
import Navigations from './components/Navigations'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Register from './components/Register'
import Login from './components/Login'
import Account from './components/Account'
import SearchBar from './components/SearchBar'




function App() {
  const [token, setToken] = useState(null)
  const [allBooks, setAllBooks] = useState([]);
  const [singleBook, setSingleBook] = useState({})
  const [reservedBooks, setReservedBooks] = useState([])
  const [data, setData] = useState ([allBooks])
  const [searchResults, setSearchResults] = useState(data)




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

//Search input does not work....need outside help.
  const handleSearchInput = (searchTerm)=>{
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (searchTerm) {
      const filteredResults = data.filter((item)=>
        item.toLowerCase().includes(lowerCaseSearch));
    setSearchResults(filteredResults);
    } else {
      setSearchResults(data)
    }
  }


  return (
    <>
      <div className="headerBar">
      <h1 className="headerBar"><img id='logo-image' src={MrHop}/>Mr. Hop's Library</h1>
      <Navigations className="navBar" token={token} setToken={setToken}/>
      </div>

      <div>
        <SearchBar onSearch={handleSearchInput} className="searchBar"/>
      </div>


      <div id="routeSection">
        <Routes>
          <Route path="/" element={<Books allBooks={allBooks} setAllBooks={setAllBooks}/>}/>

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
