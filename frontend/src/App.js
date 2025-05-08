import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Main from './Component.jsx/Main';
import Rigester from './Component.jsx/Rigester';
import ShowData from './Component.jsx/ShowData';
import Login from './Component.jsx/Login';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/reg' element={<Rigester/>}/>
      <Route path='/get' element={<ShowData/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;