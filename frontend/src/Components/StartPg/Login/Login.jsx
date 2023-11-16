import React, { useState } from 'react'
import st from './Login.module.css';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FaUserAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
const Login = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <div className={st.par}>
      <FaUserAlt />
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w='80vw'
        h='50vh'
        className={st.card}
      >
        <div className={st.leftcard}>
          sada
        </div>

        <Stack >
          <CardBody textAlign='left' w='40vw'>
            <Heading className={st.text} fontSize='4vh'>Login </Heading>
            <br></br>
            <InputGroup size='md'>

              <Input
                pr='4.5rem'
                type='email'
                placeholder='Enter Email'
              />
              <InputRightElement width='4.5rem'>
                <FaUserAlt />
              </InputRightElement>
            </InputGroup>
            <br></br>
            <InputGroup size='md'>

              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  <FiEye />
                </Button>
              </InputRightElement>
            </InputGroup>
            <br></br>
            <Button variant='solid' colorScheme='blue'>
              Submit
            </Button>
          </CardBody>
        </Stack>
      </Card>
    </div>
  )
}

export default Login
