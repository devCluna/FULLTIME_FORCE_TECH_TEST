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
  axios.get(`https://api.github.com/users/${username}?access_token=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`, auth).then((response) => {
    userInfo.user = response.data;
    //Search repos
    axios.get(`https://api.github.com/users/${username}/repos`, auth).then((response) => {
      userInfo.repos = response.data;
      userInfo.selectedRepo = response.data[0];
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

axios.get(`https://api.github.com/users/${username}`, auth ).then((response) => {
    userInfo.user = response.data;
    axios.get(`https://api.github.com/users/${username}/repos`, auth ).then((response) => {
    userInfo.repos = response.data;
    axios.get(`https://api.github.com/repos/${username}/${repo}`, auth ).then((response) => {
        userInfo.selectedRepo = response.data;
        axios.get(`https://api.github.com/repos/${username}/${repo}/branches`, auth ).then((response) => {
        userInfo.branches = response.data;
        userInfo.selectedBranch = response.data[0];
        axios
            .get(`https://api.github.com/repos/${username}/${repo}/commits?sha=${userInfo.branches[0].commit.sha}&per_page=100`, auth )
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

    axios.get(`https://api.github.com/users/${username}`, auth).then((response) => {
    userInfo.user = response.data;
    axios.get(`https://api.github.com/users/${username}/repos`, auth).then((response) => {
        userInfo.repos = response.data;
        axios.get(`https://api.github.com/repos/${username}/${repo}`, auth).then((response) => {
        userInfo.selectedRepo = response.data;
        axios.get(`https://api.github.com/repos/${username}/${repo}/branches`, auth).then((response) => {
            userInfo.branches = response.data;
            userInfo.selectedBranch = selectedBranch;
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