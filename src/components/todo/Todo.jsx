import "./style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../../redux/modules/todos";

// TODO onClick () => {} 쓸지 바로 함수 쓸지 어떤게 더 성능에 좋은지 고민해보기
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
