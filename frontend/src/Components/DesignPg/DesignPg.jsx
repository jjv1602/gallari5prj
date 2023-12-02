import React, { useEffect, useState } from 'react'
import st from './DesignPg.module.css';
import axios from 'axios';
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, useDisclosure, Heading, useEditableControls, Flex, IconButton, ButtonGroup, useToast } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
    Editable, EditableInput, EditableTextarea, EditablePreview,
} from '@chakra-ui/react'
import { FiUploadCloud } from "react-icons/fi";
import Mobile from '../Mobile/Mobile';
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
} from '@chakra-ui/react'
import {
    Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup,
} from '@chakra-ui/react'
import Links from '../Links/Links';
import { FaRegSave } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const DesignPg = () => {
    const navigate=useNavigate();
    const [arr, setArr] = useState([]);
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('userInfo')).email);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [bgimg, setBg] = useState();
    // Modal New Link Variables
    const [type, setType] = useState();
    const [url, setUrl] = useState();
    const [actual, setActual] = useState();
    const toast = useToast();
    const [name, setName] = useState("");
    const[companyurl,setCurl]=useState(name);
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        )
    }

    const postDetails = (pics) => {
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "eventmanage");
            data.append("cloud_name", "dxxu4powb");
            // console.log(data);
            fetch("https://api.cloudinary.com/v1_1/dxxu4powb/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    setBg(data.url.toString());

                })
                .catch((err) => {
                    // console.log(err);
                });
        } else {

        }
    };
    // const [arr,setArr]=useState([]);
    const newLink = async () => {
        // Updating new link
        const newl = {
            url: url,
            actual: actual,
            type: type,
        }
        
        const newArr = [...arr, newl];
        setArr(newArr);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.put(
                "/api/users/update",
                { "email": email, "links": newArr },
                config
            );
        } catch (error) {
            console.log(error);
            toast({
                title: `Error Unable to add`,
                isClosable: true,
            })
        }
    }
    const deletelink = async (i) => {
        // Updating new link
        const upd = [...arr];
        upd.splice(i, 1);
        setArr(upd);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.put(
                "/api/users/update",
                { "email": email, "links": upd },
                config
            );

        } catch (error) {
            console.log(error);
            toast({
                title: `Error Unable to add`,
                isClosable: true,
            })
        }
    }
    const save = async () => {
        // Updating new link
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.put(
                "/api/users/save",
                {"email":email,"links":arr,"bg":bgimg,"name":name },
                config
            );
            toast({
                title: `Saved Successfully `,
                isClosable: true,
            })
        } catch (error) {
            console.log(error);
            toast({
                title: `Error Unable to save `,
                isClosable: true,
            })
        }
    }
    const logout=()=>{
        navigate('/');
    }
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem('userInfo')))
        setArr(JSON.parse(localStorage.getItem('userInfo')).links);
        setName(JSON.parse(localStorage.getItem('userInfo')).name);
        setBg(JSON.parse(localStorage.getItem('userInfo')).bgimg);

    }, [])
    return (

        <div className={st.par}>

            <div className={st.lbox}>
                <Heading as='h5' size='sm' textAlign='left' >
                    <Editable
                        textAlign='center'
                        value={name}
                        fontSize='2xl'
                        isPreviewFocusable={false}
                        display={'flex'}
                        justifyContent={'space-between'}
                    >
                        <EditablePreview />
                        {/* Here is the custom input */}
                        <Input as={EditableInput} onChange={(e)=>setName(e.target.value)}/>
                        <EditableControls />
                    </Editable>
                </Heading>

                <InputGroup size='sm'>
                    <InputLeftAddon children='https://' backgroundColor='#0180ff' />
                    <Input placeholder='mysite' value={companyurl} onChange={(e)=>setCurl(e.target.url)} />
                    <InputRightAddon children='.com' backgroundColor='#0180ff' />
                </InputGroup>

                <FormControl>
                    <FormLabel>Select Background Image</FormLabel>
                    <Input type='file' accept=".png, .jpg, .jpeg" p='1%' onChange={(e) => postDetails(e.target.files[0])} />
                </FormControl>

                <StatGroup>
                    <Stat >
                        <StatLabel fontSize='2vh'>Clicked</StatLabel>
                        <StatNumber fontSize='2vh' >345</StatNumber>
                        <StatHelpText>
                            <StatArrow type='increase' />
                            23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel fontSize='2vh'>Shared</StatLabel>
                        <StatNumber fontSize='2vh' r>45</StatNumber>
                        <StatHelpText fontSize='2vh'>
                            <StatArrow type='decrease' />
                            9.05%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
                <button className={st.linkbtn} onClick={onOpen} >Add New Link </button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent p='2%'>
                        <ModalHeader pl={'0'}>Add New Link + </ModalHeader>
                        <ModalCloseButton />
                        <FormControl>
                            <FormLabel>Enter URL Link</FormLabel>
                            <InputGroup size='sm'>
                                <InputLeftAddon children='https://' />
                                <Input placeholder='Enter Url' onChange={(e) => setUrl("https" + e.target.value + ".com")} />
                                <InputRightAddon children='.com' />
                            </InputGroup>

                        </FormControl>
                        <br></br>
                        <FormControl>
                            <FormLabel>Enter text to display </FormLabel>
                            <Input type='text' onChange={(e) => setActual(e.target.value)} />
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <Select placeholder='Select type of link' onChange={(e) => setType(e.target.value)}>
                                <option value='1'>Instagram</option>
                                <option value='2'>Youtube</option>
                                <option value='3'>Facebook </option>
                                <option value='5'>Linkedin </option>
                                <option value='4'>Official Page </option>
                            </Select>
                        </FormControl>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={newLink}>
                                Submit
                            </Button>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                {/* Display all Links */}
                <div className={st.lnkbox}>
                    <Links link={arr} deletelink={deletelink}></Links>
                </div>
                
                <div className={st.btnhand}><Button onClick={save}><FaRegSave /> &nbsp; Save </Button>
                    <Button onClick={logout}><FaLock /> &nbsp; LogOut </Button>
                </div>
            </div>
            <div className={st.rbox}>
                <Mobile bgimg={bgimg} link={arr} name={name}></Mobile>

            </div>

        </div>
    )
}

export default DesignPg
