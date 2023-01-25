// import React, { useEffect, useState } from 'react';
// import "./Homepage.css"
// import axios from 'axios'
// import Cards from './Cards.jsx'






// function Homepage() {

//     const [books,setBooks] = useState([])

//     useEffect(()=>{
   
//         axios
//         .get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=rFcea7mZ118WOlgdQB0geZsX02Jda6F2')
//         .then((res) =>{

//             console.log(res.data.results.books)
//             setBooks(res.data.results.books) 

//         }).catch(err => console.log(err) )
        

//     }, [])




//   return (
//     <div>
//       <div className="containerr">
//         <div className="row">
//             <p className='mt-5 mx-3'>For You</p>  
//         </div>
        
//      <Cards books= {books}/>
        
//       </div>
//     </div>
//   )
// }

// export default Homepage
