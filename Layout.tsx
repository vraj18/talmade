import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className="font-sans antialiased bg-white text-gray-900 selection:bg-black selection:text-white flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
