import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

import './Page404.css'

export function Page404() {
    return (
        <>
            <Header />
            <div className='app'>
                This page does not exist!
            </div>

            <Footer />
        </>
    );
}