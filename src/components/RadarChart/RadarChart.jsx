import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  //   ResponsiveContainer,
} from "recharts";
import styles from "./RadarChart.module.css";
import PropTypes from 'prop-types';

/**
A Radar Chart component that displays the data passed in through props.
@param {object} props - The props object containing the data to display.
@param {array} props.datas - An array of objects representing the data to display on the chart.
@returns {JSX.Element} - A JSX element containing the Radar Chart component.
*/

const RadarComp = (props) => {
  console.log("radar", props.datas);
  return (
    <div className={styles.chartContainer}>

    <RadarChart innerRadius={30} outerRadius={90} width={248} height={250} data={props.datas}>
      <PolarGrid gridType="polygon" radialLines={false} tick={{fill:"white"}}/>
      <PolarAngleAxis dataKey="subject" fontSize={12} tick={{fill:"white", fontSize:"12px"}} />
      <Radar
        name=""
        dataKey="key"
        fill="#ff0101"
        fillOpacity={0.6}
        />
    </RadarChart>
        </div>
  );
};

RadarComp.propTypes = {
  datas: PropTypes.arrayOf(
  PropTypes.shape({
  key: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  })
  ).isRequired,
  };

export default RadarComp;
