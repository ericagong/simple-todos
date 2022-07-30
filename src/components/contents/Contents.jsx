import styled from "styled-components";

import React from "react";
import { useSelector } from "react-redux";
import List from "../list/List";

const Contents = (props) => {
  const allTodos = useSelector(({ todos }) => todos.todos);
  const workingList = allTodos.filter((todo) => !todo.isDone);
  const doneList = allTodos.filter((todo) => todo.isDone);
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledCategory>Working.. 🔥</StyledCategory>
        <List list={workingList}></List>
      </StyledContainer>
      <StyledContainer>
        <StyledCategory>Done..! 🎉</StyledCategory>
        <List list={doneList}></List>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Contents;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100px;
  margin: 20px;
  max-width: 1200px;
  min-width: 800px;
`;

const StyledContainer = styled.div``;

const StyledCategory = styled.div`
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: bold;
`;
