import React, { useEffect, useState } from 'react';
import CountriesCard from '../CountriesCard/CountriesCard';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [countries])
    return (
        <div>
            <div className="py-4 px-4 text-white mt-10 rounded-full bg-cyan-600 w-full ">
                <p className="text-xl">Available countries: {countries.length}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center mt-10">
                {
                    countries.map(country => <CountriesCard key={country.cca2} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;