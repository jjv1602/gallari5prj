import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Box, StackDivider, Button } from '@chakra-ui/react'
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from '@chakra-ui/react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'
const Links = (props) => {
    return (
        <>
            {
                props.link.map((el, i) => {
                    return (
                        <Card backgroundColor='#1f1e1f' w='100%' color='white' marginBottom='3vh' paddingBottom='2%' >
                            <Box>
                                <Heading size='xs' textTransform='uppercase' textAlign='left' paddingLeft='2%'>
                                    {el.actual}
                                </Heading>
                                <Text pt='2' fontSize='sm' display='flex' p='2%'>
                                    <Text color='#6e6f6f'> Link URL : &nbsp;</Text>  {el.url}
                                </Text>
                                <Text pt='2' fontSize='sm' display='flex' p='2%'>
                                    <Box display='flex' gap='4vw'>
                                        <Stat>
                                            <StatLabel>Clicked</StatLabel>

                                            <StatHelpText>
                                                <StatArrow type='decrease' />
                                                9.05%
                                            </StatHelpText>
                                        </Stat>
                                        <Stat>
                                            <StatLabel>Shared</StatLabel>

                                            <StatHelpText>
                                                <StatArrow type='decrease' />
                                                9.05%
                                            </StatHelpText>
                                        </Stat>
                                    </Box>
                                </Text>
                                <Button colorScheme='teal' size='sm' w='90%'>
                                    Remove
                                </Button>
                            </Box>


                        </Card >
                    )
                })
            }
        </>
    )
}

export default Links
