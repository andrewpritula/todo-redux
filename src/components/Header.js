import React from 'react';
import todoIcon from '../assets/images/todoIcon.png';
import gitIcon from '../assets/images/gitIcon.png';
import './Header.scss'

function Header(){
    return(
        <header className='headerWrapper'>
            <div className='headerContent'>
                <div className='headerRight'>
                    <img className='headerIcon' src={todoIcon} alt='todo-logo'/>
                    <h1>TodoApp</h1>
                </div>
                <div className='headerLeft'>
                    <a href='https://github.com/andrewpritula'>
                        <img className='headerIcon' src={gitIcon} alt='git-logo'/>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;