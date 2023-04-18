import React, { useEffect, useState, useTransition } from 'react'
import { store } from '../../config'
import { useParams } from 'react-router-dom';
import styles from './Home.module.css'
import BarChartComp from '../../components/BarChart/BarChart';
import AverageSession from '../../components/AverageSession/AverageSession';

const Home = () => {

  const {id} = useParams()

  const [average, setAverage] = useState([])
  const [userDatas, setUserDatas] = useState([])
  const [userInfos, setUserInfos] = useState([])
  const [userScore, setUserScore] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [kind, setKind] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [wait, setWait] = useState([])

  useEffect(() => {
    promiseAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const promiseAll = async () => {
    setWait(true)
    try{
      const [userDatas, averageSession, userActivity, userPerformance] = 
      await Promise.all([
        store.getUserId(id),
        store.getUserAverageSession(id),
        store.getUserActivity(id),
        store.getUserPerformance(id)
      ])
      setUserDatas(userDatas.nutType)
      setUserInfos(userDatas.userInfos)
      setUserScore(userDatas.todayScore)
      setAverage(averageSession)
      setUserActivity(userActivity)
      setUserPerformance(userPerformance)
      setKind(userPerformance.kind)
    } catch (err) {
      console.log(err)
    }finally{
      setWait(false)
    }
  }

  if(wait){
    return <div>loading...</div>
  }
  
  return (

    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue <span className={styles.span}>{userInfos.firstName}</span> </h1>
      <h3 className={styles.subtitle}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h3>
      <section className={styles.chartsContainerGroup}>

      <section className={styles.allCharts}>
      {userActivity.length > 0 && <BarChartComp datas={userActivity} />}
      <div className={styles.chartsContainer}>
      {average !== undefined && <AverageSession average={average} />}
      </div>
      </section>
       <section className={styles.nutrients}>

       </section>

      </section>
    </div>
  )
}

export default Home