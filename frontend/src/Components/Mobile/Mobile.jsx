import React from 'react'
import st from './Mobile.module.css';
import { Image, Text } from '@chakra-ui/react';
import Moblnk from './Moblnk/Moblnk';
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
      <div className={st.lst}>
        <Text color='white' fontSize={{lg:'2xl',base:'md'}}>{props.name}</Text>
        {props.link && props.link.map((el,ind)=>{
          return(
            <>
              <Moblnk url={el.url} actual={el.actual} type={el.type}></Moblnk>
            </>
          )
        })}
      </div>
      Mobile Design
    </div>
  )
}

export default Mobile
