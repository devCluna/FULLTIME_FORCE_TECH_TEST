import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userInfoReducer from "./userInfo/userInfoReducer";
import navReducer from "./navigation/navReducer";

const  rootReducer = combineReducers({
   userInfo: userInfoReducer,
   nav: navReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store