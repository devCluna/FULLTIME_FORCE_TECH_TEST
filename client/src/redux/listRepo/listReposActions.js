import axios from "axios"
import { FETCH_REPOS_FAIL, FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS } from "./listReposTypes"


export const fetchRepos = () =>{
    return (dispatch) => {
        dispatch(fetchReposRequest())
        axios.get('https://api.github.com/users/devCluna/repos')
            .then(response =>{
                dispatch(fetchReposSuccess(response.data))
            })
            .catch(err =>{
                dispatch(fetchReposError(err.message))
            })
    }
}


export const fetchReposRequest = () => {
    return {
      type: FETCH_REPOS_REQUEST
    }
  }
  
  export const fetchReposSuccess = repos => {
    return {
      type: FETCH_REPOS_SUCCESS,
      payload: repos
    }
  }
  
  export const fetchReposFail = error => {
    return {
      type: FETCH_REPOS_FAIL,
      payload: error
    }
  }