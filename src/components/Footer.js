import React from 'react'
let counter = 0;

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                        <p>UNC-Charlotte, North Carolina</p>
                        </div>
                        <div className="d-flex">
                        <a href="tel:555-555-555">+1(704)733-7023</a>
                        </div>
                        <div className="d-flex">
                        <p>pradeepsudheer944@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                        <div className="col">
                            <a className="footer-nav">Home</a>
                            <br />
                            <a className="footer-nav">About me</a>
                            <br />
                            <a className="footer-nav">Profiles</a>
                        </div>
                        <div className="col">
                            <a className="footer-nav">Experience</a>
                            <br />
                            <a className="footer-nav">Skills</a>
                            <br />
                            <a className="footer-nav">Projects</a>
                        </div>
                        </div>
                    </div>
                </div>
                <p className="pt-3 text-center">
                    Copyright&copy;
                    {new Date().getFullYear()}&nbsp; | All Rights Reserved 
                    { counter++ }
                </p>
            </div>
        </div>
    )
}

export default Footer
