import React from 'react'
import './Sidebar.css'
import {BiBookBookmark} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserRepo, selectUserRepoFail } from '../../redux/userInfo/userInfoActions'
import { toggleSidebarMenu } from '../../redux/navigation/navActions'

const Sidebar = () => {
    const user = useSelector(state => state.userInfo.user)
    const nav = useSelector(state=> state.nav)
    const dispatch = useDispatch()

  return (
    <div className={nav ? 'sidebar menu-active' : 'sidebar'}>
        <p>Repositories</p>
        <div className='repo-holder'>
            {user?.repos?.map(repo => (
                <div key={repo.id} className='repo-item' onClick={()=>{
                    dispatch(selectUserRepo(repo.owner.login, repo.name))
                    dispatch(toggleSidebarMenu())
                }}>
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