const express = require('express')
const router = express.Router()
const axios =require('axios')
const auth = require('./auth')
const dotenv = require('dotenv')

dotenv.config();

 //User boilerplate
let userInfo = {
 
};

//Search User
router.get("/searchUser/:username", (req, res) => {
    const { username } = req.params;
    axios.get(`https://api.github.com/search/users?q=${username}+repos:%3E5&per_page=6`, auth).then((response) => {
      res.json(response.data);
    });
});


//Get user info
router.get("/getInfo/:username", (req, res) => {
  const { username } = req.params;

  //Search by username
  axios.get(`https://api.github.com/users/${username}`, auth).then((response) => {
    userInfo.user = response.data;
    //Search repos
    axios.get(`https://api.github.com/users/${username}/repos`, auth).then((response) => {
      userInfo.repos = response.data;
      userInfo.selectedRepo = response.data[3];
     
      //Get Branches
      axios.get(`https://api.github.com/repos/${username}/${userInfo.selectedRepo.name}/branches`, auth).then((response) => {
        userInfo.branches = response.data;
        userInfo.selectedBranch = response.data[0];
        //Get commits
        axios
          .get(
            `https://api.github.com/repos/${username}/${userInfo.selectedRepo.name}/commits?sha=${userInfo.branches[0].commit.sha}&per_page=100`,
            auth
          )
          .then((response) => {
            userInfo.commits = response.data;
            res.json(userInfo);
          });
      });
    });
  });
});


//Select Repo
router.get("/selectRepo/:username/:repo", (req, res) => {
    const { username, repo } = req.params;

//Search by username
axios.get(`https://api.github.com/users/${username}`, auth ).then((response) => {
    userInfo.user = response.data;
    //Search by repos
    axios.get(`https://api.github.com/users/${username}/repos`, auth ).then((response) => {
    userInfo.repos = response.data;
    //Search repo
    axios.get(`https://api.github.com/repos/${username}/${repo}`, auth ).then((response) => {
        userInfo.selectedRepo = response.data;
        //Search branches
        axios.get(`https://api.github.com/repos/${username}/${repo}/branches`, auth ).then((response) => {
        userInfo.branches = response.data;
        userInfo.selectedBranch = response.data[0];
        //Search commits     
        axios.get(`https://api.github.com/repos/${username}/${repo}/commits?sha=${userInfo.branches[0].commit.sha}&per_page=100`, auth )
            .then((response) => {
            userInfo.commits = response.data;
            res.json(userInfo);
            });
        });
    });
    });
});
});
      
//Select Repo
router.get("/selectBranch/:username/:repo/:selectedBranch", (req, res) => {
    const { username, repo, selectedBranch } = req.params;

    console.log(username, repo, selectedBranch);
    //Search by username
    axios.get(`https://api.github.com/users/${username}`, auth).then((response) => {
    userInfo.user = response.data;
    //Search by repos
    axios.get(`https://api.github.com/users/${username}/repos`, auth).then((response) => {
        userInfo.repos = response.data;
        //Search repo
        axios.get(`https://api.github.com/repos/${username}/${repo}`, auth).then((response) => {
        userInfo.selectedRepo = response.data;
        //Search Branches
        axios.get(`https://api.github.com/repos/${username}/${repo}/branches`, auth).then((response) => {
            userInfo.branches = response.data;
            userInfo.selectedBranch = selectedBranch;
            //Search commits
            axios
            .get(`https://api.github.com/repos/${username}/${repo}/commits?sha=${selectedBranch}&per_page=100`, auth)
            .then((response) => {
                userInfo.commits = response.data;
                res.json(userInfo);
            });
        });
        });
    });
    });
});
    
    
module.exports = router