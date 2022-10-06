import React, {useState,useEffect} from "react";
import '../App.css';
import axios from "axios";



const Leagues = ()=>{

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios('https://api-football-v1.p.rapidapi.com/v3/teams/seasons').then(res=>{
            console.log(res.data);
        });

    },[]);


    return
        <div className="leagues-container">
            leagues

        </div>;
    
}

export default Leagues