import React, {useState,useEffect} from "react";
import '../App.css';
//import axios from "axios";



const Leagues = () => {
    

    const [data,setData]=useState([]);

    useEffect(()=>{

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fb53448635msh2d6cdc4f7438ab5p13ac1ajsn8bfc499e951e',
                'X-RapidAPI-Host': 'football98.p.rapidapi.com'
            }
        };
        
        fetch('https://football98.p.rapidapi.com/competitions', options)
            .then(response => response.json())
            .then(response => console.log(response))
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