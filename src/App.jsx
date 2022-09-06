import React from "react"
import {Route, Routes} from "react-router-dom"

import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Main Section </h1>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      Footer
      {/* <Routes>
        <Route path="/" element={<Footer/>} />
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
