

import './App.css';

import Navbar from'./components/Navbar';

import TextForm from './components/TextForm';
//import About from './components/About'
//import {
  
  //Routes,
 // Route,

//} from "react-router-dom";


import { useState } from 'react';




function App() {

  const [mode,setMode]=useState("dark");

  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor="#042743"
    }
  }

  

  return( 
    <>


<Navbar tittle="Home" mode={mode} toggleMode={toggleMode}/>



      
          
         <div className="container">
         <TextForm heading ="Enter the text to analyse below"  mode={mode} />
         </div>
        



      </>  
   
     
  );}


export default App;
