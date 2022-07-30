import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {
  const allTodos = useSelector(({ todos }) => todos.todos);
  const workingList = allTodos.filter((todo) => !todo.isDone);
  const doneList = allTodos.filter((todo) => todo.isDone);
  return (
    <div className='TodoList'>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default TodoList;
