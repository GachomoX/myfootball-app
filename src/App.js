// import {Switch} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Leagues from './components/Leagues';



function App() {
  return (

    <BrowserRouter>
       <Route path='/'>
         <NavBar/>
       </Route> 
      <Switch >
        <Route path='/'>
          <Leagues />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
