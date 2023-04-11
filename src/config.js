import ApiStore from "./Services/apiStore";
import MockStore from "./Services/mockStore";

// si la variable d'environnement REACT_APP_DATA_SOURCE est égale à "mock" on utilise le mockStore
// sinon on utilise le apiStore
export let store = process.env.REACT_APP_DATA_SOURCE === "mock" ? MockStore : ApiStore;
