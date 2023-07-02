import axios from "axios";
import UserDataModel from "./Models/userModel";
import AverageModel from "./Models/averageModel";
import ActivityModel from "./Models/activityModel";
import PerformanceModel from "./Models/perfsModel";

const baseUrl = "http://localhost:3000/user/";

const ApiStore = {

/**
 * Retrieves user data for a given ID.
 * @async
 * @function getUserId
 * @param {number} id - The ID of the user to retrieve.
 * @returns {Promise<UserDataModel>} A promise containing a UserDataModel object representing the user data.
 */

  // on crée une fonction asynchrone qui va récupérer les données de l'utilisateur
  getUserId: async (id) => {
    // on fait une requête axios pour récupérer les données de l'utilisateur
    const { data } = await axios.get(baseUrl + id);
    // on modélise les données récupérées
    const userData = new UserDataModel(data.data);
    // on retourne les données modélisées
    return userData;
  },

  /**
 * Retrieves user activity data for a given ID.
 * @async
 * @function getUserActivity
 * @param {number} id - The ID of the user to retrieve activity data for.
 * @returns {Promise<ActivityData[]>} A promise containing an array of ActivityData objects representing the user's activity data.
 */

  getUserActivity: async (id) => {
    const { data } = await axios.get(baseUrl + id + "/activity");
    const activityData = new ActivityModel(data.data);
    return activityData.mappedData;
  },

  /**
 * Retrieves user average session data for a given ID.
 * @async
 * @function getUserAverageSession
 * @param {number} id - The ID of the user to retrieve average session data for.
 * @returns {Promise<AverageData[]>} A promise containing an array of AverageData objects representing the user's average session data.
 */

  getUserAverageSession: async (id) => {
    const { data } = await axios.get(baseUrl + id + "/average-sessions");
    const averageData = new AverageModel(data.data);
    return averageData.mappedData;
  },

/**
 * Retrieves user performance data for a given ID.
 * @async
 * @function getUserPerformance
 * @param {number} id - The ID of the user to retrieve performance data for.
 * @returns {Promise<PerformanceData[]>} A promise containing an array of PerformanceData objects representing the user's performance data.
 */

  getUserPerformance: async (id) => {
    const { data } = await axios.get(baseUrl + id + "/performance");
    const performanceData = new PerformanceModel(data.data);
    return performanceData.mappedData;
  },
};

export default ApiStore;
