import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Store from './pages/Store';
import { Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';


function App() {
  const [accounts, setCurrentAccount]=useState([]);
  const [getNetwork, setCorrectNetwork]=useState(false);


  return (
    <div>
      <Routes>
       <Route path="/about" element={<About />}/>
       <Route path="/roadmap" element={<Roadmap />}/>
       <Route path="/store" element={<Store />}/>
      </Routes>
      
        <div className="App">
          <NavBar accounts={accounts} setCurrentAccount={setCurrentAccount}
           getNetwork={getNetwork} setCorrectNetwork={setCorrectNetwork}/>
          <MainMint accounts={accounts} setCurrentAccount={setCurrentAccount}
           getNetwork={getNetwork} setCorrectNetwork={setCorrectNetwork}/>
       
        </div>
        <div className='moving-background'></div>
      
        </div>
  );
}

export default App;
