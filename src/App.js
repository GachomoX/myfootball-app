import {Switch} from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Content from './components/Content';
import Leagues from './components/Leagues';
import Standings from './components/Standings';


function App() {
  return (

    <BrowserRouter>

    <Route path='/'><NavBar/></Route> 
    <Route path="/"><Content /></Route>

    <Switch>
    <Route path='/Standings'><Standings/></Route>
    <Route path='/Leagues'><Leagues/></Route>
    </Switch>
    
  
  
    
    <Footer/>
     
      
    </BrowserRouter>
  );
}

export default App;
