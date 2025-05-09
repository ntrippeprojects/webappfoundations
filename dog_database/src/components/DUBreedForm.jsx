import React, { useState } from 'react';
import axios from 'axios';
import "../datastyles.css";

const DUBreedForm = () => {
  const [DogBreed, setDogBreed] = useState('');

  const handleChange = (e) =>{
    setDogBreed(prev=>({...prev, [e.target.name]: e.target.value }));
};

  const handleDelete = async (e) => {
    try {
      const response = await axios.delete("http://localhost:8800/dogdata/"+DogBreed);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

return (
    <div className='breedformsubmit'>
    <input className="inputstyle" type="text" placeholder='Breed' onChange={handleChange} name="DogBreed" />
    <button className="addbutton" onClick={()=>handleDelete(DogBreed)}>Delete Breed</button>
    </div>
    
)

}

export default DUBreedForm;