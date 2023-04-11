import axios from "axios";
import UserDataModel from "./Models/userModel";
import AverageModel from "./Models/averageModel";
import ActivityModel from "./Models/activityModel";
import PerformanceModel from "./Models/perfsModel";

const baseUrl = "http://localhost:3000/user/";

const ApiStore = {
  getUserId: async (id) => {
    const { data } = await axios.get(baseUrl + id);
    const userData = new UserDataModel(data.data);
    console.log(userData);
    return userData;
  },
  getUserActivity: async (id) => {
    const { data } = await axios.get(baseUrl + id + "/activity");
    const activityData = new ActivityModel(data.data);
    console.log(activityData);
    return activityData.mappedData;
  },
  getUserAverageSession: async (id) => {
    const { data } = await axios.get(baseUrl + id + "/average-sessions");
    const averageData = new AverageModel(data.data);
    console.log(averageData);
    return averageData.mappedData;
  },
  getUserPerformance: async (id) => {
    const { data } = await axios.get(baseUrl + id + "/performance");
    const performanceData = new PerformanceModel(data.data);
    console.log(performanceData);
    return performanceData.mappedData;
  },
};

export default ApiStore;
