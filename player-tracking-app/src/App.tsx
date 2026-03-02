// import { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { UploadPage } from './pages/upload/UploadPage';
import { Page404 } from './pages/error/Page404';

import './App.css'

function App() {

    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/upload' element={<UploadPage />} />
            <Route path='*' element={<Page404 />} />
        </Routes>

    )
}

export default App
