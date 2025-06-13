import React ,{useState, useEffect} from 'react'
import * as S from './styles'
import {EmptyTasks} from './empty-tasks'
import { useLoaderData } from 'react-router'

function TasksPageContainer() {
  const tasks = useLoaderData();
  // console.log(tasks);

  const [filter, setFilter] = useState("all");

  

  const filteredTasks = tasks.filter((task) => {
    if(filter === "completed") return task.completed;
    if(filter === "not-completed") return !task.completed;
    return true;
  })

 
  
  return (
    <S.TasksPageContainer>
      {!tasks?.length ? (
        <EmptyTasks/>
      ) : (
        <>
        <S.Button to="/tasks/create">Create Task</S.Button>
        <S.ButtonDiv>
        <S.FilterButton onClick={() => setFilter("all")}>All</S.FilterButton>
        <S.FilterButton onClick={() => setFilter("completed")}>Completed</S.FilterButton>
        <S.FilterButton onClick={() => setFilter("not-completed")}>Not Completed</S.FilterButton>
        </S.ButtonDiv>
        
          <S.TasksList>
            {filteredTasks.map((task) => (
              <S.TaskListItem key={task.id}>
                <S.Task to={`/tasks/${task.id}`} $isCompleted={task.completed}>
                  <S.TaskCompleted>
                    {task.completed ? "Completed" : "Not completed"}
                  </S.TaskCompleted>
                  <S.TaskName>{task.name}</S.TaskName>
                  <S.TaskDescription>{task.description}</S.TaskDescription>
                </S.Task>
              </S.TaskListItem>
            ))}
          </S.TasksList>
        </>
      )}
      
    </S.TasksPageContainer>
  )
}

export  {TasksPageContainer}