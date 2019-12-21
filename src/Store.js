import { createStore, applyMiddleware } from "redux";
import { rootEpic } from "./epics";
import reducer from "./reducers";
const { createEpicMiddleware } = require("redux-observable");
const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, {}, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
