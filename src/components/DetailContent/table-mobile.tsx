import { Avatar, AvatarGroup } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Box, Divider, Flex, Grid, GridItem, Heading, HStack, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { Switch } from "@chakra-ui/switch";
import React, { useState } from "react";
import { MdCopyAll, MdExpandLess, MdExpandMore, MdMoreHoriz, MdOutlineDeleteOutline } from "react-icons/md";
import { InterviewItem as itemProp } from "types/interview-item";

interface props {
    list?: itemProp[];
}

export default function TableMobile({ list }: props) {
    return list?.length > 0 ? (
        <VStack>
            {list?.map((interview) => {
                return <InterviewItem key={interview.detail} item={interview} />;
            })}
        </VStack>
    ) : (
        <Skeleton width="full">
            <InterviewItem />
        </Skeleton>
    );
}

function InterviewItem({ item }: { item?: itemProp }) {
    const [isExpand, setIsExpand] = useState(false)
    return (item ?
        <Box
            p={5}
            boxShadow="0px 8px 70px rgba(229, 235, 250, 0.5)"
            flex="1"
            flexDir="column"
            borderRadius="20px"
            background="white"
            width="full"
            display="flex"
            color="#16182F"
        >
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                <GridItem colSpan={4}><Heading fontSize="20"  >{item.detail}</Heading></GridItem>
                <Grid templateColumns="repeat(3, 1fr)" gap={3} color="#7989B1" fontSize="20px">
                    <Icon as={MdCopyAll} />
                    <Icon as={MdOutlineDeleteOutline} />
                    <Icon as={MdMoreHoriz} />
                </Grid>
            </Grid>
            <Flex justifyContent="space-around" px={3} py={5} mt={5} background="linear-gradient(90.11deg, #6195fe32 0.1%, #fe5a1939 99.91%)" borderRadius="12px">

                <Flex flexDir="column">
                    <Text fontSize="14px" color="#6196FE">Created</Text>
                    <Text fontSize="18px" color="#1C2640">{item.created}</Text>
                </Flex>
                <Divider orientation="vertical" colorScheme="gray" />
                <Flex flexDir="column">
                    <Text fontSize="14px" color="#FE5819">Expired</Text>
                    <Text fontSize="18px" color="#1C2640">{item.created}</Text>
                </Flex>
            </Flex>
            {
                isExpand && <>
                    <HStack my={3} width="full" justifyContent="space-between">
                        <Flex flexDir="column" >
                            <Text fontSize="14px" color="#7989B1">Created by</Text>

                            <HStack mt={2} ml={2}>
                                <Avatar size="sm" name={item.createdBy} />
                                <Heading fontSize="12px" >{item.createdBy.split(' ')[0]}</Heading>
                            </HStack>
                        </Flex>
                        <Flex flexDir="column" >
                            <Text fontSize="14px" color="#7989B1">Assigned by</Text>
                            <HStack mt={2} ml={2}>
                                <Avatar size="sm" name={item.assignedBy} />
                                <Heading fontSize="12px">{item.assignedBy.split(' ')[0]}</Heading>
                            </HStack>
                        </Flex>
                    </HStack>
                    <Divider />
                    <SimpleGrid columns={2} spacing={10} my={4}>
                        <VStack>
                            <Heading size="sm">{item.candidates}</Heading>
                            <Text fontSize="14px" color="#7989B1">Candidates</Text>
                        </VStack>
                        <VStack>
                            <Heading size="sm">{item.response}</Heading>
                            <Text fontSize="14px" color="#7989B1">Responses</Text>
                        </VStack>
                        <VStack>
                            <Heading size="sm">{item.analysed}</Heading>
                            <Text fontSize="14px" color="#7989B1">Analyzed</Text>
                        </VStack>
                        <VStack>
                            <Heading size="sm">{item.shortlisted}</Heading>
                            <Text fontSize="14px" color="#7989B1">Shortlisted</Text>
                        </VStack>
                    </SimpleGrid>
                </>
            }
            <Flex mt={3}>
                <Switch size="md" />
                <Spacer />
                <HStack color="#7989B1" onClick={() => setIsExpand(!isExpand)}>
                    {!isExpand ? <><Text >Expand </Text> <Icon as={MdExpandMore} /> </> : <><Text >Collapse </Text> <Icon as={MdExpandLess} /></>} </HStack>
            </Flex>

        </Box> : <Skeleton width="full">
            <Heading fontSize="md">hello</Heading>
            <Flex>
                <Icon as={MdCopyAll} />
                <Icon as={MdOutlineDeleteOutline} />
                <Icon as={MdMoreHoriz} />
            </Flex>
        </Skeleton>
    );
}
