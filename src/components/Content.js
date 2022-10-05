import React, {useState} from 'react;'
import '../App.css';
import Leagues from './Leagues';
import Standings from './Standings';

const Content = () => {
    const [active, setActive] =useState(true);


  return (
    <div className ='content-container'>
        <div className='tabs'>
            <div className='tab-leagues' onClick={()=>serActive(true)}>
                <h2>Leagues</h2>

            </div>
            <div className='tab-standings' onClick={()=>serActive(false)}>
                <h2>Standings</h2>
            </div>

            {active ? <Leagues/> : <Standings/>}
        </div>
      
    </div>
  )
}

export default Content
