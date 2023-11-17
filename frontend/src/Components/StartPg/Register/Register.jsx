
import React, { useState } from 'react'
import st from './Register.module.css';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FaUserAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const Register = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setE] = useState();
  const [password, setPwd] = useState();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show)
  const submitHandler = async (par) => {
    par.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users",
        { name, email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate('/');

    } catch (error) {
      console.log(error.response);
    }
  }
  const logscreen=()=>{
    navigate("/");
  }
  return (
    <div className={st.par}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w='80vw'
        h='50vh'
        className={st.card}
      >
        <div className={st.leftcard}>
          <Heading as='h3' size='lg'>
            LinkTree
          </Heading>

          <Text>Grow Your Business with Us </Text>
          <Text> Directly design the UI of your domain </Text>

        </div>

        <Stack >
          <CardBody textAlign='left' w='40vw'>
            <Heading className={st.text} fontSize='4vh'>Register  </Heading>
            <br></br>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type='text'
                placeholder='Enter Company Name'
                onChange={(e)=>setName(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <FaUserAlt />
              </InputRightElement>
            </InputGroup>
            <br></br>
            <InputGroup size='md'>

              <Input
                pr='4.5rem'
                type='email'
                placeholder='Enter Email'
                onChange={(e)=>setE(e.target.value)}
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
                onChange={(e)=>setPwd(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  <FiEye />
                </Button>
              </InputRightElement>
            </InputGroup>
            <br></br>
            <Button variant='solid' colorScheme='blue' onClick={submitHandler}>
              Submit
            </Button>
            <Link  isExternal ml={'3vw'} textDecoration={'underline'} onClick={logscreen}>
              Existing User ? Login <ExternalLinkIcon mx='2px' />
            </Link>
          </CardBody>
        </Stack>
      </Card>
    </div>
  )
}

export default Register
