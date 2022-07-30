import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import Contents from "../components/contents/Contents";

const TodoList = (props) => {
  return (
    <div className='TodoList'>
      <Layout>
        <Header />
        <Form />
        <Contents />
      </Layout>
    </div>
  );
};

export default TodoList;
