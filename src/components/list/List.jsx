import "./style.css";
import Todo from "../todo/Todo";

const List = ({ list }) => {
  // TODO key 값 nanoid 패키지 사용해보기!?!!
  const todos = list.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      content={todo.content}
      isDone={todo.isDone}
    ></Todo>
  ));
  return <div className='list'>{todos}</div>;
};

export default List;
