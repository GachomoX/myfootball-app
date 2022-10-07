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
        <div style={{padding:"25px", margin:"5px"}}><NavLink exact to='/' style={{ padding:"25px", background:"black", color:"white", border:"5px",  width:"300px"}}>Home</NavLink></div>
        <div style={{padding:"25px", margin:"5px"}}><NavLink to='/homematches' style={{ padding:"25px", background:"black", color:"white", border:"5px",  width:"300px"}}>Home Matches</NavLink></div>
        <div style={{padding:"25px", margin:"5px"}}><NavLink to='/awaymatches' style={{ padding:"25px", background:"black", color:"white", border:"5px",  width:"300px"}}>Away Matches</NavLink></div>
        <div style={{padding:"25px", margin:"5px"}}><NavLink to='/standings' style={{ padding:"25px", background:"black", color:"white", border:"5px",  width:"300px"}}>Standings</NavLink></div>
       
      </nav>   
    </>
    
  )
}

export default NavBar
