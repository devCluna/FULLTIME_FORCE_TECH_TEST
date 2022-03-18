import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import {BiBookBookmark} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRepos } from '../../redux/listRepo/listReposActions'
import { pickRepo } from '../../redux/selectedRepo/selectedRepoActions'

const Sidebar = () => {
    const listRepos = useSelector(state => state.listRepos.repos)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchRepos())
    },[])

  return (
    <div className='sidebar'>
        <p>Repositories</p>
        <div className='repo-holder'>
            {listRepos?.map(repo => (
                <div key={repo.id} className='repo-item' onClick={()=>(
                    dispatch(pickRepo(repo))
                )}>
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