import React, { useEffect, useRef, useState } from 'react'
import './Repos.css'
import {TiArrowSortedUp} from 'react-icons/ti'
import {TiArrowSortedDown} from 'react-icons/ti'
import profileImg from '../../assets/profile.jpg'

const Repos = () => {
  const selectorRef = useRef()
  const [toggleBranch, setToggleBranch] = useState(false)

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
        <a className="repo-title">Repo Name</a>
        <span className="repo-description">Repo Description</span>
        <div className="techs-stacks">
          <span>react</span>
          <span>css</span>
          <span>css</span>
          <span>css</span>
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
            <div>development</div>
            <div>production</div>
            <div>api</div>
          </div>
        )}
      </div>

      <div className="commits">
        <div className="commit-item">
          <div className="commit-description">Commit Description</div>
          <div className="commit-details">
            <img className="commit-author" src={profileImg} />
            <span>commited 11 hours</span>
          </div>
        </div>

        <div className="commit-item">
          <div className="commit-description">Commit Description</div>
          <div className="commit-details">
            <img className="commit-author" src={profileImg} />
            <span>commited 11 hours</span>
          </div>
        </div>

        <div className="commit-item">
          <div className="commit-description">Commit Description</div>
          <div className="commit-details">
            <img className="commit-author" src={profileImg} />
            <span>commited 11 hours</span>
          </div>
        </div>

        <div className="commit-item">
          <div className="commit-description">Commit Description</div>
          <div className="commit-details">
            <img className="commit-author" src={profileImg} />
            <span>commited 11 hours</span>
          </div>
        </div>

        <div className="commit-item">
          <div className="commit-description">Commit Description</div>
          <div className="commit-details">
            <img className="commit-author" src={profileImg} />
            <span>commited 11 hours</span>
          </div>
        </div>

        <div className="commit-item">
          <div className="commit-description">Commit Description</div>
          <div className="commit-details">
            <img className="commit-author" src={profileImg} />
            <span>commited 11 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repos