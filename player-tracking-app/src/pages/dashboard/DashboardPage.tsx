import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

import './DashboardPage.css'

export function DashboardPage() {
    return (
        <>
            <Header />
            <div className='app'>
                <p>This is the dashboard page.</p>
            </div>
            <Footer />
        </>
    );
}