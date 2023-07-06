import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Button,
  Text,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast()

  const ToastLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
      status: "info",
      position: "top",
      duration: 2000,
      isClosable: true,
      icon:<UnlockIcon/>
    })
  }

  return (
    <Flex as={"nav"} p={"10px"} mb='40px' alignItems={"center"} >
      <Heading as="h1">Tasks</Heading>
      <Spacer />

      <HStack spacing={'20px'}>
        <Avatar 
        // bg={'purple'} 
        // name="mario" 
        src="/img/mario.png">
          <AvatarBadge width={'1.3em'} bg={'teal.500'}>
            <Text fontSize={'xs'} color={'white'}>3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>omeryildirim@outlook.com</Text>
        <Button colorScheme="purple" onClick={ToastLogout}>Logout</Button>
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
