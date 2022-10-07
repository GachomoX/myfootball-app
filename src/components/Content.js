import React, {useState} from 'react';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../App.css';



const Content = () => {
   
    const [active, setActive] =useState(true);



  return (
    <div>
        <div className='tabs'>
            <nav className='tab-leagues' onClick={()=>setActive(true)}>
                <NavLink to='/Leagues' style={{color: active ? '#c20114' :null }}>Leagues</NavLink>

            </nav>
            <div className='tab-standings' onClick={()=>setActive(false)}>
                <NavLink to='/Standings' style={{color: !active ? '#c20114' :null }}>Standings</NavLink>
            </div>

            
        </div>

        
        
    </div>
  )
  
}

export default Content
