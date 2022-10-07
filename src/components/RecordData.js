import React from "react";

const RecordData = ({handleChange, handleSubmit, recordedData}) => {


    return (
        <div >
            <form onSubmit={handleSubmit}>
                    <input type="text"  name="team" placeholder="Add Team..." value={recordedData.team} onChange={handleChange}/>
                    <input type="text" placeholder="Add Played..."  name="played" value={recordedData.played} onChange={handleChange}/>
                    <input type="text" placeholder="Add Points..."  name="points" value={recordedData.points} onChange={handleChange}/>
                    <input type="text" placeholder="Goal Diff.."  name="gd" value={recordedData.gd} onChange={handleChange}/>
                    <button type="submit">Add</button>
            </form>
        </div>
       
    )
}

export default RecordData;