import React, { useEffect, useRef, useState } from 'react'
import './Repos.css'
import {TiArrowSortedUp} from 'react-icons/ti'
import {TiArrowSortedDown} from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { selectBranch } from '../../redux/userInfo/userInfoActions'

const Repos = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userInfo.user)

  const selectorRef = useRef()
  const [toggleBranch, setToggleBranch] = useState(false)
  const [currentBranch, setCurrentBranch] = useState("master")

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
        <a className="repo-title" href={user?.selectedRepo?.html_url} target="_blank">{user?.selectedRepo?.full_name}</a>
        <span className="repo-description">{user?.selectedRepo?.description ? user?.selectedRepo?.description :'No description provided' }</span>
        <span className='repo-date-label'>created at: <span className='repo-date'>{user?.selectedRepo?.created_at && getDate(new Date(user.selectedRepo?.created_at))}</span></span>
        <span className='repo-date-label'>updated at: <span className='repo-date'>{user?.selectedRepo?.updated_at && getDate(new Date(user.selectedRepo?.updated_at))}</span></span>
        <div className="techs-stacks">
          {user?.selectedRepo?.topics?.map(topic=>(
            <span>{topic}</span>
          ))}
        </div>
      </div>

      <h3 className="section-repos-title">Selected Branch</h3>
      <div className="branchs">
        <div ref={selectorRef} className="branch-selector" onClick={() => setToggleBranch(!toggleBranch)}>
          <div>{user?.selectedBranch?.name ? user?.selectedBranch?.name : currentBranch}</div>
          {toggleBranch ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {toggleBranch && (
          <div className="branch-options">
            {user?.branches?.map(branch => (
              <div key={branch.commit.sha}
                onClick={()=>{
                  setCurrentBranch(branch.name)
                  dispatch(selectBranch(user.user.login, user.selectedRepo.name, branch.commit.sha))
                }}
              >{branch.name}</div>
            ))}
          </div>
        )}
      </div>

      <div className="commits">
        {user?.commits?.map(commit =>(
          <div key={commit.node_id} className="commit-item">
            <a className="commit-description" href={commit.html_url} target="_blank">{commit.commit.message}</a>
            <div className="commit-details">
              <img className="commit-author" src={commit?.author?.avatar_url}/>
              <span className="commit-date">commited {getHours(commit.commit.committer.date, new Date)} ago</span>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Repos