import React from 'react'
import st from './Mobile.module.css';
import { Image } from '@chakra-ui/react';
const Mobile = (props) => {

  return (
    <div className={st.mob}>
      <Image
        w='100%' 
        h='100%'
        objectFit='cover'
        src={props.bgimg}
        alt='Dan Abramov'
        borderRadius= '2rem'
      />
      <div className={st.lst}></div>
      Mobile Design
    </div>
  )
}

export default Mobile
