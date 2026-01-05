import React from 'react';
import { Hero } from '../components/Hero';
import { ClientsMarquee } from '../components/ClientsMarquee';
import { Services } from '../components/Services';
import { Impact } from '../components/Impact';
import { ProcessSection } from '../components/ProcessSection';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';

export function Home() {
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
