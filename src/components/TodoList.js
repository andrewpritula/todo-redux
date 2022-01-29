import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';
import './TodoList.scss'

function TodoList(){
    const { todos } = useSelector((state) => state.todosReducer);
    return(
        <>
        {todos.length < 1 && <h2>Add task</h2>}
            <ul className='todosWrapper'>
                {todos.map((item) => (
                    <Todo item={item} key={item.id}/> 
                ))}
            </ul>
        </>
    );
}

export default TodoList;
