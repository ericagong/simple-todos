import "./style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/todos";

const Form = (props) => {
  const new_title = React.useRef("");
  const new_content = React.useRef("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(createTodo(new_title.current.value, new_content.current.value));
    new_title.current.value = "";
    new_content.current.value = "";
  };
  return (
    <div className='wrapper'>
      <div className='container'>
        <label htmlFor='title'>제목</label>
        <input ref={new_title} type='text' className='title'></input>
      </div>
      <div className='container'>
        <label htmlFor='content'>내용</label>
        <input ref={new_content} type='text' className='content'></input>
      </div>
      <button onClick={addTodo}>추가하기</button>
    </div>
  );
};

export default Form;
