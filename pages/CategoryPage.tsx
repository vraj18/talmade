import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const CategoryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const category = PRODUCT_CATEGORIES.find((c) => c.id === id);

    if (!category) {
        return (
            <div className="pt-32 pb-20 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
                <p className="text-gray-600">The category you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
                        {category.name}
                    </h1>
                </RevealOnScroll>

                <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
                    <p className="text-xl text-gray-500 italic">
                        Products for {category.name} will be displayed here.
                    </p>
                    {/* Placeholder for future product grid */}
                </div>
            </div>
        </div>
    );
};
