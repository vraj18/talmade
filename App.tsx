import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
// import { ProductDetail } from './pages/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { ClientsPage } from './pages/ClientsPage';
import { BlogPage } from './pages/BlogPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="enquiry" element={<EnquiryPage />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;