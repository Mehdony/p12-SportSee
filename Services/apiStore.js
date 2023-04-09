import axios from "axios";
import UserDataModel from "./Models/userModel";
import AverageModel from "./Models/averageModel";
import ActivityModel from "./Models/activityModel";
import PerformanceModel from "./Models/perfsModel";

const ApiStore = {
  getUserId: async (id) => {
    const { data } = await axios.get(`http://localhost:3000/user/${id}`);
    // on crée une nouvelle instance de la classe UserModel avec les données de mock.json
    const userData = new UserDataModel(data.data);
    console.log(data);
    // on retourne une promesse qui contient les données de l'utilisateur
    return userData;
  },

  getUserActivity: async (id) => {
    const { data } = await axios.get(
      `http://localhost:3000/user/${id}/activity`
    );
    // on crée une nouvelle instance de la classe ActivityModel avec les données de mock.json
    const activityData = new ActivityModel(data.data);
    // on retourne une promesse qui contient les données d'activités de l'utilisateur
    return activityData.mappedData;
  },

  getUserAverageSession: async (id) => {
    const { data } = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    // on crée une nouvelle instance de la classe AverageModel avec les données de mock.json
    const averageData = new AverageModel(data.data);
    // on retourne une promesse qui contient les données de sessions moyennes de l'utilisateur
    return averageData.mappedData;
  },

  getUserPerformance: async (id) => {
    const { data } = await axios.get(
      `http://localhost:3000/user/${id}/performance`
    );
    const performanceData = new PerformanceModel(data.data);
    // on retourne une promesse qui contient les données de performance de l'utilisateur
    return performanceData.mappedData;
  },
};

export default ApiStore;
