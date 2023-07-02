import React from "react";
import styles from "./Nutrients.module.css";
import PropTypes from 'prop-types';

/**
A component for displaying nutrient information.
@param {Object} props - The props object.
@param {string} props.name - The name of the nutrient.
@param {Object} props.value - The nutrient value object.
@param {number} props.value.count - The nutrient count value.
@param {string} props.value.unit - The unit of the nutrient count value.
@param {string} props.value.nutType - The type of nutrient.
@returns {JSX.Element} - A React component that displays nutrient information.
*/

function Nutrients(props) {
  return (
    <div className={styles.nutrientContainer}>
      <div className={`${styles.iconContainer} ${styles[props.value.styling]}`}>
        {/* logo du nitriment */}
        <img src={`/assets/nutrients/${props.name}.svg`} alt="" />
      </div>
      <div className={styles.nutrientInfo}>
        <p className={styles.nutrientValue}>
          {/* valeur du nutriments */}
          {props.value.count.toLocaleString('en-US')}
          {/* unité du nutriment */}
          {props.value.unit}
        </p>
        {/* nom du nutriment */}
        <p className={styles.nutrientName}>{props.value.nutType}</p>
      </div>
    </div>
  )
}

Nutrients.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({
    count: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    nutType: PropTypes.string.isRequired,
    styling: PropTypes.string,
  }).isRequired,
};


export default Nutrients;
