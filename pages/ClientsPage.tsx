import React from "react";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";

// Eagerly import image assets using Vite glob import
const clientModules = import.meta.glob('../assets/clients/*', { eager: true, import: 'default' }) as Record<string, string>;
const dealerModules = import.meta.glob('../assets/dealers/*', { eager: true, import: 'default' }) as Record<string, string>;
const dpModules = import.meta.glob('../assets/dp/*', { eager: true, import: 'default' }) as Record<string, string>;

// Build CLIENTS list automatically sorted by client number (client01, client02, ..., client77)
const CLIENTS = Object.entries(clientModules)
  .filter(([path]) => !path.endsWith('.pdf'))
  .map(([path, logo]) => {
    const filename = path.split('/').pop() || '';
    const name = filename.substring(0, filename.lastIndexOf('.')) || filename;
    return { name, logo, filename };
  })
  .sort((a, b) => {
    const numA = parseInt(a.name.replace(/[^0-9]/g, '')) || 0;
    const numB = parseInt(b.name.replace(/[^0-9]/g, '')) || 0;
    return numA - numB;
  });

// Build DEALERS list
const DEALERS = Object.entries(dealerModules)
  .map(([path, logo]) => {
    const filename = path.split('/').pop() || '';
    const name = filename.substring(0, filename.lastIndexOf('.')) || filename;
    return { name, logo, filename };
  })
  .sort((a, b) => {
    const numA = parseInt(a.name.replace(/[^0-9]/g, '')) || 0;
    const numB = parseInt(b.name.replace(/[^0-9]/g, '')) || 0;
    return numA - numB;
  });

// Build DELIVERY_PARTNERS list
const DELIVERY_PARTNERS = Object.entries(dpModules)
  .map(([path, logo]) => {
    const filename = path.split('/').pop() || '';
    const name = filename.substring(0, filename.lastIndexOf('.')) || filename;
    return { name, logo, filename };
  })
  .sort((a, b) => {
    const numA = parseInt(a.name.replace(/[^0-9]/g, '')) || 0;
    const numB = parseInt(b.name.replace(/[^0-9]/g, '')) || 0;
    return numA - numB;
  });

// Common Card Component for all sections
const PartnerCard = ({ item, type = "client" }: { item: { name: string; logo: string }; type?: string }) => {
  const [hasError, setHasError] = React.useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className="group bg-white rounded-xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-50 h-full flex flex-col items-center justify-center min-h-[160px] md:min-h-[180px]">
      <div className="h-20 md:h-24 w-full flex items-center justify-center mb-2 md:mb-3 flex-grow">
        {hasError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-md p-4">
            <span className="text-sm font-medium text-gray-600 text-center">
              {item.name}
            </span>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-2">
            <img
              src={item.logo}
              alt={item.name}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              onError={handleImageError}
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export function ClientsPage() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900">
              Our Valued Partners
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Serving industry leaders and partners across multiple sectors with excellence and dedication.
            </p>
          </div>
        </RevealOnScroll>

        {/* Client Grid */}
        <div className="mb-20">
          <RevealOnScroll>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-2">Our Esteemed Clients</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
              {CLIENTS.map((client) => (
                <PartnerCard key={client.name} item={client} type="client" />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Dealers */}
        <div className="mb-20">
          <RevealOnScroll>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-2">Authorized Dealership Partners</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Official Distribution Network</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
              {DEALERS.map((dealer) => (
                <PartnerCard key={dealer.name} item={dealer} type="dealer" />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Delivery Partners */}
        <div className="mb-20">
          <RevealOnScroll>
            <div className="mb-8 text-center">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-2">Delivery Corporate Channel Partners</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reliable Logistics Network</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {DELIVERY_PARTNERS.map((dp) => (
                <PartnerCard key={dp.name} item={dp} type="delivery" />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}