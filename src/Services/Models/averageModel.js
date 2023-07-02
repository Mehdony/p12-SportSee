/**
 * Represents a data model for the chart of an average of sessions.
 * @constructor
 * @param {Object} data - The data to be mapped for the chart.
 */

export default class AverageModel {
  constructor(data) {
    this.days = ["L", "M", "M", "J", "V", "S", "D"];
    // permet de mapper les données de l'API ou du mock pour les utiliser dans le graphique après les avoir transformées
    this.mappedData = data.sessions.map((item, index) => {
      return {
        name: this.days[index],
        duration: item.sessionLength,
        amt: 4400,
      };
    });
  }
}
