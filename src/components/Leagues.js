import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';

function Leagues() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios('https://api-football-standings.azharimm.site/leagues').then(res=>{
            console.log(res.data.data);
            setData(res.data.data);
        }
        );

    },[]);


    return 
        <div className='leagues-container'>
            

        </div>;
    
};

export default Leagues;
