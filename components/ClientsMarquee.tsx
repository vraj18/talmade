import React from 'react';

// Eagerly import all client and dealer logo assets via Vite glob import
const clientModules = import.meta.glob('../assets/clients/*', { eager: true, import: 'default' }) as Record<string, string>;
const dealerModules = import.meta.glob('../assets/dealers/*', { eager: true, import: 'default' }) as Record<string, string>;

function getLogoUrl(logoKey: string): string | undefined {
  if (logoKey.startsWith('dealer')) {
    return dealerModules[`../assets/dealers/${logoKey}`];
  }
  return clientModules[`../assets/clients/${logoKey}`];
}

const CLIENTS = [
  { name: 'Raymond', logoKey: 'dealer2.png' },
  { name: 'JIO', logoKey: 'client01.png' },
  { name: 'JSW', logoKey: 'client02.png' },
  { name: 'ESSAR', logoKey: 'client03.png' },
  { name: 'PSIPL', logoKey: 'client04.png' },
  { name: 'ONGC', logoKey: 'client05.png' },
  { name: 'MAHINDRA', logoKey: 'client06.png' },
  { name: 'WELSPUN', logoKey: 'client07.png' },
  { name: 'WOCKHARDT', logoKey: 'client08.png' },
  { name: 'RAJANS', logoKey: 'client09.png' },
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
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-50">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-gray-900">
          Our Beloved Clients
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {duplicatedClients.map((client, index) => {
            const logoSrc = getLogoUrl(client.logoKey);
            return (
              <div
                key={`${client.name}-${index}`}
                className="mx-8 md:mx-12 flex items-center justify-center transition-all duration-300 min-w-[120px]"
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}