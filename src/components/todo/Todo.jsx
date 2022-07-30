import "./style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../../redux/modules/todos";

// id 기반 상세 페이지 전환 라우터 연결하기!
const Todo = ({ id, title, content, isDone }) => {
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
        <button onClick={deleteHandler} className='todoButton'>
          Delete
        </button>
        <button onClick={toggleHandler} className='todoButton'>
          {!isDone ? "Done" : "Cancel"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
