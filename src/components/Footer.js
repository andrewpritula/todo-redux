import React from 'react';
import './Footer.scss';

function Footer(){
    return(
        <div className='footerWrapper'>
            <div className='footerContent'>
            <a href='https://learn.javascript.ru/' alt='js documentation'>
                <p className='footerItem'>JS Docs</p>
                </a>
            <a href='https://ru.reactjs.org/docs/getting-started.html' alt='react documentation'>
                <p className='footerItem'>React Docs</p>
                </a>
            <a href='https://redux.js.org/' alt='redux documentation'>
                <p className='footerItem'>Redux Docs</p>
            </a>
            </div>
        </div>
    );
}

export default Footer;