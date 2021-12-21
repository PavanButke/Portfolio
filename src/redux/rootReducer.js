import { combineReducers} from "redux"
import templateReducer, {} from "./reducers/templateReducer";
import { userReducers } from "reducers/userReducers";

let rootReducer =  combineReducers({
    template: templateReducer,
    user: userReducers,

});

export default rootReducer;