import { Button } from "@chakra-ui/button"
import { MdAdd } from "react-icons/md"
import { Box, Flex, Heading, VStack } from "@chakra-ui/layout"

export const DetailContent = () => {
    return (
        <VStack height="full" style={{ width: "calc(100% - 20px)" }}  >
            {/** mobile heading and add */}
            <Box margin="10px" display={{ sm: "flex", md: 'flex', lg: 'none' }} width="100%">
                <Flex flexDir="row" alignItems="center" justifyContent="space-between" width="100%">
                    <Heading as="h5" size="sm" >
                        All Interviews
                    </Heading>
                    <Box color="blue.400" bg="#F8FAFF" fontSize="16px"> <MdAdd scale="2" /></Box>
                </Flex>


            </Box>
            <Box margin="10px" bg="white" display="flex" width="full" height="65px"
                borderRadius={{ sm: "12px", lg: "20px" }} boxShadow={{ sm: "0px 8px 70px rgba(229, 235, 250, 0.5)", lg: "0px 0px 10px rgba(183, 201, 218, 0.1" }} >
                All Interviews
            </Box>
            {/** table search */}
            hi
            {/** table  */}
        </VStack>)
}