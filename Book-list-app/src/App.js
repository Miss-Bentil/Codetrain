import "./components/Navbarr.css"
import './App.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import "./components/Homepage.css";
import axios from "axios";
import Cards from "./components/Cards";

function App() {

  const [search,setSearch] = useState("")
  const [books,setBooks] = useState([])

  const searchBook = (e) => {
    if(e.key === "Enter"){
      axios
        .get(
           "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?"+search+"api-key=rFcea7mZ118WOlgdQB0geZsX02Jda6F2"
          // "https://www.googleapis.com/books/v1/volumes?q="+search+":keyes&key=AIzaSyAm7By0xLKxEuzEuIyqjbvHCt-n164_aDA"
        )
        .then((res) => {
          console.log(res.data.results.books);
          setBooks(res.data.results.books);
        });
    }
  }




    useEffect(() => {
      axios
        .get(
           "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=rFcea7mZ118WOlgdQB0geZsX02Jda6F2"

        )
        .then((res) => {
          //console.log(res.data.results.books);
          setBooks(res.data.results.books);
        })
        .catch((err) => console.log(err));
    }, []);

 

  return (
    <div className="App">
      <div className="container m-5">
        <div>
          <Navbar className="navbar">
            <Container>
              <p className="brand">Read Away</p>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-box"
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                  onKeyDown={searchBook}
                />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="containerr">
          <div className="row">
            <p className="mt-5 mx-3">For You</p>
          </div>

          <Cards books={books} />
        </div>
      </div>
    </div>
  );
}

export default App;
