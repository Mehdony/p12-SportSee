import mockData from "./mock.json";
import UserDataModel from "./Models/userModel";
import AverageModel from "./Models/averageModel";
import ActivityModel from "./Models/activityModel";
import PerformanceModel from "./Models/perfsModel";

/**

MockStore object containing methods to retrieve user data, activity data, average session data, and performance data.
@typedef {Object} MockStore
@property {Function} getUserId - Asynchronous method to retrieve user data.
@property {Function} getUserActivity - Asynchronous method to retrieve user activity data.
@property {Function} getUserAverageSession - Asynchronous method to retrieve user average session data.
@property {Function} getUserPerformance - Asynchronous method to retrieve user performance data.
*/

const MockStore = {
  // methode permettant de récupérer les données de l'utilisateur
  getUserId: async () => {
    // on crée une nouvelle instance de la classe UserModel avec les données de mock.json
    const userData = new UserDataModel(mockData.data);
    console.log(userData)
    // on retourne une promesse qui contient les données de l'utilisateur
    return Promise.resolve(userData);
  },

  // methode permettant de récupérer les données d'activités l'utilisateur
  getUserActivity: async () => {
    // on crée une nouvelle instance de la classe ActivityModel avec les données de mock.json
    const activityData = new ActivityModel(mockData.activity);
    console.log(activityData)
    // on retourne une promesse qui contient les données d'activités de l'utilisateur
    return Promise.resolve(activityData.mappedData);
  },

  // methode permettant de récupérer les données de sessions moyennes de l'utilisateur
  getUserAverageSession: async () => {
    // on crée une nouvelle instance de la classe AverageModel avec les données de mock.json
    const averageData = new AverageModel(mockData.averageSessions);
    // on retourne une promesse qui contient les données de sessions moyennes de l'utilisateur
    return Promise.resolve(averageData.mappedData);
  },

  // methode permettant de récupérer les données de performance de l'utilisateur
  getUserPerformance: async () => {
    // on crée une nouvelle instance de la classe PerformanceModel avec les données de mock.json
    const performanceData = new PerformanceModel(mockData.performance);
    // on retourne une promesse qui contient les données de performance de l'utilisateur
    return Promise.resolve(performanceData.mappedData);
  },
};
export default MockStore;
