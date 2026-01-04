import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
// import { ProductDetail } from './pages/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { PRODUCT_CATEGORIES } from './data/categories';
import { ClientsPage } from './pages/ClientsPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { SizingChartPage } from './pages/SizingChartPage';
import { PrivacyPage } from './pages/PrivacyPage';

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
          <Route path="enquiry" element={<EnquiryPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="sizing-chart" element={<SizingChartPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;