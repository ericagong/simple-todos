import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

import { useSelector } from "react-redux";

const Layout = (props) => {
  const my_todos = useSelector((state) => state.todos.todos);
  const workingList = my_todos.filter((li) => !li.isDone);
  const doneList = my_todos.filter((li) => li.isDone);
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
