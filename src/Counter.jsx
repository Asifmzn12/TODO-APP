import { useSelector,useDispatch } from "react-redux";
import { Increment,Decrement } from "./ComplterStore";
const Counter = () => {
 const count=useSelector((state)=>state.counter)
const dispatch=useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
<button onClick={()=>dispatch(Increment())}>+</button>
<button onClick={()=>dispatch(Decrement())}>-</button>

    </div>
  );
};

export default Counter;
