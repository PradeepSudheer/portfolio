import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div id='home' className='header-wraper'>
            <div className = 'main-info'>
                <h1>Pradeep Chelamala</h1>
                <Typed 
                    className = 'typed-text'
                    strings={ ["Software Developer", "Front-End Engineer", "Android Developer", "Student","Teaching Assistant"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href='#' className='btn-main-offer'>Contact Me</a>
            </div>
        </div>
    )
}

export default Header

