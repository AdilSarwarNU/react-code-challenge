import React, { useEffect, useState } from 'react';
import pokeApi from '../../api/pokeApi';
import data from '../../data/pokemon.json';
import PokeCard from '../cards/PokeCard';
import ApiError from '../errors/ApiError';
import ApiLoader from '../loaders/ApiLoader';
let PoleList = () => {
    let [apiLoader, setApiLoader] = useState(true)
    let [error, setError] = useState(true)
    useEffect(() => {
        let result = pokeApi();
        setTimeout(() => {
            var random_boolean = Math.random() < 0.5;
            setError(random_boolean)
            setApiLoader(false)
        }, 2000);
    }, [])


    return (
        <>

            {apiLoader ? <ApiLoader /> : (
                <>
                    {!error ? <ApiError /> : (
                        <div className="container-fluid">
                            <div className="row px-3 ">
                                {data?.entries.map((data, index) => <PokeCard data={data} index={index} key={index} />)}
                            </div>
                        </div >
                    )}
                </>

            )}

        </>

    )
}

export default PoleList