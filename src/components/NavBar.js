import React from 'react'
import '../App.css'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  return (
    <>
      <div style={{padding:"30px", background:"black", color:"white", textAlign:"center"}} >
        <h1>Football App ⚽</h1>  
      </div>
      <nav style={{display:"flex", justifyContent:"center"}}>
        <div style={{padding:"25px", margin:"5px"}}><NavLink to='/' style={{ padding:"25px", background:"black", color:"white", border:"5px",  width:"300px"}}>Home Team</NavLink></div>
        <div style={{padding:"25px", margin:"5px"}}><NavLink to='/Standings' style={{ padding:"25px", background:"black", color:"white", border:"5px",  width:"300px"}}>Away Team</NavLink></div>
      </nav>   
    </>
    
  )
}

export default NavBar
