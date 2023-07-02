/**
 * Creates a new instance of UserDataModel.
 * @constructor
 * @param {Object} data - The data object.
 * @param {string} data.id - The user ID.
 * @param {Object} data.userInfos - The user informations.
 * @param {number} data.score|data.todayScore - The user score.
 * @param {Object} data.keyData - The user key data.
 */

export default class UserDataModel {
  constructor(data) {
    // récupéation de l'id de l'utilisateur
    this.userId = data.id;
    // récupération des informations de l'utilisateur
    this.userInfos = data.userInfos;
    // récupération du score de l'utilisateur
    if (data.score) {
      this.todayScore = data.score;
    } else if (data.todayScore) {
      this.todayScore = data.todayScore;
    }
    // récupération des données clés de l'utilisateur ( nutriments non triés)
    this.keyData = data.keyData;
    // récupération des données clés de l'utilisateur ( nutriments triés)
    this.nutType = this.cases([this.keyData.name].nutType);
  }

  cases() {
    return {
      calorieCount: {
        nutType: "Calories",
        styling: "calorie",
        count: this.keyData.calorieCount,
        unit: "kCal",
      },
      proteinCount: {
        nutType: "Protéines",
        styling: "protein",
        count: this.keyData.proteinCount,
        unit: "g",
      },
      carbohydrateCount: {
        nutType: "Glucides",
        styling: "carbohydrate",
        count: this.keyData.carbohydrateCount,
        unit: "g",
      },
      lipidCount: {
        nutType: "Lipides",
        styling: "lipid",
        count: this.keyData.lipidCount,
        unit: "g",
      },
    };
  }
}
