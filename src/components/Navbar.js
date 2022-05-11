import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (

        <div className="main-navbar sticky-top">
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            News-Category
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item my-1 fs-5" to="/business"><i className="fas fa-business-time mx-2"></i> Business</Link></li>
                            <li><Link className="dropdown-item my-1 fs-5" to="/sports"><i className="fas fa-table-tennis mx-2"></i> Sports</Link></li>
                            <li><Link className="dropdown-item my-1 fs-5" to="/entertainment"><i className="fas fa-tv mx-2"></i> Entertainment</Link></li>
                            <li><Link className="dropdown-item my-1 fs-5" to="/health"><i className="fas fa-heartbeat mx-2"></i> Health</Link></li>
                            <li><Link className="dropdown-item my-1 fs-5" to="/science"><i className="fas fa-flask mx-2"></i> Science</Link></li>
                            {/* <li><Link className="dropdown-item my-1 fs-5" to="/technology"><i className="fas fa-microchip mx-2"></i> Technology</Link></li> */}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/about">About</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
