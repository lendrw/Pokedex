import PropTypes from 'prop-types'; 
import styles from './PokedexData.module.css';
import arrow from '../assets/icons/arrow.svg';
import search from '../assets/icons/search.svg';
import { useState } from 'react';

import normal from '../assets/pokemon_types/1.png'
import grass from '../assets/pokemon_types/12.png';
import ice from '../assets/pokemon_types/15.png';
import water from '../assets/pokemon_types/11.png'
import fighting from '../assets/pokemon_types/2.png';
import electric from '../assets/pokemon_types/13.png'
import poison from '../assets/pokemon_types/4.png';
import ground from '../assets/pokemon_types/5.png';
import flying from '../assets/pokemon_types/3.png';
import psychic from '../assets/pokemon_types/14.png';
import bug from '../assets/pokemon_types/7.png';
import rock from '../assets/pokemon_types/6.png';
import ghost from '../assets/pokemon_types/8.png';
import dragon from '../assets/pokemon_types/16.png';
import dark from '../assets/pokemon_types/17.png';
import steel from '../assets/pokemon_types/9.png';
import fairy from '../assets/pokemon_types/18.png';
import fire from '../assets/pokemon_types/10.png'

const PokedexData = ({ 
  name, 
  number, 
  sprite, 
  types, 
  cry, 
  description, 
  height, 
  weight,
  onPrev,
  onNext,
  onSearch
}) => {

  const playCry = () => {
    const audio = new Audio(cry);
    audio.play().catch((error) => {
      console.error("Error:", error);
    });
  };

  const typeImages = {
    normal,
    fire,
    water,
    electric,
    grass,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dragon,
    dark,
    steel,
    fairy,
  };

  const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(inputValue.toLowerCase());
      setInputValue('');
    };

  return (
    <div className={styles.pokemon_card}>

      <div className={styles.section}> 
        <div className={styles.pokemon_sprite}>
          {typeof sprite === 'string' ? <img src={sprite} alt={name} /> : sprite}
          <button 
              className={`${styles.cry}`} 
              onClick={playCry}>
                Cry
            </button>
        </div>

        <div className={styles.subsection}>
          <div className={`${styles.red_container}`}>
            <p className={styles.pokemon_name}>{number} {name}</p>
            
          </div>
            
            <div className={`${styles.pokemon_types} ${styles.white_container}`}>
              {types && types.map((type) => (
                <img 
                  key={type} 
                  src={typeImages[type]} 
                  alt={type}  
                />
              ))}
            </div>
            
          <div className={styles.height_and_weight}>
          <p>Height: {(height / 10).toFixed(1)}m <br /> 
              Weight: {(weight / 10).toFixed(1)}kg</p>
          </div>
        </div>

        
      </div>
      
      <div className={`${styles.description} ${styles.blue_container}`}>
        <p>{description}</p>
      </div>

      <form 
            className={styles.form} 
            onSubmit={handleSubmit}>
              
              <button 
                className={`button ${styles.prev_button}`} 
                onClick={onPrev}>
                <img src={arrow} alt="previous"/>
              </button>

              <button 
                className={`button ${styles.next_button} ${styles.rotate}`} 
                onClick={onNext}>
                <img src={arrow} alt="next"/>
              </button>

            <input
              type="text"
              className={styles.input_search}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="name or number"
            />
            <button 
              type="submit"
              className='button'
              disabled={!inputValue.trim()}>
              <img src={search} alt="magnifying glass" />
            </button>
        </form>
    </div>
  );
};

PokedexData.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  sprite: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  cry: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default PokedexData;
