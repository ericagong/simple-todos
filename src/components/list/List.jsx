import "./style.css";
import Todo from "../todo/Todo";

const List = ({ list }) => {
  const todos = list.map((li, i) => (
    <Todo
      key={i}
      id={li.id}
      title={li.title}
      content={li.content}
      isDone={li.isDone}
    ></Todo>
  ));
  return <div className='list'>{todos}</div>;
};

export default List;
