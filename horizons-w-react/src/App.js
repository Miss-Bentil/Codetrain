
import Navbar from './components/navbar/Navbar'
import './App.css';
import Carousel from './components/carousel/Carousel'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'



function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
        <Navbar/>
        <Carousel/>
        </div>
        <div className="container">
          <div className="row">
            <h2 class="text-center mt-5">PLANS</h2>
          </div>
        </div>
      </div>
      <Card/>
      <Footer/>
       
        
       

      
    </>
  
  );
}

export default App;
