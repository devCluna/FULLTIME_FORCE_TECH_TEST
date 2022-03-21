import axios from "axios";
import { FETCH_USER_INFO_FAIL, FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_SUCCESS, SELECT_BRANCH_FAIL, SELECT_BRANCH_REQUEST, SELECT_BRANCH_SUCCESS, SELECT_USER_REPO_FAIL, SELECT_USER_REPO_REQUEST, SELECT_USER_REPO_SUCCESS } from "./userInfoTypes";

export const fetchUserInfo = (username) => {
  return (dispatch) => {
    dispatch(fetchUserInfoRequest());
    axios
      .get(`${import.meta.env.VITE_APP_URI}getInfo/${username}`)
      .then((response) => {
        dispatch(fetchUserInfoSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchUserInfoFail(err.message));
      });
  };
};

export const selectUserRepo = (username, repo) =>{
  return (dispatch) => {
    dispatch(selectUserRepoRequest());
    axios
      .get(`${import.meta.env.VITE_APP_URI}selectRepo/${username}/${repo}`)
      .then((response) => {
        dispatch(selectUserRepoSuccess(response.data));
      })
      .catch((err) => {
        dispatch(selectUserRepoFail(err.message));
      });
  };
}

export const selectBranch = (username, repo, selectBranch) =>{
  return (dispatch) => {
    dispatch(selectBranchRequest());
    axios
      .get(`${import.meta.env.VITE_APP_URI}selectBranch/${username}/${repo}/${selectBranch}`)
      .then((response) => {
        dispatch(selectBranchSuccess(response.data));
      })
      .catch((err) => {
        dispatch(selectBranchFail(err.message));
      });
  };
}

export const selectBranchRequest = () => {
  return{
  type: SELECT_BRANCH_REQUEST
  }
}

export const selectBranchSuccess = (repo) => {
  return{
  type: SELECT_BRANCH_SUCCESS,
  payload: repo
  }
}

export const selectBranchFail = (repo) => {
  return{
  type: SELECT_BRANCH_FAIL,
  payload: repo
  }
}

export const selectUserRepoRequest = () => {
  return {
    type: SELECT_USER_REPO_REQUEST
  }
}

export const selectUserRepoSuccess = (repo) => {
  return {
    type: SELECT_USER_REPO_SUCCESS,
    payload: repo
  }
}

export const selectUserRepoFail = (repo) => {
  return {
    type: SELECT_USER_REPO_FAIL,
    payload: repo
  }
}

export const fetchUserInfoRequest = () => {
  return {
    type: FETCH_USER_INFO_REQUEST,
  };
};

export const fetchUserInfoSuccess = (user) => {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload: user,
  };
};

export const fetchUserInfoFail = (error) => {
  return {
    type: FETCH_USER_INFO_FAIL,
    payload: error,
  };
};
