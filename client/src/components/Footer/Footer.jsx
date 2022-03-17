import React from 'react'
import './Footer.css'
import {DiGithubFull} from 'react-icons/di'
import {BsLinkedin} from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>

    <div className='support-holder'>
      <div className='support-tag'>Supported by</div>
      <div className='supporter'>
        <DiGithubFull className='logo1'/>
      </div>
    </div>

    <div className='support-holder'>
      <div className='support-tag'>Developed by</div>
      <div className='supporter'>
        @devCluna
      </div>
    </div>

    <div className='support-holder'>
      <div className='support-tag'>Social Media</div>
      <div className='supporter'>
        <BsGithub/>
        <BiWorld/>
        <BsLinkedin/>
        <BsTwitter/>
      </div>
      
    </div>
  </div>
  )
}

export default Footer