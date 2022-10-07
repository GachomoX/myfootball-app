// import {Switch} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Leagues from './components/Leagues';
import AwayMatches from './components/AwayMatches';
import Standings from './components/Standings';


function App() {

  const [data,setData]=useState([]);

  useEffect(()=>{

      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'fb53448635msh2d6cdc4f7438ab5p13ac1ajsn8bfc499e951e',
              'X-RapidAPI-Host': 'football98.p.rapidapi.com'
          }
      };
      
      fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
          .then(response => response.json())
          .then(response =>setData(response[0][" Matchday 10 "]))
          .catch(err => console.error(err));

  },[])

  console.log(data)
  return (

    <BrowserRouter>
      <Route path='/'>
        <NavBar/>
      </Route> 
      <Switch>
        <div style={{justifyContent:"center", textAlign:"center"}}>
          <Route path="/homematches">
            <Leagues data={data}/>
          </Route>
          <Route path="/awaymatches">
            <AwayMatches data={data}/>
          </Route>
          <Route path="/standings">
            <Standing />
          </Route>
        </div>
        
      </Switch>
      
    </BrowserRouter>
      
      
  );
}

export default App;
