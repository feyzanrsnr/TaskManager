import React from 'react'
import { TasksPageContainer } from '../../containers/tasks-page-container'
import {getTasks} from '../../services/task'

function TasksPage() {
  return (
    <TasksPageContainer />
  )
}

export const tasksPageLoader = () => {
    return getTasks();
}

export {TasksPage}