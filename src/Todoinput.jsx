// TodoInput.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './ComplterStore';
import { IoIosAddCircle } from "react-icons/io";


const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className='container px-0'>
      <h1 className=' text-center p-0 m-0'>Todo App</h1>
      <div className='row py-3 gy-3 rounded'>
        <div className='col-md-10'>

          <input type="text" className="form-control  py-3" value={text} onChange={(e) => setText(e.target.value)} />

        </div>
        <div className='col-md-2'>
          <button type="button" className="btn btn-success py-3 w-100" onClick={handleAddTodo}><IoIosAddCircle size={25}/> </button>


        </div>

      </div>

    </div>

  );
};

export default TodoInput;
