// Actions
const LOAD = "todoList/todos/LOAD";
const CREATE = "todoList/todos/CREATE";
const UPDATE = "todoList/todos/UPDATE";
const REMOVE = "todoList/todos/REMOVE";

// initialState
const initialState = {
  todos: [
    {
      id: 0,
      title: "title1..!",
      content: "contents...",
      isDone: false,
    },
    {
      id: 1,
      title: "title2...",
      content: "contents...",
      isDone: false,
    },
    {
      id: 2,
      title: "title3...",
      content: "contents...",
      isDone: false,
    },
    {
      id: 3,
      title: "title4...",
      content: "contents...",
      isDone: true,
    },
    {
      id: 4,
      title: "title5...",
      content: "contents...",
      isDone: true,
    },
  ],
};

// Action Creators
export function loadTodos() {
  return { type: LOAD };
}

export function createTodo(todo_title, todo_content) {
  return { type: CREATE, todo_title, todo_content };
}

export function updateTodo(todo_index) {
  return { type: UPDATE, todo_index };
}

export function removeTodo(todo_index) {
  return { type: REMOVE, todo_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return state;
    case CREATE:
      const todo_ids = state.todos.map((todo) => todo.id);
      const new_id = Math.max(...todo_ids) + 1;
      const new_todo = {
        id: new_id,
        title: action.todo_title,
        content: action.todo_content,
        isDone: false,
      };
      const new_todos = [...state.todos, new_todo];
      return { todos: new_todos };
    case UPDATE:
      const updated_todos = state.todos.map((todo) => {
        if (todo.id === action.todo_index) {
          const updated_todo = { ...todo, isDone: !todo.isDone };
          return updated_todo;
        } else return todo;
      });
      return { todos: updated_todos };
    case REMOVE:
      const deleted_todos = state.todos.filter(
        (todo) => todo.id !== action.todo_index
      );
      return { todos: deleted_todos };
    default:
      return state;
  }
}
