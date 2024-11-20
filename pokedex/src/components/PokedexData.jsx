import React from 'react'

const PokedexData = ({name, number, image}) => {
  return (
    <div className='pokemon-card'>
        <img className='pokemon_image' src={image} alt={name} />
        <h1 className='pokemon_name'>{number} - {name}</h1>
    </div>
  )
}

export default PokedexData;