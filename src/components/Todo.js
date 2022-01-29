import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, markCompleted } from '../store/todos/actions';
import deleteIcon from '../assets/images/delete.png'
import markIcon from '../assets/images/mark.png'
import './Todo.scss'

function Todo({item}){
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeTodo(item))
    }

    const handleEdit = () => {
        dispatch(markCompleted(item));
    }

    return(
        <div className='itemWrapper'>
            <div className='titleWrapper'>
                <li className='item'>{item.text}</li>
                <p className='completed'>Completed: {item.isCompleted ? 'Yes' : 'No'}</p>
            </div>
            <div className="buttonWrapper">
                <button className='item-button' onClick={() => handleEdit(item)}>
                    <img className='item-icon' src={markIcon} alt='delete'/>
                </button>
                <button className='item-button' onClick={() => handleRemove(item)}>
                    <img className='item-icon' src={deleteIcon} alt='delete'/>
                </button>
            </div>
        </div>
    );
}

export default Todo;
