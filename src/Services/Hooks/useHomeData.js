// useHomeData.js
import { useState, useEffect } from 'react';
import { store } from '../../config';

const useHomeData = (id) => {
  // on initialise nos states
  const [average, setAverage] = useState([]);
  const [userDatas, setUserDatas] = useState([]);
  const [userInfos, setUserInfos] = useState([]);
  const [userScore, setUserScore] = useState();
  const [userActivity, setUserActivity] = useState([]);
  const [kind, setKind] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [wait, setWait] = useState(false);
  const [error, setError] = useState(null);

  // lance  le useEffect au chargement de la page / component
  useEffect(() => {
    const promiseAll = async () => {
      // on passe le state wait à true pour dire que la requête est en cours
      setWait(true);
      try {
        // on stock le resultat de nos 4 requêtes dans des constantes
        const [userDatas, averageSession, userActivity, userPerformance] =
          await Promise.all([
            store.getUserId(id),
            store.getUserAverageSession(id),
            store.getUserActivity(id),
            store.getUserPerformance(id),
          ]);
        // on prend nos 4 constantes et on les dispatch dans des states pour les trier 
        setUserDatas(userDatas.nutType);
        setUserInfos(userDatas.userInfos);
        setUserScore(userDatas.todayScore);
        setAverage(averageSession);
        setUserActivity(userActivity);
        setUserPerformance(userPerformance);
        setKind(userPerformance.kind);
      } catch (err) {
        //  si il y a une erreur on la stock dans un state
        setError(err);
      } finally {
        // on passe le state wait à false pour dire que la requête est terminée
        setWait(false);
      }
    };
    // on appelle notre fonction promiseAll
    promiseAll();
    // on passe en dépendance l'id pour que le useEffect se relance à chaque changement d'id
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