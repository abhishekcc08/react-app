import React from 'react'
import "./App.css"
import Startupflora from './Startupflora';
import Startup from './Startup';
import DigitalMarketing from './DigitalMarketing';
import Incometex from "./Incometax"
import AccountandBookkeeping from "./AccountandBookkeeping";
import Seedfunding from "./Seedfunding";
import Trademark from "./Trademark";
import Login from "./Login";
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
    <Route  path="/"  element={<Startupflora/>}/>
    <Route path="/startup"  element={<Startup/>}/>
    <Route path="/digitalmarketing"  element={<DigitalMarketing/>}/>
    <Route path="/incometex"  element={<Incometex/>}/>
    <Route path="/accountandbookkeeping"  element={<AccountandBookkeeping/>}/>
    <Route path="/seedfunding"  element={<Seedfunding/>}/>
    <Route path="/trademark"  element={<Trademark/>}/>
    <Route path="/login"  element={<Login/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App;
