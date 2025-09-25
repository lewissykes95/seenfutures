// src/App.jsx
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import theme from './theme';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Faq from './pages/faq';
import Navbar from './components/navbar';
import Footer from './components/footer';
import WhatIsAutism from './pages/what-is-autism';
import OurApproach from './pages/our-approach';
import PrivacyPolicy from './pages/privacy';
import Terms from './pages/terms';
import Accessibility from './pages/accessibility';
import ScrollToTop from './components/ScrollToTop';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <Box sx={{ pt: isHome ? 0 : { xs: 12, md: 14 } }}>
      {children}
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Box component="main" sx={{ minHeight: '80vh', pb: 4 }}>
          <Routes>
            <Route path="/" element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } />
            <Route path="/about" element={
              <PageWrapper>
                <About />
              </PageWrapper>
            } />
            <Route path="/what-is-autism" element={
              <PageWrapper>
                <WhatIsAutism />
              </PageWrapper>
            } />
            <Route path="/our-approach" element={
              <PageWrapper>
                <OurApproach />
              </PageWrapper>
            } />
            <Route path="/services" element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } />
            <Route path="/faq" element={
              <PageWrapper>
                <Faq />
              </PageWrapper>
            } />
            <Route path="/privacy" element={
              <PageWrapper>
                <PrivacyPolicy />
              </PageWrapper>
            } />
            <Route path="/terms" element={
              <PageWrapper>
                <Terms />
              </PageWrapper>
            } />
            <Route path="/accessibility" element={
              <PageWrapper>
                <Accessibility />
              </PageWrapper>
            } />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;