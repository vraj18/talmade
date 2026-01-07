import React from 'react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const SizingChartPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-8">Size Chart</h1>
        </RevealOnScroll>

        <p className="text-center text-gray-600 mb-8">Choose your category below and use these measurements as a guideline. All measurements are in inches.</p>

        <div className="grid gap-8">
          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="font-semibold mb-4">Shirts / Tops</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Size</th>
                    <th className="py-2">Chest</th>
                    <th className="py-2">Waist</th>
                    <th className="py-2">Shoulder</th>
                    <th className="py-2">Sleeve</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ['XS','32','26','16','7.5'],
                    ['S','36','30','17','8'],
                    ['M','40','34','18','8.5'],
                    ['L','44','38','19.5','9'],
                    ['XL','48','42','20.5','9.5'],
                    ['XXL','52','46','21.5','10'],
                    ['3XL','56','50','22.5','10.5'],
                  ].map((r) => (
                    <tr className="border-b" key={r[0]}>
                      <td className="py-2">{r[0]}</td>
                      <td className="py-2">{r[1]}</td>
                      <td className="py-2">{r[2]}</td>
                      <td className="py-2">{r[3]}</td>
                      <td className="py-2">{r[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="font-semibold mb-4">Trousers / Bottoms</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Size</th>
                    <th className="py-2">Waist</th>
                    <th className="py-2">Hip</th>
                    <th className="py-2">Inseam (standard)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ['S','28-30','35-37','30'],
                    ['M','32-34','39-41','31'],
                    ['L','36-38','43-45','32'],
                    ['XL','40-42','47-49','32'],
                    ['XXL','44-46','51-53','32'],
                  ].map((r) => (
                    <tr className="border-b" key={r[0]}>
                      <td className="py-2">{r[0]}</td>
                      <td className="py-2">{r[1]}</td>
                      <td className="py-2">{r[2]}</td>
                      <td className="py-2">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="font-semibold mb-4">Jackets / Blazers</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Size</th>
                    <th className="py-2">Chest</th>
                    <th className="py-2">Waist</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ['S','36-38','30-32'],
                    ['M','40-42','34-36'],
                    ['L','44-46','38-40'],
                    ['XL','48-50','42-44'],
                    ['XXL','52-54','46-48'],
                  ].map((r) => (
                    <tr className="border-b" key={r[0]}>
                      <td className="py-2">{r[0]}</td>
                      <td className="py-2">{r[1]}</td>
                      <td className="py-2">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="font-semibold mb-4">Saree & Drapes</h2>
            <p className="text-sm text-gray-700">Most sarees are sold by length; common length is 5.5 to 6.0 meters. For blouse sizes, refer to Shirts / Tops table above.</p>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="font-semibold mb-4">How to Measure</h2>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>Chest: Measure around the fullest part of the chest, under the arms.</li>
              <li>Waist: Measure around the natural waistline.</li>
              <li>Hip: Measure around the fullest part of the hips.</li>
              <li>Shoulder: Measure across the back from shoulder seam to shoulder seam.</li>
              <li>Sleeve: Measure from the shoulder point to the wrist.</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};
