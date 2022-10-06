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
                'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
            }
        };
        
        fetch('https://football-prediction-api.p.rapidapi.com/api/v2/get-list-of-fixture-ids', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));

    },[])
    console.log(data)

    




  return (
    <div className='leagues-container'>
        {data.map(()=>(
            <div>{data}</div>
        ))}
        
      
    </div>
  )
}

export default Leagues