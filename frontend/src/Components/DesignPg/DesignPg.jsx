import React, { useState } from 'react'
import st from './DesignPg.module.css';
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, useDisclosure, Heading, useEditableControls, Flex, IconButton, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { CheckIcon ,CloseIcon, EditIcon } from '@chakra-ui/icons';
import { Editable, EditableInput, EditableTextarea,  EditablePreview,
} from '@chakra-ui/react'
import { FiUploadCloud } from "react-icons/fi";
import Mobile from '../Mobile/Mobile';
import { Modal,  ModalOverlay,ModalContent, ModalHeader, ModalFooter, ModalBody,  ModalCloseButton,
} from '@chakra-ui/react'
import {  Stat,StatLabel,   StatNumber,   StatHelpText,   StatArrow,   StatGroup,
} from '@chakra-ui/react'
import Links from '../Links/Links';

const DesignPg = () => {
    const [arr, setArr] = useState([{ url: "https:///google.com", actual: "asdasda",type:3 },{ url: "https:///google.com", actual: "asdasda",type:3 },{ url: "https:///google.com", actual: "asdasda",type:3 },{ url: "https:///google.com", actual: "asdasda",type:3 }, { url: "https:///sada", actual: "asdasda" ,type:2}]);
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [bgimg,setBg]=useState('https://res.cloudinary.com/dxxu4powb/image/upload/v1700227215/mobbg_e8ieg7.jpg');
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
    return (
        <div className={st.par}>
            <div className={st.lbox}>
                <Heading as='h1' size='md' textAlign='left' >
                    <Editable
                        textAlign='center'
                        defaultValue='Rasengan ⚡️'
                        fontSize='2xl'
                        isPreviewFocusable={false}
                    >
                        <EditablePreview />
                        {/* Here is the custom input */}
                        <Input as={EditableInput} />
                        <EditableControls />
                    </Editable>
                </Heading>

                <InputGroup size='sm'>
                    <InputLeftAddon children='https://' backgroundColor='#0180ff' />
                    <Input placeholder='mysite' />
                    <InputRightAddon children='.com' backgroundColor='#0180ff' />
                </InputGroup>

                <FormControl>
                    <FormLabel>Select Background Image</FormLabel>
                    <Input type='file' accept=".png, .jpg, .jpeg" p='1%' />

                </FormControl>
                <StatGroup>
                    <Stat>
                        <StatLabel>Clicked</StatLabel>
                        <StatNumber>345</StatNumber>
                        <StatHelpText>
                            <StatArrow type='increase' />
                            23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Shared</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                            <StatArrow type='decrease' />
                            9.05%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
                <button className={st.linkbtn}  onClick={onOpen} >Add New Link </button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent p='2%'>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <FormControl>
                            <FormLabel>Enter URL Link</FormLabel>
                            <InputGroup size='sm'>
                                <InputLeftAddon children='https://' />
                                <Input placeholder='Enter Url' />
                                <InputRightAddon children='.com' />
                            </InputGroup>

                        </FormControl>
                        <br></br>
                        <FormControl>
                            <FormLabel>Enter text to display </FormLabel>
                            <Input type='text' />
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <FormLabel>Enter type of link </FormLabel>
                            <Input type='text' />
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <Select placeholder='Select type of link'>
                                <option value='option1'>Instagram</option>
                                <option value='option2'>Youtube</option>
                                <option value='option3'>Facebook </option>
                            </Select>
                        </FormControl>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
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
                    <Links link={arr}></Links>
                </div>
            </div>
            <div className={st.rbox}>
                <Mobile bgimg={bgimg} link={arr}></Mobile>

            </div>

        </div>
    )
}

export default DesignPg
