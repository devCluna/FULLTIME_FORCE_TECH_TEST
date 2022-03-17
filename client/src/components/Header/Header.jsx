import React from 'react'
import {FaBars} from 'react-icons/fa'
import './Header.css'
import profileImg from '../../assets/profile-img-1.webp'

const Header = () => {
  return (
    <div className='header'>
        <FaBars className='menu-icon'/>
        <div className='input-holder'>
            <input className='input-header' placeholder="Search by username"/>
            <div className='search-results'>
              <p>dalas</p>
              <p>joaquin</p>
            </div>
        </div>
        <div className="userInfo-holder">
            <img className='userImg' src={profileImg} />
            <div className="userInfo"> 
                <p>username</p>
                <p>email</p>
            </div>
        </div>
    </div>
  )
}

export default Header