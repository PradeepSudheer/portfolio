import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1>experience</h1>
            </div>
            <div className='container experience-wrapper'>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>Wipro Technologies</h3>
                        <h3>2018-2019</h3>
                        <ul>
                            <li>Developed the backend server with Spring Boot, involving different layers of the application including
entity/model, DAO/repository, Controller, Service, Business, and Persistence</li>
                            <li>Involved in creating and designing a database, and connect the database with Hibernate (ORM)</li>
                            <li>Worked on RESTful API to create services, tested on Postman</li>
                            <li>Started the front-end application with React and used state object React Class Component for general stateful
management</li>
                            <li>Enhanced user experience with React’s lifecycle hooks</li>
                            <li>Used axios for HTTP requests and attached Bearer token for secure usage of API</li>
                            <li>Practiced latest ES6 features including let, const, and arrow function</li>
                            <li>Used JIRA to track the progress of the project</li>
                            <li>Responsible for design and maintenance of the Git repositories.</li>
                        </ul>
                    </div>
                </div>
                {/*Smartron Experience */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>Smartron India Pvt. Ltd.</h3>
                        <h3>2017-2018</h3>
                        <ul>
                            <li>Conceptualized, developed, and tested e-commerce web application, core functionality, and third-party APIs</li>
                            <li>Designed REST API endpoints using Spring Boot, JPA(ORM), MYSQL</li>
                            <li>Created models to implement save, retrieve, update and delete(CRUD) operations</li>
                            <li>Partnered closely with cross functional teams and front end implementation of the application in identifying
bugs, user experience issues, and functionality problems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
