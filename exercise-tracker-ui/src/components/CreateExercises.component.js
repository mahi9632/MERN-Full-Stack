import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CreateExercises = () => {

    const [userName, setUserName] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [usernameist, setUserNameList] = useState([{ username: "user1" }, { username: "user2" }])



    const handleUsername = (e) => {
        console.log(e.target.value);
        setUserName(e.target.value)
    }


    return (
        <div className='container ' style={{ width: '40%' }}>
            <h3>Create New Exercise Log</h3>
            <br />
            <form
            // onSubmit={handleSubmit}
            >
                <div className='form-group'>
                    <label>Username : </label>
                    <select
                        required
                        className='form-control'
                        value={userName}
                        onChange={(e) => handleUsername(e)}
                    >
                        {usernameist.map((ele) => {
                            // console.log(ele);
                            return <option
                                key={ele.username}
                                value={ele.username}>
                                {ele.username}
                            </option>
                        })
                        }
                    </select>
                </div>

                <div>
                    <label>Description</label>
                    <input type='text'
                        required
                        className='form-control'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Duration (in minutes) : </label>
                    <input type='text'
                        required
                        className='form-control'
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                    />
                </div>

                <div>
                    <label>Date : </label>
                    <div style={{ width: "100px" }}>
                        <DatePicker selected={date} onChange={(date) => setDate(date)} />
                    </div>
                </div>
                <br />
                <div>
                    <button type='submit' className='btn btn-secondary' >Submit</button>
                </div>
            </form>
        </div>
    )
}


export default CreateExercises