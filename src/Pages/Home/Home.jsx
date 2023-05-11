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
  console.log("render home");
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
            {userActivity.length > 0 && <BarChartComp datas={userActivity} />}
            <div className={styles.chartsContainer}>
              {average !== undefined && <AverageSession average={average} />}
              {userPerformance.length > 0 && (
                <RadarComp datas={userPerformance} kind={kind} />
              )}
              {userScore !== undefined && <PieComp score={userScore} />}
            </div>
          </section>
          <section className={styles.nutrients}>
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
