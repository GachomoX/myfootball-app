import React, {useState,useEffect} from "react";
import '../App.css';
//import axios from "axios";



const Leagues = () => {
    

    const [data,setData]=useState([]);

    useEffect(()=>{
        
            
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '82f711ab14msh5fc9f050e3530c3p1944f6jsnc5c1a506b958',
                'X-RapidAPI-Host': 'football98.p.rapidapi.com'
            }
        };
        
        fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
            .then(response => response.json())
            .then(response => console.log(response[0][" Matchday 10 "]))
            .catch(err => console.error(err));

    },[])

    console.log(data)


    const apiData = data.map((item, index)=> {
        return(
            <div key={index}>
                
                <img src= {item.homeLogo} alt='Homelogo' />
                <p>Team Name:{item.homeTeam} </p>
            </div>
        )
    })


    




    return (
        <div className="leagues-container">
          {apiData}
        
        </div>
      )
}

export default Leagues