import { Link } from "react-router";
import styled from "styled-components";

export const TasksPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m);
`;

export const TasksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-m);
`;

export const TaskListItem = styled.li``;

export const Task = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  background-color: var(--dark-blue);
  padding: var(--space-m);
  border-radius: var(--border-radius-s);

  border-left: 2px solid
    ${({ $isCompleted }) => ($isCompleted ? "var(--green)" : "var(--red)")};
`;

export const TaskName = styled.h2``;

export const TaskDescription = styled.p``;

export const TaskCompleted = styled.p`
  font-size: var(--font-s);
`;

export const Button = styled(Link)`
  background-color: var(--green);
  color: var(--dark-blue);
  padding: var(--space-m) var(--space-xl);
  border-radius: var(--border-radius-s);
`;

export const ButtonDiv = styled.div`
  display:flex;
  margin:var(--space-s);
`;

export const FilterButton = styled(Link)`
  background-color: transparent;
  color: var(--gray);
  border: 1px solid var(--gray);
  padding: var(--space-m) var(--space-xl);
  border-radius: var(--border-radius-l);
  margin: var(--space-m);

  &:hover {
    color: var(--white);
    background-color: var(--green-opaque);
  }
`;