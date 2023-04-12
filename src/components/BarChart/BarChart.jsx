import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./BarChart.module.css";

const BarChartComp = ({ datas }) => (
  <div className={styles.chartContainer}>
    <div>Activité quotidienne</div>
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={datas}
        width="100%"
        margin={{
          top: 5,
          //   right: 30,
          //   left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#DEDEDE"
        />
        <XAxis dataKey="name" tickLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickCount={3}
          orientation="right"
          stroke="#9B9EAC"
          domain={["dataMin - 100", "dataMax + 100"]}
          hide={true}
          yAxisId="calories"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickCount={3}
          orientation="right"
          stroke="#9B9EAC"
          yAxisId="kilogrammes"
          domain={["dataMin - 2", "dataMax + 5"]}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="kilogrammes"
          yAxisId="kilogrammes"
          fill="#282D30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="calories"
          fill="#E60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartComp;
