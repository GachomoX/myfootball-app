import React from "react";
import '../App.css';
//import axios from "axios";



const Leagues = ({data}) => {
    

    const apiData = data.map((item, index)=> {
        return(
            <div key={index}>
                
                <img src= {item.homeLogo} alt='Homelogo' />
                <p>Home Team:{item.homeTeam} </p>
                <p>Away Team:{item.awayTeam} </p>
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