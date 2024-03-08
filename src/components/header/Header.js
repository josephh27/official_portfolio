import React, { useEffect, useState } from 'react'
import './Header.scss'

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [onScroll, setOnScroll] = useState(false)

    const toggle = () => {
        setIsActive(!isActive)
    }

    const resetActive = () => {
        setIsActive(false)
    }

    // For dynamic rendering
    const links = {
        'Home': '#hero',
        'About': '#about-container',
        'Skills': '#skills-container',
        'Projects': '#projects-container',
        'Contact': '#contact-container'
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 85) {
                setOnScroll(true)
            } else {
                setOnScroll(false)
            }
        })

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                if (isActive) {
                    setIsActive(false)
                }
            }
        })
    }, [])

  return (
    <header className={`header ${onScroll ? 'on-scroll' : ''}`} id="header">
        <nav className="navbar container">
            <a href="#" className="brand"><h1>Jason</h1></a>
            <div className={`burger ${isActive ? 'is-active' : ''}`} id="burger" onClick={() => toggle()}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </div>
            <div className={`menu ${isActive ? 'is-active' : ''}`} id="menu">
                <ul className="menu-inner">
                    {
                        (Object.entries(links)).map(([key, value, idx]) => {
                           return <a href={value} key={idx} onClick={() => resetActive()} className="menu-link">{key}</a>
                        })
                    }
                    <li className="menu-item">
                        <a href="#" className="menu-link">Home</a>
                    </li>
                </ul>
            </div>
            <a href="#" className="download-block">Download</a>
        </nav>

    </header>
  )
}

export default Header