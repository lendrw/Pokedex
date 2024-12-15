import PropTypes from 'prop-types';
import React from 'react';
import styles from './PrevAndNext.module.css';
import arrow from '../../public/assets/icons/arrow.svg';

const PrevAndNext = ({ onPrev, onNext }) => {
  return (
    <div>
        <button className={styles.button} onClick={onPrev}>
            <img src={arrow} alt="previous"/>
        </button>
        <button className={`${styles.button} ${styles.rotate}`} onClick={onNext}>
          <img src={arrow} alt="next"/>
        </button>
    </div>
  )
};

PrevAndNext.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default PrevAndNext;