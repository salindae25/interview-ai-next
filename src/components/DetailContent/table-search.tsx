import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function TableSearch() {
    const [isSmallerScreen] = useMediaQuery("(max-width: 768px)")
    return (
        <InputGroup borderRadius={isSmallerScreen ? "25px" : "25px 25px 0px 0px"} mb={isSmallerScreen ? "30px" : "0"} width="full" height="60px" background="white" alignItems="center" display="flex" boxShadow={{ sm: "0px 8px 70px rgba(229, 235, 250, 0.5)", lg: "0px 0px 10px rgba(183, 201, 218, 0.1" }}>
            <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                height="full"
                ml="10px"
                children={<MdSearch color="gray.300" size="24" />}
            />
            <Input pl="50px" borderRadius={isSmallerScreen ? "25px" : "25px 25px 0px 0px"} type="text" placeholder="Search Interview" width="full" height="full" />
        </InputGroup>

    )
}
