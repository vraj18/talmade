import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

interface Product {
  id: number;
  name: string;
  image: any;
  fileName: string;
}

// List of ALL existing folders (from your assets)
const EXISTING_FOLDERS = ['Airline', 'Corporate', 'Hospital', 'Hotel', 'Saree', 'Security', 'Tshirt', 'Work'];

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = PRODUCT_CATEGORIES.find((c) => c.id === id);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [folderExists, setFolderExists] = useState(true);

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true);
      
      if (!id || !category) {
        setLoading(false);
        return;
      }
      
      // Check if folder exists in assets
      if (!EXISTING_FOLDERS.includes(id)) {
        console.warn(`Folder "${id}" doesn't exist in assets. Available folders:`, EXISTING_FOLDERS);
        setFolderExists(false);
        setLoading(false);
        return;
      }
      
      setFolderExists(true);
      
      try {
        // Load images using Vite's import.meta.glob (eager). Use the new `query`+`import` options to get URLs
        const modules = import.meta.glob('../assets/products/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
        const entries = Object.entries(modules).filter(([path]) => path.includes(`/${id}/`));

        console.log(`Loading images from: ${id} folder`);
        console.log(`Found ${entries.length} images:`, entries.map(e => e[0]));

        const loadedProducts = entries.map(([path, url], index) => {
          const fileName = path.split('/').pop() || `image-${index}`;
          const cleanName = fileName.replace(/\.[^/.]+$/, ""); // Remove extension

          // Convert filename to readable format
          const readableName = cleanName
            .replace(/[_-]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());

          return {
            id: index + 1,
            name: readableName || `${category.name} ${index + 1}`,
            image: url,
            fileName: fileName
          };
        });

        setProducts(loadedProducts);

      } catch (error) {
        console.error('Error loading images:', error);
        
        // Create placeholder products for debugging
        const placeholders = Array.from({ length: 8 }, (_, i) => ({
          id: i + 1,
          name: `${category.name} Design ${i + 1}`,
          image: `https://placehold.co/600x900/e5e7eb/6b7280?text=${encodeURIComponent(category.name)}+${i + 1}`,
          fileName: `placeholder-${i + 1}.jpg`
        }));
        
        setProducts(placeholders);
      }
      
      setLoading(false);
    };
    
    loadProducts();
  }, [id, category]);

  if (!category) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you are looking for does not exist.</p>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg max-w-md mx-auto">
          <p className="font-medium mb-2">Available Categories:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {PRODUCT_CATEGORIES.map(cat => (
              <div key={cat.id} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our curated collection of premium {category.name.toLowerCase()} designs
            </p>
          </div>
        </RevealOnScroll>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100/50">
          {!folderExists ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl mb-6">
                <div className="text-4xl">📁</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Images Folder Not Found
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                The folder for <span className="font-semibold text-gray-900">"{category.name}"</span> doesn't exist in the assets directory.
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl max-w-2xl mx-auto border border-gray-200/50">
                <p className="text-gray-700 font-medium mb-4">Available image folders:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {EXISTING_FOLDERS.map(folder => (
                    <div key={folder} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300">
                      <div className="font-bold text-gray-900 text-lg">{folder}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {PRODUCT_CATEGORIES.find(c => c.id === folder)?.name || 'No category'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-blue-100 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <p className="text-xl font-medium text-gray-700 mb-3">Loading {category.name} Collection</p>
              <p className="text-gray-500">
                From: <span className="font-mono bg-gray-100 px-3 py-1.5 rounded-lg text-sm">{`src/assets/products/${id}/`}</span>
              </p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6">
                <div className="text-3xl text-gray-400">🖼️</div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                No images found in {category.name} folder
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl max-w-lg mx-auto border border-blue-100">
                <p className="text-blue-900 font-bold text-lg mb-4">Quick Fix:</p>
                <ol className="text-left text-blue-800 space-y-3">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full font-bold mr-3">1</span>
                    <span>Go to: <code className="bg-blue-100/50 px-3 py-1.5 rounded-lg font-mono text-sm">{`src/assets/products/${id}/`}</code></span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full font-bold mr-3">2</span>
                    <span>Add your image files (.jpg, .png, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full font-bold mr-3">3</span>
                    <span>Refresh this page</span>
                  </li>
                </ol>
              </div>
            </div>
          ) : (
            <>
              {/* PRODUCT GRID - Taller Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gray-300"
                  >
                    {/* Image Container - Taller aspect ratio */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            console.error(`Failed to load: ${product.fileName}`);
                            e.currentTarget.src = `https://placehold.co/600x900/f3f4f6/9ca3af?text=${encodeURIComponent(category.name)}`;
                            e.currentTarget.className = "w-full h-full object-contain p-8";
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Category Description - Elegant footer */}
              <div className="mt-20 pt-12 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      About Our {category.name} Collection
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                      Our {category.name.toLowerCase()} collection combines superior craftsmanship with premium materials 
                      to deliver exceptional quality and timeless style. Each piece is designed for both 
                      aesthetic appeal and practical functionality.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-100 group hover:shadow-lg transition-shadow duration-300">
                      <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-200/30 rounded-full"></div>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-5">
                          <div className="text-2xl text-blue-600">✦</div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Materials</h4>
                        <p className="text-gray-600">Crafted from high-grade fabrics with exceptional durability and comfort</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-green-50 to-white border border-green-100 group hover:shadow-lg transition-shadow duration-300">
                      <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-200/30 rounded-full"></div>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-5">
                          <div className="text-2xl text-green-600">✧</div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Perfect Fit</h4>
                        <p className="text-gray-600">Available in all sizes with custom tailoring options for ideal fit</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-white border border-purple-100 group hover:shadow-lg transition-shadow duration-300">
                      <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-200/30 rounded-full"></div>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-5">
                          <div className="text-2xl text-purple-600">✶</div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Bulk Orders</h4>
                        <p className="text-gray-600">Competitive pricing and dedicated support for institutional purchases</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};