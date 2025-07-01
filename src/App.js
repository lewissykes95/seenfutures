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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;