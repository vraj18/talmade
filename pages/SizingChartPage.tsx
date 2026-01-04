import React from 'react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const SizingChartPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">Sizing Chart</h1>
        </RevealOnScroll>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <p className="text-gray-600">Placeholder sizing chart content. Replace with your actual charts and measurements.</p>

          <div className="mt-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Size</th>
                  <th className="py-2">Chest (in)</th>
                  <th className="py-2">Waist (in)</th>
                  <th className="py-2">Hip (in)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-2">S</td>
                  <td className="py-2">34-36</td>
                  <td className="py-2">28-30</td>
                  <td className="py-2">35-37</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">M</td>
                  <td className="py-2">38-40</td>
                  <td className="py-2">32-34</td>
                  <td className="py-2">39-41</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">L</td>
                  <td className="py-2">42-44</td>
                  <td className="py-2">36-38</td>
                  <td className="py-2">43-45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
