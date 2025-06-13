import React from 'react'
import {CreateTaskPageContainer} from '../../containers/create-task-page-container'
import { addTask } from '../../services/task'
import { redirect } from 'react-router'

function CreateTaskPage() {
  return (
    <CreateTaskPageContainer/>
  )
}

export const createTaskPageSubmitAction = async ({request}) => {
    const formData = await request.formData();

    const id = crypto.randomUUID();
    const name = formData.get("task-name");
    const description = formData.get("task-description");

    await addTask({
        id,
        name,
        description,
        completed:false
    })

    return redirect(`/tasks/${id}`);
}

export  {CreateTaskPage}