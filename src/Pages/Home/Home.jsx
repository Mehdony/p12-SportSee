import { useParams } from "react-router-dom";
import styles from "./Home.module.css";
import BarChartComp from "../../components/BarChart/BarChart";
import AverageSession from "../../components/AverageSession/AverageSession";
import RadarComp from "../../components/RadarChart/RadarChart";
import PieComp from "../../components/PieComp/PieComp";
import Nutrients from "../../components/Nutrients/Nutrients";
import Error from "../../components/Error/Error";
import useHomeData from "../../Services/Hooks/useHomeData";

const Home = () => {
  const { id } = useParams();

  const {
    average,
    userDatas,
    userInfos,
    userScore,
    userActivity,
    kind,
    userPerformance,
    wait,
    error,
  } = useHomeData(id);

  // permet de gérer l'affichage des données en fonction de l'état de la requête

  if (wait) {
    return <div>loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.container}>
      <>
        <h1 className={styles.title}>
          Bienvenue <span className={styles.span}>{userInfos.firstName}</span>{" "}
        </h1>
        <h3 className={styles.subtitle}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </h3>
        <section className={styles.chartsContainerGroup}>
          <section className={styles.allCharts}>
            {/* affichage du graphique des sessions sous forme de barChart */}
            {userActivity.length > 0 && <BarChartComp datas={userActivity} />}
            <div className={styles.chartsContainer}>
              {/* affichage de la moyenne des sessions */}
              {average !== undefined && <AverageSession average={average} />}
              {/* affichage du radar perfs */}
              {userPerformance.length > 0 && (
                <RadarComp datas={userPerformance} kind={kind} />
              )}
              {/* affichage du score */}
              {userScore !== undefined && <PieComp score={userScore} />}
            </div>
          </section>
          <section className={styles.nutrients}>
            {/* affichage des nutriments */}
            {userDatas &&
              Object.entries(userDatas).map(([key, value], index) => (
                <Nutrients key={index} name={key} value={value} index={index} />
              ))}
          </section>
        </section>
      </>
    </div>
  );
};

export default Home;
