import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// TODO 내부에서 하나만 가져오는게 더 효율적인 방식이긴 할까?
const Detail = (props) => {
  const { todo_id } = useParams();
  const todo = useSelector(({ todos }) =>
    todos.todos.find((todo) => todo.id === todo_id)
  );
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <StyledBox>
      <StyledButton onClick={clickHandler}>Go Back</StyledButton>
      <StyledContents>{`ID: ${todo.id}`}</StyledContents>
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledContents>{todo.contents}</StyledContents>
    </StyledBox>
  );
};

export default Detail;

const StyledBox = styled.div`
  width: 300px;
  height: 80vh;
  border: 1px solid #eeeeee;
  background-color: #f0f7ff;
  padding: 20px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  margin-left: 230px;
  width: 70px;
  height: 30px;
  background-color: #256ef1;
  color: white;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledTitle = styled.h3`
  padding: 0px 10px;
`;

const StyledContents = styled.div`
  padding: 10px 10px;
`;
