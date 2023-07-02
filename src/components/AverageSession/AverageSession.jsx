import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  // Legend,
  Rectangle,
} from "recharts";
import styles from "./AverageSession.module.css";
import PropTypes from 'prop-types';

/**

Composant qui affiche un graphique en ligne avec la durée moyenne des sessions.
@param {Object} props - Les propriétés du composant.
@param {Array} props.average - Tableau d'objets contenant les données du graphique.
@returns {JSX.Element} - Le composant graphique en ligne.
*/

const AverageSession = (props) => {

  // creation d'un composant pour le point du graphique
  const CustomDot = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        stroke="rgb(255, 255, 255, 0.2)"
        strokeWidth={15}
        fill="white"
      />
    );
  };


// creation d'un composant pour le curseur du graphique
  const CustomCursor = (props) => {
    const { points } = props;
    const { x, y } = points[0];
    return (
      <Rectangle
        fill="black"
        fillOpacity={0.1}
        x={x}
        y={y - 100}
        width={400}
        height={400}
      />
    );
  };

  const renderLineChart = (
    <div className={styles.chartContainer}>
      <p className={styles.averageTitle}>Durée moyenne des sessions</p>
 
      <LineChart
        width={258}
        height={263}
        data={props.average}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* création du dégradé de la ligne  */}
        <defs>
          <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
            <stop offset="10%" stopColor="#ffffff" stopOpacity={0.8} />
            <stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
            <stop offset="30%" stopColor="#ffffff" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        {/* grille désactivée */}
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="name"
          stroke="white"
          tickLine={false}
          tick={{ fill: "white", opacity: 0.5 }}
          tickMargin={20}
          height={50}
          axisLine={false}
        />
        {/* création du tooltip */}
        <Tooltip
          cursor={<CustomCursor />}
          stroke="black"
          labelFormatter={() => ``}
          formatter={(value) => [value + " min"]}
          color="black"
          wrapperStyle={{
            outline: "none",
            fontSize: "8px",
            height: "24px",
            alignContent: "center",
            fontWeight: "bold",
          }}
          position="top"
        />
        {/* création de la ligne et utilisation du dégradé dans stroke */}
        <Line
          dot={false}
          activeDot={<CustomDot />}
          type="basis"
          dataKey="duration"
          strokeWidth={2.5}
          opacity={0.85}
          stroke="url(#colorUv)"
        />
      </LineChart>
    </div>
  );
  return <div>{renderLineChart}</div>;
};


AverageSession.propTypes = {
  average: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  })).isRequired,
};


export default AverageSession;
