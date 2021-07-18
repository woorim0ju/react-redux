import { combineReducers } from "redux";
import subscriberReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commmentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
    views: viewsReducer, //state.views로 state값 바뀜
    subscribers: subscriberReducer, //state.subscribers
    comments: commmentsReducer
})

export default rootReducer;