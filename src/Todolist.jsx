// TodoList.js
import{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, removeTodo } from './ComplterStore';
import { FaEdit,FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { ImRadioUnchecked } from "react-icons/im";
import { BiSolidCheckCircle } from "react-icons/bi";





const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [updatingTodo, setUpdatingTodo] = useState(null);
  const [updatedText, setUpdatedText] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdate = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    setUpdatingTodo(todoToUpdate);
    setUpdatedText(todoToUpdate.text);
  };

  const handleUpdateConfirm = () => {
    dispatch(updateTodo(updatingTodo.id, updatedText));
    setUpdatingTodo(null);
    setUpdatedText('');
  };

  const handleUpdateCancel = () => {
    setUpdatingTodo(null);
    setUpdatedText('');
  };

  const handleComplete = (id) => {
    setCompletedTodos((prevCompletedTodos) => {
      const updatedCompletedTodos = new Set(prevCompletedTodos);

      if (updatedCompletedTodos.has(id)) {
        updatedCompletedTodos.delete(id);
      } else {
        updatedCompletedTodos.add(id);
      }

      return Array.from(updatedCompletedTodos);
    });
  };

  return (
    <div className="container p-0">
      <div className="">
        {todos.length === 0 ? (
          <h4 className="py-4 text-center text-uppercase">
            Add todo in container
          </h4>
        ) : (
          <ul className="list-group">
            {todos.map((todo) => (
              <li className="list-group-item" key={todo.id}>
                <div className="row py-3 gy-3 align-items-start">
                  {updatingTodo && updatingTodo.id === todo.id ? (
                    <>
                      <div className="col-md-8 h5 text-muted bordr">
                        <input
                          type="text"
                          className="form-control py-3"
                          value={updatedText}
                          onChange={(e) => setUpdatedText(e.target.value)}
                        />
                      </div>
                      <div className="col-md-4 d-flex py-2 justify-content-md-end justify-content-sm-start">
                        <div className="row">
                      
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleUpdateCancel()}
                            >
                              <MdCancel size={30}/>
                            </button>
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => handleUpdateConfirm()}
                            >
                              <FaEdit size={30}/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-6">
                        <h3 className={completedTodos.includes(todo.id) ? 'completed' : ''}>
                          {todo.text}
                        </h3>
                      </div>
                      <div className="col-md-6 overflow-hidden d-flex justify-content-md-end justify-content-sm-center ">
                        <div className="row justify-content-around ">
                          <div className="col-4">
                            <button
                              type="button"
                              className={`btn btn-${completedTodos.includes(todo.id) ? 'success' : 'info'}`}
                              onClick={() => handleComplete(todo.id)}
                              disabled={updatingTodo !== null}
                            >
                              {completedTodos.includes(todo.id) ? <BiSolidCheckCircle size={30} /> : <ImRadioUnchecked size={30} />}
                            </button>
                          </div>
                          <div className="col-4">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleRemove(todo.id)}
                              disabled={updatingTodo !== null}
                            >
                             <FaTrash size={30} />
                            </button>
                          </div>
                          <div className="col-4">
                            <button
                              type="button"
                              className="btn btn-secondary text-white"
                              onClick={() => handleUpdate(todo.id)}
                              disabled={updatingTodo !== null}
                            >
                              <FaEdit size={30} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
