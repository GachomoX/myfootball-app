import React from 'react'

const AwayMatches = ({data}) => {

  const awayTeam = data.map((item, index)=> {
    return(
        <div key={index}>
            
            <img src= {item.awayLogo} alt='Homelogo' />
            <p>Away Team:{item.awayTeam} </p>
            <p>Home Team:{item.homeTeam} </p>
        </div>
    )
})

  return (
    <div >
      {awayTeam}
      
    </div>
  )
}

export default AwayMatches
