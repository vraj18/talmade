import React, { useState } from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // NOTE: In a real deployment, the user must create a Google Form, 
    // get the 'action' URL and the 'entry.XXXXXX' field IDs, 
    // and replace the values below.

    // Example Google Form Action URL (Replace this with the real one)
    // const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Using fetch with 'no-cors' to submit to Google Forms without redirection
        // Note: 'no-cors' means we won't get a readable response, but the data will submit.
        try {
            // Simulating network request for the UI demo since we don't have a real form ID
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Uncomment below line when real URL is added
            // await fetch(form.action, { method: 'POST', body: formData, mode: 'no-cors' });

            setSubmitted(true);
            form.reset();
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white text-black">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/2">
                        <RevealOnScroll>
                            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">Contact Us</span>
                            <h2 className="text-5xl font-display font-bold tracking-tighter mb-6">
                                Start a Project
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Fill out a short application to secure your consultation slot. Our online application is free, and no special documentation is required for the initial chat.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Tell us about your needs</h4>
                                        <p className="text-gray-500">Quantity, fabric preference, and timeline.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Get a Custom Quote</h4>
                                        <p className="text-gray-500">We'll provide a detailed breakdown within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <div className="lg:w-1/2 bg-gray-50 p-8 md:p-12 rounded-2xl shadow-inner">
                        <RevealOnScroll delay={200}>
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                                    <p className="text-gray-600">We'll be in touch regarding your uniform requirements shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline text-gray-500">Send another request</button>
                                </div>
                            ) : (
                                <form
                                    // action="YOUR_GOOGLE_FORM_ACTION_URL_HERE" 
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="entry.NAME_ID" // Replace with Google Form Entry ID
                                            required
                                            className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Work Email</label>
                                        <input
                                            type="email"
                                            name="entry.EMAIL_ID" // Replace with Google Form Entry ID
                                            required
                                            className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="mobile" className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Mobile Number</label>
                                        <input
                                            type="tel"
                                            name="entry.MOBILE_ID" // Replace with Google Form Entry ID
                                            required
                                            className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            name="entry.COMPANY_ID" // Replace with Google Form Entry ID
                                            required
                                            className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Project Details (Quantity, Type)</label>
                                        <textarea
                                            name="entry.MESSAGE_ID" // Replace with Google Form Entry ID
                                            rows={4}
                                            required
                                            className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors resize-none"
                                            placeholder="We need 500 polo shirts..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {loading ? 'Sending...' : 'Submit Request'}
                                            {!loading && <Send className="w-4 h-4" />}
                                        </button>
                                        <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> Data is securely processed via Google Forms
                                        </p>
                                    </div>
                                </form>
                            )}
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
};