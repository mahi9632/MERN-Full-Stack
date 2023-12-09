import React, { useEffect, useState } from 'react';
import { addUsers } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CreateUsers = () => {
    const [userName, setUserName] = useState('')
    const [age, setage] = useState()
    const [userAdded,setUserAdded] = useState(false)

    const handleSubmit = async(e) => {
        let exercise = {
            username: userName,
            age:age
        }
        return addUsers(exercise)
                .then(data=> data && setUserAdded(true))
                .catch(err=>console.log(err))
        
    }

    useEffect(()=>{
        console.log({userAdded});
        userAdded &&  toast("User Added!", {
            position: toast.POSITION.TOP_CENTER,
            className: 'foo-bar'
          });
    },[userAdded])

    return (
        <div className='container ' style={{ width: '40%' }}>
            {userAdded && < ToastContainer/>}
            <h3>Create New User </h3>
            <br />
            <form
            onSubmit={(e)=>handleSubmit(e)}
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