import { Button } from "@chakra-ui/button"
import { MdAdd, MdArrowDropDown, MdExpandMore, MdOutlineArrowDropDown } from "react-icons/md"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import TableSearch from "components/DetailContent/table-search"
import { useMediaQuery } from "@chakra-ui/media-query"
import Icon from "@chakra-ui/icon"
import TableMobile from "components/DetailContent/table-mobile"
import { list as data } from "mockData/interview-data";

export const DetailContent = () => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 768px)")
    return (
        <VStack height="full" style={{ width: "calc(100% - 30px)" }} px={{ lg: "max(5%,20px)", sm: "20px" }} >
            {/** mobile heading and add */}
            <Box my="10px" display={{ sm: "flex", md: 'flex', lg: 'none' }} width="100%" >
                <Flex flexDir="row" alignItems="center" justifyContent="space-between" width="100%">
                    <Heading as="h5" size="sm" >
                        All Interviews
                    </Heading>
                    <Box color="blue.400" bg="#F8FAFF" fontSize="16px"> <MdAdd scale="2" /></Box>
                </Flex>


            </Box>

            {/** table search */}
            <TableSearch />
            {isSmallerScreen ?
                <Flex justifyContent="flex-start" width="100%" color="#7989B1" pb="10px">
                    <Text fontSize="16px" >10 - 200 Results</Text> <Icon as={MdExpandMore} fontSize="24px" />
                </Flex> : null}
            {/** table  */}
            {isSmallerScreen ? <TableMobile list={data} /> : null}
        </VStack>)
}