import React from 'react';
import './App.css';
import Header from './Components/layouts/Header';
import Navbar from './Components/layouts/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Cards } from './cards/Cards';
import { Cardss } from './cards/Cardss';
import { Cardsss } from './cards/Cardsss';
import { Special } from './cards/Special';
import Footer from './Components/layouts/Footer';



const App=() =>{
  return (
<>
            <Navbar/>   
          <Header/>
         <Cards/>
          <Cardss/>
          <Cardsss/>
          <Special/>
          <Footer/>
  
    <div className="App">


    </div>
    </>
  );
}

export default App;
