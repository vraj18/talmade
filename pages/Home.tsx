import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ClientsMarquee } from '../components/ClientsMarquee';
import { Services } from '../components/Services';
import { Impact } from '../components/Impact';
import { ProcessSection } from '../components/ProcessSection';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { useLocation } from 'react-router-dom';

export function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <ClientsMarquee />
            <Services />
            <Impact />
            <ProcessSection />
            <Testimonials />
            <ContactForm />
        </>
    );
}
