import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
<header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="">
                                <Link to="/game">Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/video">Video</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/music">Music</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/download">Downloads</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/learning">Learning</Link>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Punjabi Reading</a></li>
                                    <li><a href="#">Sentence Making</a></li>
                                    <li><a href="#">Shabadkosh</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                             <Link to="contactus">Learning</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </header> 

  )
}

export default NavBar