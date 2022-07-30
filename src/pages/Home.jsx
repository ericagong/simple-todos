import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import TodoList from "../components/todolist/TodoList";

const Home = (props) => {
  return (
    <div className='Home'>
      <Layout>
        <Header />
        <Form />
        <TodoList />
      </Layout>
    </div>
  );
};

export default Home;
