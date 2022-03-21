import { FETCH_USER_INFO_FAIL, FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_SUCCESS, SELECT_BRANCH_FAIL, SELECT_BRANCH_REQUEST, SELECT_BRANCH_SUCCESS, SELECT_USER_REPO_FAIL, SELECT_USER_REPO_REQUEST, SELECT_USER_REPO_SUCCESS } from "./userInfoTypes"


const initialState ={
    user:{}
}

const userInfoReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_USER_INFO_REQUEST:
            return {
                user: action.payload
            }
        
        case FETCH_USER_INFO_SUCCESS:
            return {
                user: action.payload
            }

        case FETCH_USER_INFO_FAIL:
            return{
                error:action.payload
            }
        case SELECT_USER_REPO_REQUEST:
            return{
                user: action.payload
            }
        case SELECT_USER_REPO_SUCCESS:
            return{
                user: action.payload
               
            }
        case SELECT_USER_REPO_FAIL:
            return{
                error:action.payload
            }
        case SELECT_BRANCH_REQUEST:{
            return{
                user: action.payload
            }
        }
        case SELECT_BRANCH_SUCCESS:{
            return {
                user: action.payload
            }
        }
        case SELECT_BRANCH_FAIL:{
            return{
                user: action.payload
            }
        }

        default:
            return state
    }
}

export default userInfoReducer