import styled from "styled-components";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/todos";

// TODO enter 쳤을 때도 기능하도록하기
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const changeHandler = (event) => {
    const id = event.target.id;
    if (id === "title") {
      setTitle(event.target.value);
    } else {
      setContent(event.target.value);
    }
  };

  const addTodo = (event) => {
    event.preventDefault();
    dispatch(createTodo(title, content));
    setTitle("");
    setContent("");
  };
  return (
    <StyledForm>
      <StyledContainer>
        <StyledLabel htmlFor='title'>Title</StyledLabel>
        <StyledInput
          type='text'
          id='title'
          value={title}
          onChange={changeHandler}
        />
      </StyledContainer>
      <StyledContainer>
        <StyledLabel htmlFor='content'>Contents</StyledLabel>
        <StyledInput
          type='text'
          id='content'
          value={content}
          onChange={changeHandler}
        />
      </StyledContainer>
      <StyledButton
        type='submit'
        onClick={addTodo}
        disabled={title && content ? false : true}
      >
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100px;
  background-color: #eeeeee;
  align-items: center;
  justify-content: space-around;
`;

const StyledContainer = styled.div``;

const StyledLabel = styled.label`
  font-size: 15px;
`;

const StyledInput = styled.input`
  margin-left: 30px;
  border: none;
  border-radius: 5px;
  width: 30vw;
  height: 30px;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  background-color: #256ef1;
  color: white;
  &:hover {
    transform: scale(1.1);
  }
`;
