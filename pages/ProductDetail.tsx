import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { products } from '../data/products';

export function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/" className="text-blue-600 hover:underline flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <Link to="/#products" className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover aspect-[4/3]"
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                            {product.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        {product.items && product.items.length > 0 && (
                            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                                <h3 className="text-lg font-semibold mb-6 flex items-center">
                                    Available Items
                                </h3>
                                <ul className="space-y-4">
                                    {product.items.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-10">
                            <Link to="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors w-full md:w-auto">
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
