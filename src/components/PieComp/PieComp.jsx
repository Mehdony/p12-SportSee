import React from "react";
import { Pie, PieChart, Legend, ResponsiveContainer } from "recharts";
import styles from "./PieComp.module.css";
import PropTypes from "prop-types";

/**
A PieChart component that displays a score as a percentage.
@param {Object} props - Component props.
@param {number} props.score - The score to display as a percentage.
@returns {JSX.Element} - The PieChart component.
*/


function PieComp(props) {
  const data = [
    // création du restat de la valeur du score ex: 100 - 80 = 20
    {
      name: "score",
      fill: "#fff",
      value: 100 - props.score * 100,
      pv: 10,
      full: 200,
    },
    // création de la valeur du score ex: 80%
    {
      name: "score",
      fill: "#ff0101",
      value: props.score * 100,
      pv: 10,
      full: 0,
    },
  ];

  // affichage du texte score
  const lengendText = () => {
    return (
      <div
        style={{
          color: "black",
          marginTop: "20px",
          marginLeft: "20px",
          fontWeight: "bold",
          opacity: "1",
          position: "relative",
        }}
      >
        Score
      </div>
    );
  };

  // affichage du score
  const renderLabel = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <text x="106" y="125">
          <tspan className={styles.rateScoreText}>{props.score * 100}%</tspan>
        </text>
        <text x="100" y="150">
          <tspan className={styles.sub}>de votre</tspan>
        </text>
        <text x="101" y="175">
          <tspan className={styles.sub}>objectif</tspan>
        </text>
      </svg>
    );
  };

  return (
    <div className={styles.chartContainer}>
        {/* resposive */}
        <ResponsiveContainer width="100%" height="100%">
      <PieChart >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={90}
          paddingAngle={0}
          cornerRadius={10}
          startAngle={90}
          endAngle={450}
          stroke="none"
          labelLine={false}
        />
        <Pie
          data={data}
          dataKey="full"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={80}
          paddingAngle={0}
          stroke="none"
          label={renderLabel}
          labelLine={false}
        />
        <Legend verticalAlign="top" align="left" content={lengendText} />
      </PieChart>
        </ResponsiveContainer>
    </div>
  );
}

PieComp.propTypes = {
  score: PropTypes.number.isRequired,
  };

export default PieComp;
