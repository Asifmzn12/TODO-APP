// App.js
import { Provider } from 'react-redux';
import TodoList from './Todolist';
import TodoInput from './Todoinput';
import { store } from './ComplterStore';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container shadow rounded mt-5 py-5 main'>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
