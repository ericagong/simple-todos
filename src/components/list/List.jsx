import "./style.css";
import Todo from "../todo/Todo";

const List = ({ list }) => {
  // TODO key 값 인덱스로 주지 말기!! nanoid 패키지 사용해보기!
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
