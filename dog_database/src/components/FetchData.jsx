import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DogData = () => {
    const [dogData,setDogData] = useState([])

useEffect(()=>{
    const fetchAllDogData = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/dogdata")
        }catch(err){
            console.log(err)
        }
    }
    fetchAllDogData()
},[])

return (
    <div>Dogs</div>
)
}

export default DogData;