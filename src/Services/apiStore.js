import axios from "axios";
import UserDataModel from "./Models/userModel";
import AverageModel from "./Models/averageModel";
import ActivityModel from "./Models/activityModel";
import PerformanceModel from "./Models/perfsModel";

const ApiStore = {
  getUserId: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}`);
    const userData = new UserDataModel(data.data)
    console.log(userData)
    return userData
  },
  getUserActivity: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/activity`);
    const activityData = new ActivityModel(data.data)
    return activityData.mappedData
  },
  getUserAverageSession: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    const averageData = new AverageModel(data.data)
    return averageData.mappedData
  },
  getUserPerformance: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}/performance`);
    const performanceData = new PerformanceModel(data.data)
    return performanceData.mappedData
  },
};

export default ApiStore;
