import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="header" id="header">
        <nav className="navbar container">
            <a href="#"><h1>Jason</h1></a>
            <div className="burger" id="burger">
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </div>
            <div className="menu" id="menu">
                <ul className="menu-inner">
                    <li className="menu-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">About</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Skills</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Projects</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <a href="#" className="download-block">Download</a>
        </nav>

    </header>
  )
}

export default Header