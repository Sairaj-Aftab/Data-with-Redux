import { combineReducers } from "redux";
import dataFormReducer from "./dataForm/dataFormReducer";


const rootFile = combineReducers({
    dataForm : dataFormReducer
})

export default rootFile;