import { TOGGLE_SIDEBAR_MENU}  from "./navTypes"

const initialState ={
    navigation: false
}

const navReducer =( state = false , action ) => {
    switch(action.type){
        case TOGGLE_SIDEBAR_MENU:
            return !state
        
        default: 
            return state
    }
}

export default navReducer