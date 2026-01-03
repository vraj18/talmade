import React from 'react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export function BlogPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">Latest Insights</h1>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-6">
                            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                            <p className="text-gray-600">Our blog content is currently under development. Stay tuned for industry insights and updates.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
