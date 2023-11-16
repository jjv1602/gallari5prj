import React from 'react'
import st from './DesignPg.module.css';
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, useDisclosure, Heading } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from '@chakra-ui/react'
import { FiUploadCloud } from "react-icons/fi";
import Mobile from '../Mobile/Mobile';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
const DesignPg = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className={st.par}>
            <div className={st.lbox}>
                <Heading as='h1' size='md' noOfLines={1}>
                    <Editable defaultValue='Enter Company Name' borderBottom='1px '>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Heading>

                <InputGroup size='sm'>
                    <InputLeftAddon children='https://' />
                    <Input placeholder='mysite' />
                    <InputRightAddon children='.com' />
                </InputGroup>

                <FormControl>
                    <FormLabel>Select Background Image</FormLabel>
                    <Input type='file' accept=".png, .jpg, .jpeg" p='1%' />

                </FormControl>

                <button className={st.linkbtn} onClick={onOpen} >Add New Link </button>

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
            </div>
            <div className={st.rbox}>
                <Mobile></Mobile>

            </div>

        </div>
    )
}

export default DesignPg
