import React from 'react'
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {

    const serviceID = 'service_0esdwxn';
    const templateID = 'template_1yg4715';
    const userID = 'user_tu8iGOSGvDX3QB4SXMRe7';

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div id='contact' className='contacts'>
            <div className='text-center'>
                <h1>contact me</h1>
                <p> Please fill out the form and submit. I'll contact you as soon as possible.</p>
            </div>
            <div className='container'>     
                <form onSubmit={sendEmail}>               
                <div className='row'>
                    <div classNmae = 'col-md-5 col-xs-12'>
                        {/* NAME INPUT */}
                        <div className='text-center'>
                            <input
                                id='name'
                                type="text"
                                className = 'form-control'
                                placeholder='name'
                                name='name'
                            />
                            <div className='line'></div>
                        </div>
                        
                        {/* PHONE INPUT */}
                        <div className='text-center'>
                            <input
                                id='phone'
                                type="text"
                                className = 'form-control'
                                placeholder='Phone Number'
                                name='phone'
                            />
                            <div className='line'></div>
                        </div>
                        {/* EMAIL INPUT */}
                        <div className='text-center'>
                            <input
                                id='email'
                                type="email"
                                className = 'form-control'
                                placeholder='Email'
                                name='email'
                            />
                            <div className='line'></div>
                        </div>
                        {/* SUBJECT INPUT */}
                        <div className='text-center'>
                            <input
                                id='subject'
                                type="text"
                                className = 'form-control'
                                placeholder='Subject'
                                name='subject'
                            />
                            <div className='line'></div>
                        </div>
                    </div>
                    <div className = 'col-md-6 col-xs-12'>
                        <div className='text-center'>
                            {/*DESCRIPTION */}
                            <textarea 
                                id='description'
                                type='text'
                                className='form-control'
                                placeholder='Email'
                                name='email'
                            ></textarea>
                            <div className='line'></div>
                        </div>
                        <button className='btn-main-offer contact-btn' type='submit'>Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
