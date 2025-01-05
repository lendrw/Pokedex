import PropTypes from 'prop-types'; 
import styles from './PokedexData.module.css';
import arrow from '../assets/icons/arrow.svg';

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
  onNext 
}) => {

  const playCry = () => {
    const audio = new Audio(cry);
    audio.play().catch((error) => {
      console.error("Erro ao reproduzir o áudio:", error);
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

  return (
    <div className={styles.pokemon_card}>
      <div className={styles.pokemon_sprite}>
        {typeof sprite === 'string' ? <img src={sprite} alt={name} /> : sprite}
      </div>

      <div className={`${styles.items_container} ${styles.blue_container}`}>
        <p className={styles.pokemon_name}>{number} {name}</p>
        <div className={styles.prevnext_container}>
          <button 
            className="button" 
            onClick={onPrev}>
            <img src={arrow} alt="previous"/>
          </button>

          <button 
            className={`button ${styles.rotate}`} 
            onClick={onNext}>
            <img src={arrow} alt="next"/>
          </button>
        </div>
      </div>

      <div className={`${styles.items_container} ${styles.white_container}`}>
        <button 
          className={styles.cry} 
          onClick={playCry}>
            Cry
        </button>
        
        <div className={styles.pokemon_types}>
          {types && types.map((type) => (
            <img 
              key={type} 
              src={typeImages[type]} 
              alt={type}  
            />
          ))}
        </div>
      </div>

      <div className={styles.height_and_weight}>
        <p>Height: {(height / 10).toFixed(1)}m Weight: {(weight / 10).toFixed(1)}kg</p>
      </div>
      
      <div className={`${styles.description} ${styles.red_container}`}>
        <p>{description}</p>
      </div>
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
};

export default PokedexData;
