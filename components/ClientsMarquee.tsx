import React, { useState, useEffect } from 'react';

const CLIENTS = [
  { name: 'Raymond', logoKey: 'dealer2.png' },
  { name: 'JIO', logoKey: 'client1.png' },
  { name: 'JSW', logoKey: 'client2.jpeg' },
  { name: 'ESSAR', logoKey: 'client3.png' },
  { name: 'PSIPL', logoKey: 'client4.png' },
  { name: 'ONGC', logoKey: 'client5.png' },
  { name: 'MAHINDRA', logoKey: 'client6.png' },
  { name: 'WELSPUN', logoKey: 'client7.png' },
  { name: 'WOCKHARDT', logoKey: 'client8.png' },
  { name: 'RAJANS', logoKey: 'client9.png' },
  { name: 'SCHMITTEN', logoKey: 'client10.png' },
  { name: 'TATA', logoKey: 'client11.png' },
  { name: 'ADANI', logoKey: 'client12.png' },
  { name: 'BIRLA', logoKey: 'client13.png' },
  { name: 'HAVELLS', logoKey: 'client14.png' },

  { name: 'BOSCH', logoKey: 'client16.png' },
  { name: 'SIEMENS', logoKey: 'client17.png' },
  { name: 'VOLTAS', logoKey: 'client18.png' },

  { name: 'DABUR', logoKey: 'client20.png' },
];

export function ClientsMarquee() {
  const [logoMap, setLogoMap] = useState({});
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  useEffect(() => {
    // Dynamically import all client logos
    const importLogos = async () => {
      try {
        const imports = await Promise.all([
          import('../assets/dealers/dealer2.png'),
          import('../assets/clients/client1.png'),
          import('../assets/clients/client2.jpeg'),
          import('../assets/clients/client3.png'),
          import('../assets/clients/client4.png'),
          import('../assets/clients/client5.png'),
          import('../assets/clients/client6.png'),
          import('../assets/clients/client7.png'),
          import('../assets/clients/client8.png'),
          import('../assets/clients/client9.png'),
          import('../assets/clients/client10.png'),
          import('../assets/clients/client11.png'),
          import('../assets/clients/client12.png'),
          import('../assets/clients/client13.png'),
          import('../assets/clients/client14.png'),

          import('../assets/clients/client16.png'),
          import('../assets/clients/client17.png'),
          import('../assets/clients/client18.png'),

          import('../assets/clients/client20.png'),
        ]);

        const logoData = {};
        CLIENTS.forEach((client, index) => {
          if (imports[index]?.default) {
            logoData[client.logoKey] = imports[index].default;
          }
        });
        setLogoMap(logoData);
      } catch (error) {
        console.error('Error loading logos:', error);
      }
    };

    importLogos();
  }, []);

  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-50">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-gray-900">
          Our Beloved Clients
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="mx-8 md:mx-12 flex items-center justify-center transition-all duration-300 min-w-[120px]"
            >
              {logoMap[client.logoKey] ? (
                <img
                  src={logoMap[client.logoKey]}
                  alt={client.name}
                  className="h-8 md:h-12 w-auto object-contain transition-opacity duration-300"
                />
              ) : (
                <div className="h-8 md:h-12 w-24 flex items-center justify-center bg-gray-100 rounded px-2">
                  <span className="text-sm font-medium text-gray-500">
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}