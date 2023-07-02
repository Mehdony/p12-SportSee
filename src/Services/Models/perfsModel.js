/**
 * Represents a data model for the chart of perfomance model.
 * @constructor
 * @param {Object} data - The data to be mapped for the chart.
 */

export default class PerfsModel {
  constructor(data) {
    //  récupération du tableau de données des performances
    this.mappedData = data.data
    // pour chaque item du tableau de données, on récupère le type de performance et la valeur
      .map((item, index) => {
        return {
          // on utlise notre methode de classe (fonction) translate pour traduire le type de performance
          subject: this.translate(data.kind[index + 1]),
          // récupération de la valeur de la performance
          key: item.value,
          // methode de recharts pour définir la valeur max du graphique
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
