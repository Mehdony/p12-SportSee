// useHomeData.js
import { useState, useEffect } from 'react';
import { store } from '../../config';

const useHomeData = (id) => {
  const [average, setAverage] = useState([]);
  const [userDatas, setUserDatas] = useState([]);
  const [userInfos, setUserInfos] = useState([]);
  const [userScore, setUserScore] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [kind, setKind] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [wait, setWait] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const promiseAll = async () => {
      setWait(true);
      try {
        const [userDatas, averageSession, userActivity, userPerformance] =
          await Promise.all([
            store.getUserId(id),
            store.getUserAverageSession(id),
            store.getUserActivity(id),
            store.getUserPerformance(id),
          ]);
        setUserDatas(userDatas.nutType);
        setUserInfos(userDatas.userInfos);
        setUserScore(userDatas.todayScore);
        setAverage(averageSession);
        setUserActivity(userActivity);
        setUserPerformance(userPerformance);
        setKind(userPerformance.kind);
      } catch (err) {
        setError(err);
      } finally {
        setWait(false);
      }
    };
    promiseAll();
  }, [id]);

  return {
    average,
    userDatas,
    userInfos,
    userScore,
    userActivity,
    kind,
    userPerformance,
    wait,
    error
  };
};

export default useHomeData;