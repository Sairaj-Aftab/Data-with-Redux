import { createStore } from "redux";
import rootFile from "./rootFile";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(rootFile, composeWithDevTools());

export default store;