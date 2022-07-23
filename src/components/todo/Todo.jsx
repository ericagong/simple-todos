import "./style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../../redux/modules/todos";

const Todo = ({ id, title, content, isDone }) => {
  // isDone 여부에 따라 취소, 완료 조건부 렌더링
  // TODO 왜 오류?
  // const deleteBtn = React.useRef();
  // const toggleBtn = React.useRef();
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(updateTodo(id));
  };
  const deleteHandler = () => {
    dispatch(removeTodo(id));
  };
  return (
    <div className='box'>
      <h3 className='title'>{title}</h3>
      <div className='contents'>{content}</div>
      <div className='buttons'>
        <button onClick={deleteHandler} className='Btn'>
          Delete
        </button>
        <button onClick={toggleHandler} className='Btn'>
          {!isDone ? "Done" : "Cancel"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
