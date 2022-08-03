import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Todo = ({ id, title, contents, isDone }) => {
  const dispatch = useDispatch();
  const payload = { id };
  const toggleHandler = () => {
    dispatch(updateTodo(payload));
  };
  const deleteHandler = () => {
    dispatch(removeTodo(payload));
  };
  return (
    <StyledBox>
      <StyledLink to={`/about/${id}`}>Detail</StyledLink>
      <StyledTitle>
        {title?.length <= 28 ? title : title?.slice(0, 26).concat("...")}
      </StyledTitle>
      <StyledContents>
        {contents?.length <= 36
          ? contents
          : contents?.slice(0, 33).concat("...")}
      </StyledContents>
      <StyledWrapper>
        <StyledButton onClick={deleteHandler} className='todoButton'>
          Delete
        </StyledButton>
        <StyledButton onClick={toggleHandler} className='todoButton'>
          {!isDone ? "Done" : "Cancel"}
        </StyledButton>
      </StyledWrapper>
    </StyledBox>
  );
};

export default Todo;

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
};

const StyledBox = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid #eeeeee;
  padding: 20px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  padding-left: 250px;
  font-size: 13px;
  text-decoration: none;
  color: #256ef1;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledTitle = styled.h3`
  padding: 0px 10px;
`;

const StyledContents = styled.div`
  padding: 10px 10px;
`;

const StyledWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  width: 130px;
  background-color: #eeeeee;
  color: black;
  border: none;
  border-radius: 5px;
  height: 30px;
  &:hover {
    background-color: #256ef1;
    color: white;
    transform: scale(1.1);
  }
`;
