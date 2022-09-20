import React, { useEffect, useState } from 'react';
import pokeApi from '../../api/pokeApi';
import PokemonCard from '../cards/PokemonCard';
import Error from '../errors/Error';
import ApiLoader from '../loaders/Loader';

let PokemonList = () => {
    let [apiLoader, setApiLoader] = useState(true)
    let [error, setError] = useState(false)
    let [data, setData] = useState(null)

    useEffect(() => {
        // simulation of loading
        setTimeout(() => {
            let result = pokeApi();
            var randomBooleanError = Math.random() < 0.5;
            if (randomBooleanError)
                setError(randomBooleanError)
            else
                setData(result);
            setApiLoader(false);
            console.log(data);
        }, 2000);
    });

    return (
        <>
            { apiLoader ? <ApiLoader /> : (
                <>
                    {!error ? <Error /> : (
                        <div className="container-fluid">
                            <div className="row px-3 ">
                                { data?.entries.map((entry, index) => <PokemonCard data={entry} index={index} key={index} />)}
                            </div>
                        </div >
                    )}
                </>
            )}
        </>

    )
}

export default PokemonList