import styled from "styled-components";

export const PomodoroPageContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:100px;
`;

export const FlexDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  gap:15px;
`;

export const TimerButton = styled.button`
  background-color: ${({isActive}) => (isActive ? "var(--green-opaque)" : "transparent")};
  color: ${({isActive}) => (isActive ? "var(--white)" : "var(--gray)")};
  border: 1px solid var(--gray);
  padding: var(--space-m) var(--space-xl);
  border-radius: var(--border-radius-l);
  margin: var(--space-m);

  &:hover {
    color: var(--white);
    background-color: var(--green-opaque);
  }

 
`;

export const Text = styled.p`
  font-size: 100px;
  font-weight:600;
`;

export const BasicButton = styled.button`
  background-color: var(--white);
  color: var(--dark-blue);
  font-weight:600;
  border: none;
  border-radius:var(--border-radius-l);
  width:100px;
  height:40px;
`;

export const RestartButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: var(--font-xxl);
  display: flex;
  align-items: center;
  justify-content: center;
`;


