import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

import './Main.scss'

function Main(){
    return(
        <div className='mainWrapper'>
            <Form />
            <TodoList />
        </div>
    );
}

export default Main;