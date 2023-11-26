import {createStore} from "redux"
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: { text },
  });
  
  export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: { id },
  });
  
  export const updateTodo = (id, newText) => ({
    type: 'UPDATE_TODO',
    payload: { id, newText },
  });

  const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, { id: Date.now(), text: action.payload.text }],
        };
  
      case 'REMOVE_TODO':
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
  
      case 'UPDATE_TODO':
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
          ),
        };
  
      default:
        return state;
    }
  };
  
export const store=createStore(todoReducer)
