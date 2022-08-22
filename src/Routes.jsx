import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import MainPage from '@/pages/MainPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage />}  />
                <Route path='/' element={<MainPage />}  />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;
