import React, {useState, useEffect} from "react";
import RecordData from "./RecordData";

const Standings = () => {
    const [data, setData] = useState([])
    const [recordeData, setRecordedData] = useState({
        team:"",
        played:"",
        points:"",
        gd:""
    })


    const handleChange = (e) => {
        e.preventDefault()
        setRecordedData({
            ...recordeData,
            [e.target.name]:e.target.value
        })}
        

        const handleSubmit = (e) => {
            e.preventDefault()
            fetch("http://localhost:3000/records", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(recordeData)
              });

              setRecordedData({
                team:"",
                played:"",
                points:"",
                gd:""
            })
               
        }

    useEffect(()=> {
        fetch("http://localhost:3000/records")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err))
    },[recordeData])

    const record = data.map((item)=> {
        return(
            <tr key={item.id}>
                <td>{item.team}</td>
                <td>{item.played}</td>
                <td>{item.points}</td>
                <td>{item.gd}</td>
            </tr>
        )
    })


    return (
        <>
        <RecordData handleChange={handleChange} handleSubmit={handleSubmit} recordedData={recordeData}/>
        <table>
            <thead>
                <th>
                    <h4>Team</h4>
                </th>
                <th>
                    <h4>Played</h4>
                </th>
                <th>
                    <h4>Points</h4>
                </th>
                <th>
                    <h4>GD</h4>
                </th>
            </thead>
            <tbody>
                {record}
            </tbody>
        </table>
        </>
        
    )
}

export default Standings;