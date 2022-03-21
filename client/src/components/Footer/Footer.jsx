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
        <DiGithubFull className='logo1' onClick={()=>{
          window.open("https://github.com",'_blank')
        }}/>
      </div>
    </div>

    <div className='support-holder'>
      <div className='support-tag'>Developed by</div>
      <div className='supporter' onClick={()=>{
          window.open("https://devCluna.com",'_blank')
        }}>
          <p>
          @devCluna
          </p>
      </div>
    </div>

    <div className='support-holder'>
      <div className='support-tag'>Social Media</div>
      <div className='supporter'>
        <BsGithub className='supporter-icon' onClick={()=>{
          window.open("https://github.com/devCluna",'_blank')
        }}/>
        <BiWorld className='supporter-icon' onClick={()=>{
          window.open("https://devcluna.com",'_blank')
        }}/>
        <BsLinkedin className='supporter-icon' onClick={()=>{
          window.open("https://www.linkedin.com/in/devcluna",'_blank')
        }}/>
        <BsTwitter className='supporter-icon' onClick={()=>{
          window.open("https://twitter.com/DevCLuna",'_blank')
        }}/>
      </div>
      
    </div>
  </div>
  )
}

export default Footer