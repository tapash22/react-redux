import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "./store/actions/CounterActions";

function Post(props) {
  const count = useSelector((state)=>state.count);
  console.log(count);
  
  const dispatch = useDispatch();

  const incrementHandler = ()=>{
    dispatch(incrementCounter());
  }

  const resetHandler = ()=>{
    dispatch(resetCounter());
  }

  const decrementHandler = ()=>{
    dispatch(decrementCounter());
  }

  return (
    <div className="w-100 h-100 flex justify-center m-10">
      <div>
        <div className="bg-red-500 p-3 w-64">Counter: {count}</div>
        <div className="flex justify-center">
        <button onClick={incrementHandler}  className="p-2 text-center text-blue-600 font-bold mt-3 border-2 rounded-xl bg-green-400">
          Increment
        </button>
        <button onClick={resetHandler}  className="p-2 text-center text-blue-600 font-bold mt-3 border-2 rounded-xl bg-green-400 mx-2">
          Reset
        </button>
        <button onClick={decrementHandler}  className="p-2 text-center text-blue-600 font-bold mt-3 border-2 rounded-xl bg-green-400">
          Decrement
        </button>
        </div>

      </div>
    </div>
  );
}

export default Post;
