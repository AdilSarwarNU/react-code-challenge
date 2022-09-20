import React from 'react';

let PokeCard = ({ data, index }) => {
    return (
        <div className={` col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 px-1 mt-3 wow bounceInDown animate__animated animate__bounceInUp  `} key={index}  >
            <div className="pokedex-card shadow-lg   mt-4 p-2 pb-3" >
                <img src={data?.image?.url} alt="" />
                <h4 className='text-white' >#00{data?.number}</h4>
                <h4 className='text-white' >{data?.name}</h4>
                {data?.types.map((data, index) => <span className={` badge ${data == "Grass" && "success"} ${data == "Poison" && "pink"} ${data == "Fire" && "orange"} ${data == "Bug" && "dark-green"} ${data == "Water" && "blue"} mx-1 `}>{data}</span>)}
            </div>
        </div>
    )
}

export default PokeCard