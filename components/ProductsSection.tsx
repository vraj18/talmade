import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsSection() {
    // Show first 6 products on home page, or maybe just categories grid
    const displayedProducts = products.slice(0, 6);

    return (
        <section className="py-24 bg-gray-50" id="products">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Our Products
                    </h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive uniform and linen solutions for every industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
