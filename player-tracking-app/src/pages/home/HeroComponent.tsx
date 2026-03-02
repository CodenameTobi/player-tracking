import { NavLink } from 'react-router'
import FootballsOnGrass from '../../assets/images/two-footballs-on-grass.jpeg'

import './HeroComponent.css'

export function HeroComponent() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Football Player Tracking</h1>
                    <p>Upload match videos and get real-time player tracking analysis</p>
                    <div className="hero-buttons">
                        <NavLink className="btn btn-primary" to='/upload'>Upload Video</NavLink>
                        <NavLink className="btn btn-secondary" to="/dashboard">Go to Dashboard</NavLink>
                    </div>
                </div>
                <img src={FootballsOnGrass} alt="Football match" className="hero-image" />
            </section>
        </>
    );
}