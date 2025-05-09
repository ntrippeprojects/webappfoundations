import MainLogo from "../Logo2.png";
import "../App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import "../datastyles.css";

function ImageLoad({ imageId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8800/dogimages");
        if (!response.ok) {
          throw new Error(`HTTP error. See status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
      return <p>No data to display.</p>;
  }
    
  const columns = Object.keys(data[0]); 

  return (
    <div>
    <div className="MainFont">
    <h1 className="Title">Image Links</h1>
    <h2 className="FirstSection">Check out pictures of the AKC-listed breeds, provided by AKC.</h2>
    <div className="centertable">
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    </div>
    )
}

export default ImageLoad;