import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import Work from './Work.js';
import About from './About.js';
import Blog from './Blog.js';
import Services from './Services.js';
import Contact from './Contact.js';
import Herosection from './Herosection';


function App() {

const [theme,setTheme] = useState("light");
function toggleTheme(){
  if(theme === "light"){
    setTheme("dark");
    document.body.style.backgroundColor = "black";
  }else{
    setTheme("light");
    document.body.style.backgroundColor = "white";
  }
}
  return (
   
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/"exact element={<Herosection theme={theme} toggleTheme={toggleTheme}/>}/>
        <Route path="/work"exact element={<Work theme={theme} toggleTheme={toggleTheme}/>}/>
        <Route path="/about"exact element={<About theme={theme} toggleTheme={toggleTheme}/>}/>
        <Route path="/blog"exact element={<Blog theme={theme} toggleTheme={toggleTheme}/>}/>
        <Route path="/services" exact element={<Services theme={theme} toggleTheme={toggleTheme}/>}/>
        <Route path="/contact" exact element={<Contact theme={theme} toggleTheme={toggleTheme}/>}/>
        
      
      </Routes>
     
      
    </div>
    
  );
}

export default App;
