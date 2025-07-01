// src/App.jsx
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Blog from './pages/blog';
import Faq from './pages/faq';
import Navbar from './components/navbar';
import Footer from './components/footer';
import WhatIsAutism from './pages/what-is-autism';
import OurApproach from './pages/our-approach';
import PrivacyPolicy from './pages/privacy';
import Terms from './pages/terms';
import Accessibility from './pages/accessibility';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box component="main" sx={{ 
          minHeight: '80vh', 
          pt: { xs: 12, md: 14 },
          pb: 4
        }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-is-autism" element={<WhatIsAutism />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;