import ClassCounter from './components/classCounter/ClassCounter';
import './App.css';
import FunctionCounter from './components/functionCounter/FunctionCounter';


function App() {
  return (
    <div className="App">
      <div className="wrapperMain">
        <FunctionCounter/>
        <ClassCounter />

      </div>

      

      
    </div>
  );
}

export default App;
