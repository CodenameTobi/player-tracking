// import { useState } from "react"
import { NavLink } from 'react-router'
import FootballSketch from '../../assets/images/icons/football-sketch.jpg'
import './Header.css'

export function Header() {
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className='header-logo' src={FootballSketch} />
                        <span className='homepage-text'>Player Tracking</span>
                    </NavLink>
                </div>

                <div className="right-section">
                    <NavLink className="" to="/dashboard">
                        <span className="dashboard-text">dashboard</span>
                    </NavLink>
                    <NavLink className="" to="/upload">
                        <span className="upload-text">Upload</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
}