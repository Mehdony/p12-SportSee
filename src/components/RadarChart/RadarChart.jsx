import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  //   ResponsiveContainer,
} from "recharts";
import styles from "./RadarChart.module.css";

const RadarComp = (props) => {
  console.log("radar", props.datas);
  return (
    <div className={styles.chartContainer}>

    <RadarChart innerRadius={30} outerRadius={90} width={248} height={250} data={props.datas}>
      <PolarGrid gridType="polygon" radialLines={false} tick={{fill:"white"}}/>
      <PolarAngleAxis dataKey="subject" fontSize={12} tick={{fill:"white", fontSize:"12px"}} />
      {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
      <Radar
        name="Mike"
        dataKey="key"
        fill="#ff0101"
        fillOpacity={0.6}
        />
      {/* <Legend /> */}
    </RadarChart>
        </div>
  );
};

export default RadarComp;
