import React,{useEffect, useState} from 'react'
import * as S from './styles'
import { useFetcher, useLoaderData, useSubmit } from 'react-router'
import {Loading} from '../../components/loading'

function TaskPageContainer() {
  const [isStatusSubmitting, setStatusSubmitting] = useState(false);
  const task = useLoaderData();
  const fetcher = useFetcher();

  const updateCompleted = (e) => {
    setStatusSubmitting(true);
    fetcher.submit(null, { method: "put" });
  };

  useEffect(() => {
    setStatusSubmitting(false);
  }, [task]);
  return (
    <S.TaskPageContainer>
      <S.EditButton to={`/tasks/${task.id}/edit`}>Edit</S.EditButton>
      <S.TaskDetail>
        <fetcher.Form method="put">
          <S.Status completed={task.completed}>
            <input
              hidden
              type="checkbox"
              name="task-completed"
              onChange={updateCompleted}
              defaultChecked={task.completed}
            />
            {task.completed ? "Completed" : "Not completed"}
            {isStatusSubmitting && <Loading />}
          </S.Status>
        </fetcher.Form>
        <S.Name>{task.name}</S.Name>
        <S.Description>{task.description}</S.Description>
      </S.TaskDetail>
    </S.TaskPageContainer>
  )
}

export  {TaskPageContainer}