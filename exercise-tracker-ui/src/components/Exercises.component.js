import React, { useEffect, useState } from 'react';
import { getExercises } from '../services/api';



const Exercises = () => {
    const [exercises,setExercises] = useState([])

    useEffect(()=>{
        getExercises().then(data=>setExercises(data))
    },[])

    return (
        <div >
            <div className='container-fluid' style={{ width: '80%', alignItems: 'center' }}>
                <table className='table'>
                    <thead style={{ alignContent: 'center' }} >
                        <tr>
                            <th>
                                Username
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Duration
                            </th>
                            <th>
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {exercises.map(ele => {
                            return <tr key={ele._id}>
                                <td>
                                    {ele.username}
                                </td>
                                <td>
                                    {ele.description}
                                </td>
                                <td>
                                    {ele.duration}
                                </td>
                                <td>
                                    {ele.date}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Exercises