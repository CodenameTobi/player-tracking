import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { HeroComponent } from './HeroComponent';
import { HowItWorks } from './HowItWorks';

import './HomePage.css';

function HomePage() {

    return (
        <>
            <Header />
            <div className='app'>
                <HeroComponent />
                <HowItWorks />
            </div>

            <Footer />
        </>
    );
}

export default HomePage;