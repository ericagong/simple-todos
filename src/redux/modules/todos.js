// Actions
const LOAD = "todoList/todos/LOAD";
const CREATE = "todoList/todos/CREATE";
const UPDATE = "todoList/todos/UPDATE";
const REMOVE = "todoList/todos/REMOVE";

// Action Creators
export function loadTodos() {
  return { type: LOAD };
}

export function createTodo(payload) {
  return { type: CREATE, payload };
}

export function updateTodo(payload) {
  return { type: UPDATE, payload };
}

export function removeTodo(payload) {
  return { type: REMOVE, payload };
}

// initialState
const initialState = {
  todos: [
    {
      id: 0,
      title: "Wake up in the morning",
      contents: "Don't sleep over 8 hours!",
      isDone: true,
    },
    {
      id: 1,
      title: "Prepare present for HH",
      contents: "Check following options: 1. wallet 2. galaxy watch",
      isDone: false,
    },
    {
      id: 2,
      title: "Order snacks for Star - he needs snack desperately",
      contents: "1. partymix * 30 2. CIAOchur * 5 packs",
      isDone: false,
    },
    {
      id: 3,
      title: "Talk with mommy",
      contents: "explain about my planB, which means nothing.",
      isDone: true,
    },
    {
      id: 4,
      title: "Get in gather town",
      contents: "CS study @ 11:00 Team meeting @ 16:00",
      isDone: true,
    },
  ],
};

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
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false,
      };
      const new_todos = [...state.todos, new_todo];
      return { ...state, todos: new_todos };
    case UPDATE:
      const updated_todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          const updated_todo = { ...todo, isDone: !todo.isDone };
          return updated_todo;
        } else return todo;
      });
      return { ...state, todos: updated_todos };
    case REMOVE:
      const deleted_todos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: deleted_todos };
    default:
      return state;
  }
}
