import React from 'react'
import st from './Moblnk.module.css';
import { Avatar } from '@chakra-ui/react';
import { FaRegCopy } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
const Moblnk = (props) => {
  return (
    <div className={st.par}>

      {props.type==1 && <Avatar size={{lg:'md',base:'xs'}} name='Instagram' src='https://res.cloudinary.com/dxxu4powb/image/upload/v1700234043/download_itbqjk.png' />} 
      {props.type==2 && <Avatar size={{lg:'md',base:'xs'}} name='Youtube' src='https://res.cloudinary.com/dxxu4powb/image/upload/v1700234189/yt_ksk6cj.png' />} 
      {props.type==3 && <Avatar size={{lg:'md',base:'xs'}}  name='Facebook' src='https://res.cloudinary.com/dxxu4powb/image/upload/v1700234237/fb_vrstkh.png' />} 
      {props.type==4 && <Avatar size={{lg:'md',base:'xs'}} name='Website' src='https://res.cloudinary.com/dxxu4powb/image/upload/v1700234403/bus_nvoyhg.png' />} 
      {props.type==5 && <Avatar size={{lg:'md',base:'xs'}} name='Linkedin' src='https://res.cloudinary.com/dxxu4powb/image/upload/v1700234299/ln_ynh1jg.png' />} 
      
      <div>{props.actual}</div>
      <FaRegCopy />
      <FaRegShareFromSquare />
    </div>
  )
}

export default Moblnk
