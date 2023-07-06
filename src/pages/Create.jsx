import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast
} from "@chakra-ui/react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import { TasksContext } from "../context/TasksContext";


export default function Create() {
  const toast = useToast();
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TasksContext);
  const [newTask, setNewTask] = useState({
    id: tasks.length + 1,
    title: "",
    description: "",
    isPriority: false,
    author: "",
    img: "",
  });
  const ToastCreate = () => {
    toast({
      title: "Task Created.",
      description: "Your task has been created successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleTitleChange = (e) => {
    setNewTask({ ...newTask, title: e.target.value });
  };
  const handleDescriptionChange = (e) => {
    setNewTask({ ...newTask, description: e.target.value });
  };
  const handlePriorityChange = (e) => {
    setNewTask({ ...newTask, isPriority: e.target.checked });
  };
  const handleAuthorChange = (e) => {
    setNewTask({ ...newTask, author: e.target.value });
  };
  const handleImgChange = (e) => {
    setNewTask({ ...newTask, img: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    navigate("/");
    ToastCreate();
  };

  return (
    <Box maxWidth={"480px"}>
      <Form method="post" action="/create">
        <FormControl isRequired mb={"40px"}>
          <FormLabel>Task Name:</FormLabel>
          <Input
            type="text"
            name="title"
            borderColor={"purple.400"}
            onChange={handleTitleChange}
          />
          <FormHelperText>Enter a name for your task.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb={"40px"}>
          <FormLabel>Task Description:</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter a description..."
            borderColor={"purple.400"}
            onChange={handleDescriptionChange}
          />
        </FormControl>
        <FormControl isRequired mb={"40px"}>
          <FormLabel>Author:</FormLabel>
          <Input
            type="text"
            name="author"
            borderColor={"purple.400"}
            onChange={handleAuthorChange}
          />
        </FormControl>
        <FormControl isRequired mb={"40px"}>
          <FormLabel>Image Link:</FormLabel>
          <Input
            type="link"
            name="img"
            borderColor={"purple.400"}
            onChange={handleImgChange}
          />
        </FormControl>
        <FormControl display={"flex"} alignItems={"center"} mb="40px">
          <Checkbox
            name="isPriority"
            size="lg"
            colorScheme="purple"
            borderColor={"purple.400"}
            onChange={handlePriorityChange}
          />
          <FormLabel mb={0} ml={"10px"}>
            Mark this a priority task.
          </FormLabel>
        </FormControl>
        <Button type="submit" colorScheme="purple" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  return redirect("/");
};
