import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import "../datastyles.css";

const UpdateForm = () => {
    const [DogBreed,setDogBreed] = useState({
        DogBreed:"",
        BreedGroup:"",
        BarkingLevel:"",
        CoatType:"",
        Shedding:"",
        MinWeight:null,
        MaxWeight:null
    });

    const navsubmit = useNavigate();
    const location = useLocation();

    const DogBreedId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setDogBreed(prev=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/dogdata"+DogBreed)
            navsubmit("/Search")
        }catch(err){
            console.log(err)
        }
    };

    console.log(DogBreed)

    return (
        <div className='breedformsubmit'>
            <input className="inputstyle" type="text" placeholder='Breed' onChange={handleChange} name="DogBreed" />
            <input className="inputstyle" type="text" placeholder='Breed Group' onChange={handleChange} name="BreedGroup" />
            <input className="inputstyle" type="text" placeholder='Barking Level' onChange={handleChange} name="BarkingLevel" />
            <input className="inputstyle" type="text" placeholder='Coat Type' onChange={handleChange} name="CoatType" />
            <input className="inputstyle" type="text" placeholder='Shedding Level' onChange={handleChange} name="Shedding" />
            <input className="inputstyle" type="number" placeholder='Minimum Weight (lbs)' onChange={handleChange} name="MinWeight" />
            <input className="inputstyle" type="number" placeholder='Maximum Weight (lbs)' onChange={handleChange} name="MaxWeight" />
        <button className="addbutton" onClick={handleClick}>Update Breed</button>
        </div>
    )
}

export default UpdateForm