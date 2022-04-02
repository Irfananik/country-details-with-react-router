import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountriesCard = ({ country }) => {
    const navigate = useNavigate()
    return (
        <div className="className=shadow-lg rounded-2xl  p-4 w-[260px] bg-emerald-200">
            <div>
                <p className="">Name: {country?.name.common}</p>
                <p className="">City: {country?.capital}</p>
            </div>
            <div className="flex justify-center mt-2">
                <img className="w-8" src={country?.flags?.png} alt="" />
            </div>
            <button onClick={() => navigate(`/countriesdetails/${country.cca2}`)}>
                See More...
            </button>
        </div>
    );
};

export default CountriesCard;