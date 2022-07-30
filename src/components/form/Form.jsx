import "./style.css";
import React from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/todos";

// TODO enter 쳤을 때도 기능하도록하기
// TODO 스타일 고치기
const Form = (props) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    const id = event.target.className;
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
    <div className='wrapper'>
      <form>
        <div className='container'>
          <label htmlFor='title'>제목</label>
          <input
            type='text'
            className='title'
            value={title}
            onChange={changeHandler}
          />
        </div>
        <div className='container'>
          <label htmlFor='content'>내용</label>
          <input
            type='text'
            className='content'
            value={content}
            onChange={changeHandler}
          />
        </div>
        <button type='submit' onClick={addTodo}>
          추가하기
        </button>
      </form>
    </div>
  );
};

export default Form;
