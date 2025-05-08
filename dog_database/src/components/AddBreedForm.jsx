import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../datastyles.css";

const AddBreedForm = () => {
    const [DogBreed,setDogBreed] = useState({
        DogBreed:"",
        BreedGroup:"",
        BarkingLevel:"",
        CoatType:"",
        Shedding:"",
        MinWeight:null,
        MaxWeight:null
    });

    const navsubmit = useNavigate()

    const handleChange = (e) =>{
        setDogBreed(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/dogdata", DogBreed)
            navsubmit("/Search")
        }catch(err){
            console.log(err)
        }
    };

    console.log(DogBreed)

    return (
        <div className='breedformsubmit'>
            <input type="text" placeholder='Breed' onChange={handleChange} name="DogBreed" />
            <input type="text" placeholder='Breed Group' onChange={handleChange} name="BreedGroup" />
            <input type="text" placeholder='Barking Level' onChange={handleChange} name="BarkingLevel" />
            <input type="text" placeholder='Coat Type' onChange={handleChange} name="CoatType" />
            <input type="text" placeholder='Shedding Level' onChange={handleChange} name="Shedding" />
            <input type="number" placeholder='Minimum Weight (lbs)' onChange={handleChange} name="MinWeight" />
            <input type="number" placeholder='Maximum Weight (lbs)' onChange={handleChange} name="MaxWeight" />
        <button onClick={handleClick}>Add Breed</button>
        </div>
    )
}

export default AddBreedForm