import Funcform from './components/function/Funcform';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Classform from './components/class/Classform'
import Navbarr from './components/navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbarr/>
  
      <Routes>
      <Route path='/'  element={<Navigate to={'/functionform'}/>}/>
        <Route path={'/functionform'} element={<Funcform/>} />
        <Route path={'/classform'} element={<Classform/>} />


      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
