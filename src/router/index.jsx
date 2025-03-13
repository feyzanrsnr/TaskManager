import { createBrowserRouter, Outlet } from "react-router";
import { MainLayout } from "../layouts/main-layout";
import { HomePage} from "../pages/home-page";
import {TasksPage,tasksPageLoader} from "../pages/tasks-page";
import { CreateTaskPage, createTaskPageSubmitAction } from "../pages/create-task-page";
import { TaskPage,taskPageLoader ,taskPageUpdateAction} from "../pages/task-page";
import {EditTaskPage,editTaskPageLoader,editTaskPagePutAction} from '../pages/edit-task-page'
import { ProjectsPage } from "../pages/projects-page";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
               index:true,
               element:<HomePage/> 
            },
            {
                path:'/tasks',
                element:<TasksPage/>,
                loader:tasksPageLoader
            },
            {
                path:'/tasks/create',
                element:<CreateTaskPage/>,
                action:createTaskPageSubmitAction
            },
            {
                path:'/tasks/:id',
                element:<TaskPage/>,
                loader:taskPageLoader,
                action:taskPageUpdateAction
            },
            {
                path: "/tasks/:id/edit",
                element: <EditTaskPage />,
                loader: editTaskPageLoader,
                action: editTaskPagePutAction,
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
            },
         
           
        ]

    }
])

export default router