import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
        <a className="navbar-brand" href="#"><img className = 'logo' src={logo} alt='logo..' ></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style = {{ color: '#fff' }}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" smooth={true} to="home" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" smooth={true} to="about" offset={-110} href="#">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" smooth={true} to="profiles" offset={-110} href="#">Profiles</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" smooth={true} to="experience" offset={-110} href="#">Experience</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" smooth={true} to="skills" offset={-110} href="#">Skills</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" smooth={true} to="projects" offset={-110} href="#">Projects</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" smooth={true} to="contact" offset={-110} href="#">Contact</Link>
            </li>
            </ul>
        </div>
        </div>      
    </nav>
    )
}

export default Navbar
