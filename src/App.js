import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home/Home.jsx';
import SectionTrabajos from './Components/SectionTrabajos/SectionTrabajos';
import Contacto from './Components/Contacto/Contacto';


function App() {

  return (
    <div className="App">

      <Routes>
     
      <Route Component={Home} exact path='/'/>
      
      <Route Component={SectionTrabajos} exact path='/trabajos'/>

      </Routes>
      
      <Contacto/>

    </div>
  );
}

export default App;