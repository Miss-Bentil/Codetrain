import React from "react";
import "./Card.css";

function Cards({ books }) {
  let bookdeets = books.map((book) => {
    return (
      <div className="container overall mb-5" key={book.rank}>
        <div className="card">
          
            <div className="img">
              <img src={book.book_image} alt="" />
          </div>

          <div className="title mt-2">{book.title}</div>
          <div className="author"> <span>by:</span>  {book.author}</div>
          <div className="review">{}</div>
          <div className="price"> Ghc 60.00</div>
        </div>
      </div>


    );
  });

  return (
    <div className="container">
      <div className="content">{bookdeets}</div>
    </div>
  );
}

export default Cards;
