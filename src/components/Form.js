import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos/actions';
import { v4 as uuidv4 } from 'uuid';
import addIcon from '../assets/images/add.png';
import './Form.scss';

function Form(){
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setInputText(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(inputText === ''){
            alert('Sorry, empty field');
        }
        else {
            dispatch(addTodo({id: uuidv4(), text: inputText, isCompleted: false}));
            setInputText('');
        }
    }

    return(
        <form onSubmit={onSubmitHandler} className='form'>
            <input type="text" className="todo-input" onChange={onChangeHandler} value={inputText}/>
            <button className="todo-button" type="submit">
                <img src={addIcon} alt="add" className='img-btn'/>
            </button>
        </form>
    );
}

export default Form;
