import ApiStore from "./Services/apiStore";
import MockStore from "./Services/mockStore";

// si la variable d'environnement REACT_APP_DATA_SOURCE est égale à "mock" on utilise le mockStore
// sinon on utilise le apiStore

/**
 * The data store to use based on the development environment.
 * If the development environment is set to "mock", the data store will be "MockStore", otherwise it will be "ApiStore".
 * @type {MockStore|ApiStore}
 */
export let store = process.env.REACT_APP_DATA_SOURCE === "mock" ? MockStore : ApiStore;

/**
 * Indicates the current development environment based on the selected data store.
 * If the data store is "MockStore", the value will be "mock", otherwise it will be "api".
 * @type {string}
 */


// permet de savoir si on est en mode mock ou api
export let whereAreWe = process.env.REACT_APP_DATA_SOURCE === "mock" ? "mock" : "api";