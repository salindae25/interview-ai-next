import { HStack, VStack } from "@chakra-ui/layout";
import { DetailContent } from "components/DetailContent";
import { NavigationBar } from "components/NavigationBar";

const IndexPage = () => (
  <VStack
    height="full"
    bg="#F8FAFF"
    width="100vw"
    overflow="hidden"
    spacing="15px"
  >
    <NavigationBar />
    <DetailContent />

  </VStack>
)

export default IndexPage
