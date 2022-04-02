import React from 'react';

const CountriesCard = ({ country }) => {
    return (
        <div className="className=shadow-lg rounded-2xl  p-4 w-[260px] bg-emerald-200">
            <p>Name: {country?.name.common}</p>
            <img className="w-6" src={ country?.flags?.png} alt="" />
        </div>
    );
};

export default CountriesCard;