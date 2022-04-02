import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountriesDetails = () => {
    const {key} = useParams()
    const [country,setCountry] = useState([])

    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/alpha/${key}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[key])
    // console.log(country)
    
    return (
        <div className="">
            <h1>Countries Details:{key}</h1>
            <p>Name:{}</p>
            
        </div>
    );
};

export default CountriesDetails;