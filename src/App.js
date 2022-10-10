// import {Switch} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Leagues from './components/Leagues';
import Standings from './components/Standings';
import AwayMatches from './components/AwayMatches';




function App() {

  const [data,setData]=useState([]);

  useEffect(()=>{

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9ffc9c58a0msh59f94ccf73e3603p1914d6jsn6dbda05fc175',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
      }
    };
    
    fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
      .then(response => response.json())
      .then(response => setData(response[0][' Matchday 13 ']))
      .catch(err => console.error(err));

  },[])

  console.log(data)
  return (

    <BrowserRouter>
      <Route path='/'>
        <NavBar/>
      </Route> 
      <Switch>
        
          <Route path="/homematches">
            <Leagues data={data}/>
          </Route>
          <Route path="/awaymatches">
            <AwayMatches data={data} />
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
      
        
      </Switch>
      
    </BrowserRouter>
      
      
  );
}

export default App;
