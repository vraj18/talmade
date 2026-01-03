import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export function EnquiryPage() {
    return (
        <div className="pt-32 pb-20">
            <RevealOnScroll>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">Make an Enquiry</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 px-4">
                    Interested in our uniforms? Fill out the form below and our team will get back to you shortly along with a quote.
                </p>
            </RevealOnScroll>
            <ContactForm />
        </div>
    );
}
