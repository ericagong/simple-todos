import styled from "styled-components";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/todos";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  const changeHandler = (event) => {
    const id = event.target.id;
    if (id === "title") {
      setTitle(event.target.value);
    } else {
      setContents(event.target.value);
    }
  };
  const addTodo = (event) => {
    event.preventDefault();
    const payload = { title, contents };
    dispatch(createTodo(payload));
    setTitle("");
    setContents("");
  };

  return (
    <StyledForm onsubmit={addTodo}>
      <StyledContainer>
        <StyledLabel htmlFor='title'>Title</StyledLabel>
        <StyledInput
          type='text'
          id='title'
          value={title}
          onChange={changeHandler}
          required
        />
      </StyledContainer>
      <StyledContainer>
        <StyledLabel htmlFor='contents'>Contents</StyledLabel>
        <StyledInput
          type='text'
          id='contents'
          value={contents}
          onChange={changeHandler}
          required
        />
      </StyledContainer>
      <StyledButton
        type='submit'
        onClick={addTodo}
        disabled={title && contents ? false : true}
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
  &:disabled {
    background-color: gray;
  }
  &:not(:disabled) + &:hover {
    transform: scale(1.1);
  }
`;
