import React from 'react';
import styles from './PokedexData.module.css'

const PokedexData = ({ name, number, sprite, types, cry }) => {

  const playCry = () => {
    const audio = new Audio(cry);
    audio.play().catch((error) => {
      console.error("Erro ao reproduzir o áudio:", error);
    });
  };

  const typeImages = {
    normal: "assets/1.png",
    fire: "assets/10.png",
    water: "assets/11.png",
    electric: "assets/13.png",
    grass: "/assets/12.png",
    ice: "assets/15.png",
    fighting: "assets/2.png",
    poison: "/assets/4.png",
    ground: "assets/5.png",
    flying: "assets/3.png",
    psychic: "assets/14.png",
    bug: "assets/7.png",
    rock: "assets/6.png",
    ghost: "assets/8.png",
    dragon: "assets/16.png",
    dark: "assets/17.png",
    steel: "assets/9.png",
    fairy: "assets/18.png",
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
    </div>
  )
}

export default PokedexData;