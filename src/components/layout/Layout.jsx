import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

import { useSelector } from "react-redux";

// TODO Layout props.children 사용하는 형태로 바꾸기
// TODO 분리 사용의 장점 알아보기
// TODO JS filter 함수 동작원리 파악해 map과의 성능차이 알아보기
const Layout = (props) => {
  // TODO reducer 이름 어디서 정하는지 알아보기, 데이터명 여러개인 경우?
  const my_todos = useSelector((state) => state.todos.todos);
  const workingList = my_todos.filter((todo) => !todo.isDone);
  const doneList = my_todos.filter((todo) => todo.isDone);
  return (
    <div>
      <Header></Header>
      <Form></Form>
      <div className='layout'>
        <div className='container'>
          <div className='category'>Working.. 🔥</div>
          <List list={workingList}></List>
        </div>
        <div className='container'>
          <div className='category'>Done..! 🎉</div>
          <List list={doneList}></List>
        </div>
      </div>
    </div>
  );
};

export default Layout;
