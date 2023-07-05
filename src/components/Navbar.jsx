import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Spacer,
  HStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as={"nav"} p={"10px"} alignItems={"center"} >
      <Heading as="h1">Blogs</Heading>
      <Spacer />

      <HStack spacing={'20px'}>
        <Box bg={"gray.200"} p={"10px"}>
          M
        </Box>
        <Text>omeryildirim@outlook.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg={'gray.200'} justify={'space-around'} wrap={'wrap'} gap={'10'}>
    //     <Box w='150px' h='50px' bg='red'>1</Box>
    //     <Box w='150px' h='50px' bg='yellow'>2</Box>
    //     <Box w='150px' h='50px' bg='orange' flexGrow={1}>3</Box>
    //     <Box w='150px' h='50px' bg='blue' flexGrow={2}>4</Box>
    // </Flex>
  );
}
