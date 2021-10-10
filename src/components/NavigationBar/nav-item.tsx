import { NavItem as Item } from "types/nav-item";
import { Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { Box, Flex, HStack, Link, VStack } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";

type props = {
    isActive: boolean,
    item: Item,
}

export const NavItem = ({ isActive, item }: props) => {
    const { label, icon } = item;

    return (
        <NextLink href="#" passHref>
            <Link variant="unstyled" _hover={{ textDecoration: "none" }}>
                <VStack
                    width="125px"
                    height="full"
                    align="center"
                    transition="ease-out"
                    transitionProperty="border, color"
                    transitionDuration="normal"
                    color={isActive ? "#1C2640" : "#7989B1"}
                    _hover={{
                        color: "#1C2640",


                    }}

                >
                    <Flex height="calc(100% - 8px)" align="center" justifyContent="space-evenly">
                        <Icon as={icon} mr="5px" />
                        <Text fontSize="sm">{label}</Text>
                    </Flex>
                    <Box width="full" background={isActive ? "#6196FE" : "#fff"} height="4px" borderRadius="50px 50px 0px 0px" />
                </VStack>
            </Link>
        </NextLink >
    )
}