import React, { useEffect, useRef, useState } from 'react'
import './Repos.css'
import {TiArrowSortedUp} from 'react-icons/ti'
import {TiArrowSortedDown} from 'react-icons/ti'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Repos = () => {
  const selectedRepo = useSelector(state => state.selectedRepo.selectedRepo)

  const selectorRef = useRef()
  const [toggleBranch, setToggleBranch] = useState(false)
  const [branches, setBranches] = useState([])
  const [commits, setCommits] = useState([])

  const getHours = (postDate, currentDate) => {
    const milliseconds = Math.abs(currentDate - new Date(postDate))
    const hours = milliseconds /36e5
     return hours < 1 ? `${Math.floor(hours * 60)} minutes`  : `${Math.round(hours)} hours`
  }

  const getDate=(date) => {

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let newDate = ""

    if(month < 10){
      newDate = `${day}-0${month}-${year}`
    }else{
      newDate = `${day}-${month}-${year}`
    }

   return newDate
  }

  useEffect(()=>{

    axios.get('https://api.github.com/repos/devcluna/FULLTIME_FORCE_TECH_TEST/branches')
    .then(item =>{
      setBranches(item.data)
      // console.log(item.data[item.data.length-1].commit.url)
      axios.get('https://api.github.com/repos/devcluna/FULLTIME_FORCE_TECH_TEST/commits?sha=d6fc5ba1cc13450e0785ffbdd4db1871fea4cdfd&per_page=100')
        .then(res =>{
          setCommits(res.data)
        })
    })
  },[])

  useEffect(()=>{
    const closeSelector= (e) => {
      if(e.target.className!== selectorRef.current.className){
          setToggleBranch(false)
      }
    }
    document.body.addEventListener('click', closeSelector);
    return ()=>document.body.addEventListener('click', closeSelector);
  },[])

  return (
    <div className="repos">
      <h3 className="section-repos-title">Selected Repo</h3>
      <div className="repos-item">
        <a className="repo-title" href={selectedRepo.html_url} target="_blank">{selectedRepo.full_name}</a>
        <span className="repo-description">{selectedRepo.description ? selectedRepo.description :'No description provided' }</span>
        <span className='repo-date-label'>created at: <span className='repo-date'>{selectedRepo.created_at && getDate(new Date(selectedRepo.created_at))}</span></span>
        <span className='repo-date-label'>updated at: <span className='repo-date'>{selectedRepo.updated_at && getDate(new Date(selectedRepo.updated_at))}</span></span>
        <div className="techs-stacks">
          {selectedRepo.topics?.map(topic=>(
            <span>{topic}</span>
          ))}
        </div>
      </div>

      <h3 className="section-repos-title">Selected Repo</h3>
      <div className="branchs">
        <div ref={selectorRef} className="branch-selector" onClick={() => setToggleBranch(!toggleBranch)}>
          <div>master</div>
          {toggleBranch ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {toggleBranch && (
          <div className="branch-options">
            {branches?.map(branch => (
              <div>{branch.name}</div>
            ))}
          </div>
        )}
      </div>

      <div className="commits">
        {commits?.map(commit =>(
          <div key={commit.node_id} className="commit-item">
            <a className="commit-description" href={commit.html_url} target="_blank">{commit.commit.message}</a>
            <div className="commit-details">
              <img className="commit-author" src={commit.author.avatar_url} />
              <span className="commit-date">commited {getHours(commit.commit.committer.date, new Date)} ago</span>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Repos