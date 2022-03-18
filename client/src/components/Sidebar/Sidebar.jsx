import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import {BiBookBookmark} from 'react-icons/bi'
import axios from 'axios'

const Sidebar = () => {
    
    const [repos, setRepos] = useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users/devCluna/repos")
            .then(item =>{
                setRepos(item.data)

            })
    },[])

  return (
    <div className='sidebar'>
        <p>Repositories</p>
        <div className='repo-holder'>
            {repos?.map(repo => (
                <div key={repo.id} className='repo-item'>
                    <div className='repo-icon'>
                        <BiBookBookmark />
                    </div>
                    <div className='repo-name'>{repo.name}</div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar