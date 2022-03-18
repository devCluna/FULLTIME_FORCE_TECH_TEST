import { FETCH_REPOS_FAIL, FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS } from "./listReposTypes";

const initialState ={
    repos:[]
}

const listReposReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_REPOS_REQUEST:
            return{
                repos: action.payload
            }
        case FETCH_REPOS_SUCCESS:
            return{
                repos: action.payload
            }
        case FETCH_REPOS_FAIL:
            return{
                error:action.payload
            }
        default:
            return state
    }
}

export default listReposReducer