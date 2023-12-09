import React, { useEffect, useState } from 'react';
import { deleteExercises, getExercises } from '../services/api';

import { MdDelete } from "react-icons/md";


const Exercises = () => {
    const [exercises, setExercises] = useState([])
    const [reload,setReload] = useState(true)

    useEffect(() => {
        getExercises().then(data => setExercises(data))
    }, [reload])


    const handleDelete = (id) =>{
        deleteExercises(id)
        setReload(!reload)
    }
    return (
        <div >
            <div className='m-5' style={{ backgroundColor: '#E5E4E2', borderRadius: '10px' }}>
                <div className='p-3' style={{ flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                        <div className='p-2' style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black', color: '#FFFFFF' }}>
                            <div className='col col-offset-3 '  >
                                username
                            </div>
                            <div className='col col-offset-3'>
                                Description
                            </div>
                            <div className='col col-offset-3'>
                                Duration
                            </div>
                            <div className='col col-offset-3' >
                                Date
                            </div>
                        </div>
                        <div>
                            {exercises.map(ele => <>
                                <div style={{ flex: 1, flexDirection: 'col' }}>
                                    <div className='p-2' style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div className='col col-offset-3 '>
                                            {ele.username}
                                        </div>
                                        <div className='col col-offset-3 '>
                                            {ele.description}
                                        </div>
                                        <div className='col col-offset-3 '>
                                            {ele.duration}
                                        </div>
                                        <div className='col col-offset-3 '>
                                            <div>
                                            {ele.date}
                                            <MdDelete  style={{marginLeft:'30px'}} onClick={()=>{handleDelete(ele._id)}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Exercises