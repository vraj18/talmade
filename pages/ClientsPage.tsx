import React from "react";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";

// Import all client logos
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client7 from "../assets/clients/client7.png";
import client6 from "../assets/clients/client6.png";
import client8 from "../assets/clients/client8.png";
import client9 from "../assets/clients/client9.png";
import client10 from "../assets/clients/client10.png";
import client11 from "../assets/clients/client11.png";
import client12 from "../assets/clients/client12.png";
import client13 from "../assets/clients/client13.png";
import client14 from "../assets/clients/client14.png";
import client15 from "../assets/clients/client15.png";
import client16 from "../assets/clients/client16.png";
import client17 from "../assets/clients/client17.png";
import client18 from "../assets/clients/client18.png";
import client19 from "../assets/clients/client19.png";
import client20 from "../assets/clients/client20.png";
import client21 from "../assets/clients/client21.png";
import client22 from "../assets/clients/client22.png";
import client23 from "../assets/clients/client23.png";
import client24 from "../assets/clients/client24.png";
import client25 from "../assets/clients/client25.png";
import client26 from "../assets/clients/client26.png";
import client27 from "../assets/clients/client27.png";
import client28 from "../assets/clients/client28.png";
import client29 from "../assets/clients/client29.png";
import client30 from "../assets/clients/client30.png";
import client31 from "../assets/clients/client31.png";
import client32 from "../assets/clients/client32.png";
import client33 from "../assets/clients/client33.png";
import client34 from "../assets/clients/client34.png";
import client35 from "../assets/clients/client35.png";
import client36 from "../assets/clients/client36.png";
import client37 from "../assets/clients/client37.png";
import client38 from "../assets/clients/client38.png";
import client39 from "../assets/clients/client39.png";
import client40 from "../assets/clients/client40.png";
import client41 from "../assets/clients/client41.png";
import client42 from "../assets/clients/client42.png";
import client43 from "../assets/clients/client43.png";
import client44 from "../assets/clients/client44.jpeg";
import client45 from "../assets/clients/client45.png";
import client46 from "../assets/clients/client46.png";
import client47 from "../assets/clients/client47.png";
import client48 from "../assets/clients/client48.png";
import client49 from "../assets/clients/client49.svg";
import client50 from "../assets/clients/client50.jpg";
import client51 from "../assets/clients/client51.png";
import client52 from "../assets/clients/client52.png";
import client53 from "../assets/clients/client53.png";
import client54 from "../assets/clients/client54.png";
import client55 from "../assets/clients/client55.png";
import client56 from "../assets/clients/client56.png";
import client57 from "../assets/clients/client57.png";
import client58 from "../assets/clients/client58.png";


import dealer1 from "../assets/dealers/dealer1.png";
import dealer2 from "../assets/dealers/dealer2.png";
import dealer3 from "../assets/dealers/dealer3.png";
import dealer4 from "../assets/dealers/dealer4.png";
import dealer5 from "../assets/dealers/dealer5.png";
import dealer6 from "../assets/dealers/dealer6.png";
import dealer8 from "../assets/dealers/dealer7.png";
import dealer9 from "../assets/dealers/dealer8.png";
import dp1 from "../assets/dp/dp1.png";
import dp2 from "../assets/dp/dp2.png";
import dp3 from "../assets/dp/dp3.png";
import dp4 from "../assets/dp/dp4.png";

const CLIENTS = [
  { name: "client1", logo: client1 },
  { name: "client2", logo: client2 },
  { name: "client3", logo: client3 },
  { name: "client4", logo: client4 },
  { name: "client5", logo: client5 },
  { name: "client6", logo: client6 },
  { name: "client7", logo: client7 },
  { name: "client8", logo: client8 },
  { name: "client9", logo: client9 },
  { name: "client10", logo: client10 },
  { name: "client11", logo: client11 },
  { name: "client12", logo: client12 },
  { name: "client13", logo: client13 },
  { name: "client14", logo: client14 },
  { name: "client15", logo: client15 },
  { name: "client16", logo: client16 },
  { name: "client17", logo: client17 },
  { name: "client18", logo: client18 },
  { name: "client19", logo: client19 },
  { name: "client20", logo: client20 },
  { name: "client21", logo: client21 },
  { name: "client22", logo: client22 },
  { name: "client23", logo: client23 },
  { name: "client24", logo: client24 },
  { name: "client25", logo: client25 },
  { name: "client26", logo: client26 },
  { name: "client27", logo: client27 },
  { name: "client28", logo: client28 },
  { name: "client29", logo: client29 },
  { name: "client30", logo: client30 },
  { name: "client31", logo: client31 },
  { name: "client32", logo: client32 },
  { name: "client33", logo: client33 },
  { name: "client34", logo: client34 },
  { name: "client35", logo: client35 },
  { name: "client36", logo: client36 },
  { name: "client37", logo: client37 },
  { name: "client38", logo: client38 },
  { name: "client39", logo: client39 },
  { name: "client40", logo: client40 },
  { name: "client41", logo: client41 },
  { name: "client42", logo: client42 },
  { name: "client43", logo: client43 },
  { name: "client44", logo: client44 },
  { name: "client45", logo: client45 },
  { name: "client46", logo: client46 },
  { name: "client47", logo: client47 },
  { name: "client48", logo: client48 },
  { name: "client49", logo: client49 },
  { name: "client50", logo: client50 },
  { name: "client51", logo: client51 },
  { name: "client52", logo: client52 },
  { name: "client53", logo: client53 },
  { name: "client54", logo: client54 },
  { name: "client55", logo: client55 },
  { name: "client56", logo: client56 },
  { name: "client57", logo: client57 },
  { name: "client58", logo: client58 },
];

const DEALERS = [
  { name: 'dealer1', logo: dealer1 },
  { name: 'dealer2', logo: dealer2 },
  { name: 'dealer3', logo: dealer3 },
  { name: 'dealer4', logo: dealer4 },
  { name: 'dealer5', logo: dealer5 },
  { name: 'dealer6', logo: dealer6 },
  { name: 'dealer8', logo: dealer8 },
  { name: 'dealer9', logo: dealer9 },
];

const DELIVERY_PARTNERS = [
  { name: 'dp1', logo: dp1 },
  { name: 'dp2', logo: dp2 },
  { name: 'dp3', logo: dp3 },
  { name: 'dp4', logo: dp4 },
];

// Common Card Component for all sections
const PartnerCard = ({ item, type = "client" }) => {
  const [hasError, setHasError] = React.useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className="group bg-white rounded-xl p-5 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-50 h-full flex flex-col items-center justify-center min-h-[180px]">
      <div className="h-24 w-full flex items-center justify-center mb-3 flex-grow">
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