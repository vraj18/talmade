import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

value: string;
label: string;
}

declare module '*.png' {
  const value: string;
  export default value;
}