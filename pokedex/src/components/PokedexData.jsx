import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './PokedexData.module.css';

const PokedexData = ({ 
  name, 
  number, 
  sprite, 
  types, 
  cry, 
  description, 
  height, 
  weight 
}) => {

  const playCry = () => {
    const audio = new Audio(cry);
    audio.play().catch((error) => {
      console.error("Erro ao reproduzir o áudio:", error);
    });
  };

  const typeImages = {
    normal: "assets/pokemon_types/1.png",
    fire: "assets/pokemon_types/10.png",
    water: "assets/pokemon_types/11.png",
    electric: "assets/pokemon_types/13.png",
    grass: "/assets/pokemon_types/12.png",
    ice: "assets/pokemon_types/15.png",
    fighting: "assets/pokemon_types/2.png",
    poison: "/assets/pokemon_types/4.png",
    ground: "assets/pokemon_types/5.png",
    flying: "assets/pokemon_types/3.png",
    psychic: "assets/pokemon_types/14.png",
    bug: "assets/pokemon_types/7.png",
    rock: "assets/pokemon_types/6.png",
    ghost: "assets/pokemon_types/8.png",
    dragon: "assets/pokemon_types/16.png",
    dark: "assets/pokemon_types/17.png",
    steel: "assets/pokemon_types/9.png",
    fairy: "assets/pokemon_types/18.png",
  };

  return (
    <div className='pokemon-card'>
        <img className={styles.pokemon_sprite} src={sprite} alt={name} />
        <h1 className='pokemon_name'>{number} - {name}</h1>
        <div className='pokemon_types'>
          {types && types.map((type) => (
            <img 
              key={type} 
              src={typeImages[type]} 
              alt={type} 
              className='pokemon_type_image' 
            />
          ))}
        </div>
        
        <button onClick={playCry}>Cry</button>
        
        <p>Height: {(height / 10).toFixed(1)}m Weight: {(weight / 10).toFixed(1)}kg</p>
        
        <h1>{description}</h1>
    </div>
  );
};

PokedexData.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  sprite: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  cry: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
};

export default PokedexData;
