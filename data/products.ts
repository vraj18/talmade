export type ProductItem = {
  name: string;
  image?: string;
  description?: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  image: string;
  description: string;
  items?: ProductItem[]; // For sub-items like "Boiler suits", "Sweaters"
};

export const products: ProductCategory[] = [
  {
    id: 'security-uniform',
    title: 'Security Uniform',
    description: 'Professional and durable uniforms for security personnel.',
    image: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?auto=format&fit=crop&q=80',
    items: []
  },
  {
    id: 'defence-uniform',
    title: 'Defence Uniform',
    description: 'High-quality uniforms meeting defence standards.',
    image: 'https://images.unsplash.com/photo-1579781403261-f40eb53b8f6c?auto=format&fit=crop&q=80',
    items: []
  },
  {
    id: 'corporate-uniform',
    title: 'Corporate Uniform',
    description: 'Elegant and professional attire for corporate environments.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    items: []
  },
  {
    id: 'industrial-uniform',
    title: 'Industrial Uniform',
    description: 'Rugged and safe uniforms for industrial work.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    items: []
  },
  {
    id: 'safety-uniform',
    title: 'Safety Uniform',
    description: 'Essential safety gear for various industries.',
    image: 'https://images.unsplash.com/photo-1617135042858-a537f59f635f?auto=format&fit=crop&q=80',
    items: [
        { name: 'Boiler suits' },
        { name: 'Safety jackets' }
    ]
  },
  {
    id: 'hospitality-uniform',
    title: 'Hospitality Uniform & Linen',
    description: 'Stylish and comfortable uniforms for the hospitality sector.',
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80',
    items: []
  },
  {
    id: 'hospital-uniform',
    title: 'Hospital Uniform & Linen',
    description: 'Hygienic and practical uniforms for healthcare professionals.',
    image: 'https://images.unsplash.com/photo-1584036561566-b9375b4324ec?auto=format&fit=crop&q=80',
    items: []
  },
  {
    id: 'winter-wear',
    title: 'Winter Wear',
    description: 'Warm clothing for cold conditions.',
    image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&q=80',
    items: [
        { name: 'Sweaters' },
        { name: 'Jackets' },
        { name: 'Jerseys' },
        { name: 'Thermo coats' }
    ]
  },
  {
    id: 'ceremonial-dress',
    title: 'Ceremonial Dress',
    description: 'Formal attire for special occasions and ceremonies.',
    image: 'https://images.unsplash.com/photo-1449622838332-90ab12f66456?auto=format&fit=crop&q=80',
    items: []
  },
  {
    id: 'sportswear',
    title: 'Sportswear',
    description: 'Performance-oriented clothing for sports and activities.',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80',
    items: [
        { name: 'Trousers and T-shirts' },
        { name: 'Tracksuits' }
    ]
  },
  {
    id: 'headwear',
    title: 'Headwear',
    description: 'Various types of caps and hats.',
    image: 'https://images.unsplash.com/photo-1582748154562-b91566bc229f?auto=format&fit=crop&q=80',
    items: [
        { name: 'Beret caps' },
        { name: 'Commando caps' },
        { name: 'Peak caps' }
    ]
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Essential accessories for uniforms.',
    image: 'https://images.unsplash.com/photo-1605218427360-6927d3567d1c?auto=format&fit=crop&q=80',
    items: [
        { name: 'Belts' },
        { name: 'Badges' },
        { name: 'Shoulder titles' },
        { name: 'Lanyards' },
        { name: 'All types of sticks and metal accessories' }
    ]
  },
  {
    id: 'logos',
    title: 'Logos',
    description: 'Custom logo services.',
    image: 'https://images.unsplash.com/photo-1626544827763-d516dce335ca?auto=format&fit=crop&q=80',
    items: [
        { name: 'Waving logos' },
        { name: 'Digital logos' }
    ]
  }
];
