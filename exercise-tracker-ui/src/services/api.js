import axios from 'axios';
const baseUrl = 'http://localhost:5000'


export const getExercises = async() =>{
   let results = await axios.get(`${baseUrl}/exercises/`)
   return results?.data
}

export const getUsers = async() =>{
    let results = await axios.get(`${baseUrl}/users/`)
    return results?.data
 }

 export const addExercise = async(body) =>{
    let results = await axios.post(`${baseUrl}/exercises/add`,body)
    console.log(results?.data,"ress");
    return results?.data
 }

 export const deleteExercises = async(id) =>{
   let results = await axios.delete(`${baseUrl}/exercises/${id}`)
   console.log(results?.data,"respp");
   return results?.data
 }

