import React, { useEffect, useState, useTransition } from 'react'
import { store } from '../../config'
import { useParams } from 'react-router-dom';

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
    <div>heo</div>
  )
}

export default Home