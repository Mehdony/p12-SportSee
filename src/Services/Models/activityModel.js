/**
 * Creates a new ActivityModel.
 * @param {Object} data - The data object containing session information.
 */

export default class ActivityModel {
  constructor(data) {
    this.mappedData = data.sessions.map((item, index) => {
      return {
        name: index + 1,
        kilogrammes: item.kilogram,
        calories: item.calories,
      };
    });
  }
}
