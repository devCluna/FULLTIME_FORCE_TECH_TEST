import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import listReposReducer from "./listRepo/listRepoReducer";
import selectedRepoReducer from "./selectedRepo/selectedRepoReducer";

const  rootReducer = combineReducers({
   listRepos: listReposReducer,
   selectedRepo: selectedRepoReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store