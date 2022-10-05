import React, {useState} from 'react;'
import '../App.css';
import Leagues from './Leagues';
import Standings from './Standings';

const Content = () => {
    const [active, setActive] =useState(true);


  return (
    <div className ='content-container'>
        <div className='tabs'>
            <div className='tab-leagues'>
                <h2>Leagues</h2>

            </div>
            <div className='tab-standings'>
                <h2>Standings</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Content
