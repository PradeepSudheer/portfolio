import React from 'react';
import author from '../me.jpeg';

const AboutMe = () => {
    return (
        <div id='about' className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={author} alt = 'author...'/> 
                    </div>   
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-heading'>about me</h1>
                    <p>
                    Hello, my name is Pradeep, currently pursuing master's degree in computer Science at University of North Carolina - Charlotte 
                    and I wanted to introduce myself as a potential candidate for Software Engineer Development Program. 
                    I have experience working as software engineer at Wipro Technologies and Smartron India Pvt. Ltd. 
                    I’ve very strong understanding of computer science fundamentals, data structures and algorithms
                    and well versed working with various tech stacks with Java , JavaScript and SQL and NoSQL databases, and very passionate and enthusiastic in learning new technologies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
