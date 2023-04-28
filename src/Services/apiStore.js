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

  getUserId: async (id) => {
    const { data } = await axios.get(baseUrl + id);
    const userData = new UserDataModel(data.data);
    console.log(userData);
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
    console.log(activityData);
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
    console.log(averageData);
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
    console.log(performanceData);
    return performanceData.mappedData;
  },
};

export default ApiStore;
