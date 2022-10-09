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
        'X-RapidAPI-Key': '82f711ab14msh5fc9f050e3530c3p1944f6jsnc5c1a506b958',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
      }
    };
    
    fetch('https://football98.p.rapidapi.com/competitions', options)
      .then(response => response.json())
      .then(response => setData(response[0][' matchday 10 ']))
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
            <Standings />
          </Route>
        </div>
        
      </Switch>
      
    </BrowserRouter>
      
      
  );
}

export default App;
