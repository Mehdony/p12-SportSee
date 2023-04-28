/**
 * Represents a data model for the chart of perfomance model.
 * @constructor
 * @param {Object} data - The data to be mapped for the chart.
 */

export default class PerfsModel {
  constructor(data) {
    this.mappedData = data.data
      .map((item, index) => {
        return {
          subject: this.translate(data.kind[index + 1]),
          key: item.value,
          fullMark: 150,
        };
      })
      .reverse();
  }
  translate = (kind) => {
    switch (kind) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Energie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        return "Vitesse";
    }
  };
}
