import React, { useState } from 'react';


const CreateUsers = () => {
    const [userName, setUserName] = useState('')
    const [age, setage] = useState(0)



    const handlesubmit = () => {

    }
    return (
        <div className='container ' style={{ width: '40%' }}>
            <h3>Create New User </h3>
            <br />
            <form
            // onSubmit={handleSubmit}
            >
                <div className='form-group'>
                    <label>Username : </label>
                    <input type='text'
                        required
                        className='form-control'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Age</label>
                    <input type='text'
                        required
                        className='form-control'
                        value={age}
                        onChange={e => setage(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <button type='submit' className='btn btn-secondary' >Submit</button>
                </div>
            </form>
        </div>
    )
}


export default CreateUsers