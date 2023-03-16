import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './store/actions/TodosActions';

function Todos(props) {

    const {isLoding, todos,error } = useSelector(state =>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTodos());
    },[]);

    return (
        <div>
            {
                isLoding && <div> Loding ...</div>
            }
            {
                error && <div>{error.message}</div>
            }

            <div className='grid grid-cols-4 p-3 gap-1 '>
                {
                    todos && todos.map((todo)=>{
                        return (
                            <div className='bg-red-400' key={todo.id}>
                                <div className=' p-2'>
                                    {todo.id}
                                </div>
                                <div className='text-start p-2 text-lg bg-red-300 text-justify'>
                                    {todo.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Todos;