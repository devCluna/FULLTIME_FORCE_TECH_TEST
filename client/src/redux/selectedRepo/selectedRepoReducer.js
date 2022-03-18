import { PICK_REPO } from "./selectedRepoTypes";

const initialState = {
    selectedRepo: {}
}

const selectedRepoReducer = (state = initialState, action)=>{
    switch(action.type){
        case PICK_REPO:
            return{
                selectedRepo: action.payload
            }
        default:
            return state
    }
}

export default selectedRepoReducer