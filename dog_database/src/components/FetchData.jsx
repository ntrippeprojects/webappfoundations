import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"

const DogData = () => {
    const [dogData,setDogData] = useState([])

useEffect(()=>{
    const fetchAllDogData = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/dogdata")
            setDogData(res.data);
        }catch(err){
            console.log(err)
        }
    };
    fetchAllDogData();
},[]);

return <div>
    <h1 className="FirstSection">Check out the breeds and their characteristics.</h1>
    <button>Don't see a breed listed? Click to add one.</button>
    <div className="dogs">
        {dogData.map(dog=>(
            <div className="dog" key={dog.DogBreed}>
            <h2>{dog.DogBreed}</h2>
            <p>{dog.BreedGroup}</p>
            <p>{dog.BarkingLevel}</p>
            <p>{dog.CoatType}</p>
            <p>{dog.Shedding}</p>
            <p>{dog.MinWeight}</p>
            <p>{dog.MaxWeight}</p>
            </div>
        ))}
    </div>
</div>

}
export default DogData;