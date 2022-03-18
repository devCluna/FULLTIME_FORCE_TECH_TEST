import React from 'react'
import Repos from '../Repos/Repos'
import Sidebar from '../Sidebar/Sidebar'
import './Body.css'

const Body = () => {
  return (
    <div className='body'>
       <Sidebar/>
       <Repos/>
    </div>
  )
}

export default Body