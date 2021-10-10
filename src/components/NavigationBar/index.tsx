import { Image } from "@chakra-ui/image"
import { Stack, VStack, Box, List, ListItem, Grid } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"
import { Logo } from "components/Logo"
import { NavItem } from "components/NavigationBar/nav-item"
import { FaBars } from "react-icons/fa"
import { MdOutlineNotifications } from "react-icons/md"
import { navItems } from "./nav-data";

export const NavigationBar = () => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 768px)")

    return (
        <Box bg="white" height="70px" width="full" px={{ lg: "max(5%,20px)", sm: "20px" }} display="flex" alignItems="center" justifyContent={['space-evenly', 'space-between']} >
            <Box color="black" fontSize="16px" py="5px" mx="20px" display={{ sm: 'flex', lg: 'none' }}> <FaBars scale="2" /></Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={3} height="full" verticalAlign="center" >
                <Box display="flex" alignItems="center" >
                    <Logo />
                </Box>

                {!isSmallerScreen ? <List width="auto" height="full" display="flex" alignItems="center" justifyContent="space-evenly" >
                    {navItems.map((item, index) =>
                    (<ListItem key={item.label} height="full">
                        <NavItem item={item} isActive={index === 1} />
                    </ListItem>
                    ))}
                </List> :
                    <Box display="flex" width="auto" height="full" alignItems="center">
                        {navItems[1].label}
                    </Box>}
            </Grid>
            <Box color="black" py="5px" mx="20px" display={{ sm: 'flex', lg: 'none' }}> <MdOutlineNotifications size="20px" /></Box>
            <Image src="/images/profile.png" objectFit="contain" />

        </Box >
    )
}