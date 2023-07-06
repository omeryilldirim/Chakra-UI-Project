import { ViewIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  SimpleGrid,
  Text,
  Flex,
  Box,
  Heading,
  Button,
  Divider,
  Avatar,
  Center,
  useToast
} from "@chakra-ui/react";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
// import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  // const tasks = useLoaderData();
  const { tasks, setTasks } = useContext(TasksContext);
  const toast = useToast();

  const ToastDelete = () => {
    toast({
      title: "Task Deleted.",
      description: "Your task has been deleted successfully!",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    ToastDelete();
  };

  return (
    <SimpleGrid spacing={10} minChildWidth="375px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            shadow="lg"
            borderTop={"8px"}
            borderColor={"purple.400"}
            bg={"white"}
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as={"h3"} size={"sm"}>
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color={"gray.500"}>
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor={"gray.300"} />
            <CardFooter m={"auto"}>
              <Center>
                <Button variant={"ghost"} leftIcon={<ViewIcon />}>
                  Watch
                </Button>

                <Button variant={"ghost"} leftIcon={<EditIcon />}>
                  Comment
                </Button>

                <Button
                  variant={"ghost"}
                  leftIcon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </Button>
              </Center>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const response = await fetch(" http://localhost:3000/tasks");
  const data = await response.json();
  return data;
};
