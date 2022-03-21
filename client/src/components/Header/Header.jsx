import React, { useEffect, useRef, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchUserInfo } from '../../redux/userInfo/userInfoActions'
import { toggleSidebarMenu } from '../../redux/navigation/navActions'


const Header = () => {
  const dispatch = useDispatch()
  const selectorRef = useRef()
  const [inputSearch, setInputSearch] = useState("")
  const [toggleResults, setToggleResults] = useState(false)
  const [results, setResults] = useState([])
  const user = useSelector(state => state.userInfo.user)

  useEffect(()=>{
      if(inputSearch !== ''){
        axios.get(`${import.meta.env.VITE_APP_URI}api/searchUser/${inputSearch}`)
        .then(response => {
          setResults(response.data.items)
        })
      }
  },[inputSearch])

  return (
    <div className='header'>
        <FaBars className='menu-icon menu-bar' onClick={()=>{
          dispatch(toggleSidebarMenu())
        }}/>
        <SiGithub className='menu-icon menu-logo' onClick={()=>{
          window.open(`https://github.com`, '_blank')
        }}/>
        
        <div  className='input-holder'>
            <input 
            className='input-header' 
            value={inputSearch} 
            placeholder="Search by username" 
            onChange={(e)=>{
              e.preventDefault()
              setToggleResults(true)
              setInputSearch(e.target.value)
            }}
            />
            {toggleResults && 
              <div ref={selectorRef} className='search-results'>
              { results.length > 0 
              ?
              results?.map(user =>(
                  <p onClick={()=>{
                    dispatch(fetchUserInfo(user.login))
                    setToggleResults(false)
                    setInputSearch(user.login)                    
                  }} key={user.id}>{user.login}</p>
                ))
              : <p>User not found</p>
              }
            </div>
            }
            
        </div>


        <div className="userInfo-holder" onClick={()=>{
          window.open(`https://github.com/${user?.user?.login}`, '_blank')
        }}>
            <img className='userImg' src={user?.user?.avatar_url}/>
            <div className="userInfo"> 
                <p>{user?.user?.name}</p>
                <p className='user-email'>@{user?.user?.login}</p>
            </div>
        </div>
    </div>
  )
}

export default Header