// TodoList.js
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, removeTodo } from './ComplterStore';
const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    const handleUpdate = (id, newText) => {
        dispatch(updateTodo(id, newText));
    };

    return (

        <div className='container p-0'>
            <div className=''>
            {todos.length === 0 ? (
                <h4 className=' py-4 text-center text-uppercase'>Add todo in container</h4>
              ) : (
                <ul className="list-group">
                    {todos.map((todo) => (
                        <li className='list-group-item' key={todo.id}>
                            <div className='row py-3 gy-3 align-items-center'>
                                <div className='col-md-8 h5 text-muted bordr'>
                                    {todo.text}
                                </div>
                                <div className='col-md-4 d-flex justify-content-md-end justify-content-sm-start justify-content-center'>
                                    <div className='row'>
                                        <div className='col'>
                                            <button type="button" className="btn btn-danger" onClick={() => handleRemove(todo.id)}>Remove</button>
                                        </div>

                                        <div className='col'>
                                            <button type="button" className="btn btn-secondary text-white" onClick={() => handleUpdate(todo.id, prompt('Enter new text:', todo.text))}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
                )}

              
                  </div>

        </div>
    );
};

export default TodoList;
