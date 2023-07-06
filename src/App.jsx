import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import { TasksContext } from './context/TasksContext'
import taskList from '../data/tasks'
import { useState } from 'react'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard, { tasksLoader } from './pages/Dashboard'
import Create, { createAction } from './pages/Create'
import Profile from './pages/Profile'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader}/>
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {
  const [tasks, setTasks] = useState(taskList)
  return (
    <TasksContext.Provider value={{tasks, setTasks}}>
      <RouterProvider router={router} />
    </TasksContext.Provider>
  )
}

export default App
