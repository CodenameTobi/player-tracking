import { NavLink } from 'react-router'
import FootballSketch from '../../assets/images/icons/football-sketch.jpg'
import './Footer.css'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-box brand">
                    <div className="brand-top">
                        <img src={FootballSketch} alt="logo" className="footer-logo" />
                        <div>
                            <h3 className="brand-title">Player Tracking</h3>
                            <p className="brand-desc">Player tracking for Football matches</p>
                        </div>
                    </div>
                </div>

                <div className="footer-box links">
                    <h4>Quick Links</h4>
                    <nav className="quick-links">
                        <NavLink to="/" className="footer-link">Home</NavLink>
                        <NavLink to="/dashboard" className="footer-link">Dashboard</NavLink>
                        <NavLink to="/upload" className="footer-link">Upload</NavLink>
                    </nav>
                </div>

                <div className="footer-box contact">
                    <h4>Contact</h4>
                    <ul className="contact-list">
                        <li>
                            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5C3 7.12 4.12 6 5.5 6h13c1.38 0 2.5 1.12 2.5 2.5v7c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 18 3 16.88 3 15.5v-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 8.5l9 5 9-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <a href="mailto:hello@example.com" className="contact-link">hello@example.com</a>
                        </li>
                        <li>
                            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span className="contact-text">Some City, Country</span>
                        </li>
                        <li>
                            <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-9 14h-2v-6h2v6zm-1-7.2c-.64 0-1.15-.52-1.15-1.15 0-.64.52-1.15 1.15-1.15.64 0 1.15.52 1.15 1.15 0 .64-.51 1.15-1.15 1.15zm10 7.2h-2v-3c0-.72-.02-1.65-1.01-1.65-.99 0-1.14.77-1.14 1.6v3.05h-2v-6h1.92v.82h.03c.27-.51.94-1.05 1.94-1.05 2.08 0 2.46 1.37 2.46 3.15v3.08z" /></svg>
                            <a href="#" className="contact-link">linkedin.com/in/example</a>
                        </li>
                        <li>
                            <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm10 3a1 1 0 110 2 1 1 0 010-2zM12 7.5c-2.49 0-4.5 2.01-4.5 4.5S9.51 16.5 12 16.5 16.5 14.49 16.5 12 14.49 7.5 12 7.5zM12 9a3 3 0 100 6 3 3 0 000-6z" /></svg>
                            <a href="#" className="contact-link">@example_insta</a>
                        </li>
                        <li>
                            <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98.01 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.68.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.79.55C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
                            <a href="#" className="contact-link">github.com/example</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">© {year} Player Tracking. All rights reserved.</div>
        </footer>
    )
}