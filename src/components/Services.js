import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id='profiles' className='services'>
            <h1 className='py-5'>Profiles</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6'>
                            <a href='https://www.linkedin.com/in/pradeepsudheer/'>
                                <div className='box'>
                                    <div className='circle'><FontAwesomeIcon  className='icon' icon={faLinkedin} size='2x'/></div>
                                    <h3>LinkedIn</h3>
                                </div>
                            </a>
                              
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>    
                                <a href='https://github.com/PradeepSudheer'>
                                    <div className='circle'><FontAwesomeIcon  className='' icon={faGithub} size='2x'/></div>
                                    <h3>Github</h3>
                                </a>
                            </div>
                            
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <a href = 'https://leetcode.com/Heisenberg_09/'>
                                    <div className='circle'><FontAwesomeIcon  className='' icon={faFileCode} size='2x'/></div>
                                    <h3>Leetcode</h3>
                                </a>
                                
                            </div>
                            
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <a href='https://drive.google.com/file/d/1KOXMJNqS4tzgev9sbJposR6Mc0Dr0FQZ/view?usp=sharing'>
                                    <div className='circle'><FontAwesomeIcon  className='' icon={faGoogleDrive} size='2x'/></div>
                                    <h3>Resume</h3>
                                </a>    
                                
                                </div>
                        </div>
                    </div>
                </div>
        
        </div>
    )
}

export default Services
