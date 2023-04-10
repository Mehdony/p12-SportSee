import ApiStore from "./Services/apiStore";
import MockStore from "./Services/mockStore";

export let store = process.env.REACT_APP_DATA_SOURCE === "mock" ? MockStore : ApiStore;
export let whereAreWe = process.env.REACT_APP_DATA_SOURCE === "mock" ? "mock" : "api";