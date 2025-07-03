import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo5.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAboutMenuOpen = (event) => {
    setAboutAnchorEl(event.currentTarget);
    setAboutMenuOpen(true);
  };

  const handleAboutMenuClose = () => {
    setAboutAnchorEl(null);
    setAboutMenuOpen(false);
  };

  const aboutMenu = (
    <Menu
      anchorEl={aboutAnchorEl}
      open={aboutMenuOpen}
      onClose={handleAboutMenuClose}
      MenuListProps={{
        onMouseEnter: () => setAboutMenuOpen(true),
        onMouseLeave: handleAboutMenuClose,
        'aria-labelledby': 'about-button',
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      sx={{
        mt: 1,
        '& .MuiMenuItem-root': {
          fontSize: '1.1rem',
          color: 'text.primary',
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'white',
          },
        },
      }}
    >
      <MenuItem component={Link} to="/about" onClick={handleAboutMenuClose}>
        About Us
      </MenuItem>
      <MenuItem component={Link} to="/what-is-autism" onClick={handleAboutMenuClose}>
        What is Autism?
      </MenuItem>
      <MenuItem component={Link} to="/our-approach" onClick={handleAboutMenuClose}>
        Our Approach
      </MenuItem>
      <MenuItem component={Link} to="/faq" onClick={handleAboutMenuClose}>
        FAQs
      </MenuItem>
    </Menu>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid rgba(107, 115, 255, 0.1)' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Seen Futures
        </Typography>
        <IconButton sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/what-is-autism"
            fullWidth
            sx={{ 
              justifyContent: 'center',
              py: 2,
              mx: 2,
              mb: 1,
              fontSize: '1.1rem',
              color: 'text.primary',
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            What is Autism?
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/our-approach"
            fullWidth
            sx={{ 
              justifyContent: 'center',
              py: 2,
              mx: 2,
              mb: 1,
              fontSize: '1.1rem',
              color: 'text.primary',
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            Our Approach
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/faq"
            fullWidth
            sx={{ 
              justifyContent: 'center',
              py: 2,
              mx: 2,
              mb: 1,
              fontSize: '1.1rem',
              color: 'text.primary',
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            FAQs
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/services"
            fullWidth
            sx={{ 
              justifyContent: 'center',
              py: 2,
              mx: 2,
              mb: 1,
              fontSize: '1.1rem',
              color: 'text.primary',
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            Services
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/blog"
            fullWidth
            sx={{ 
              justifyContent: 'center',
              py: 2,
              mx: 2,
              mb: 1,
              fontSize: '1.1rem',
              color: 'text.primary',
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            Blog
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            component={Link}
            to="/contact"
            fullWidth
            sx={{ 
              justifyContent: 'center',
              py: 2,
              mx: 2,
              mb: 1,
              fontSize: '1.1rem',
              color: 'text.primary',
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            Contact
          </Button>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center', mt: 3, px: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact"
            fullWidth
            sx={{ 
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2
            }}
          >
            Book Session
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(107, 115, 255, 0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
          <Box 
            component={Link} 
            to="/home" 
            className="logo-link"
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              outline: 'none',
              boxShadow: 'none',
              pointer: 'cursor',
            }}
          >
            <Box>
           
             <img
              src={logo}
              alt="Seen Futures"
              style={{
                height: 90,
                width: 'auto',
                marginRight: 12,
                marginTop: 4,
                display: 'block',
                outline: 'none',  
                boxShadow: 'none',
              }}
            />
            </Box>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                onMouseEnter={handleAboutMenuOpen}
                onMouseLeave={handleAboutMenuClose}
                sx={{ display: 'inline-block' }}
              >
                <Button
                  id="about-button"
                  aria-controls={aboutMenuOpen ? 'about-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={aboutMenuOpen ? 'true' : undefined}
                  sx={{ mx: 1, color: 'text.primary', fontWeight: 500, '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
                >
                  About
                </Button>
                {aboutMenu}
              </Box>
              <Button
                component={Link}
                to="/services"
                sx={{ 
                  mx: 1,
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  }
                }}
              >
                Services
              </Button>
              <Button
                component={Link}
                to="/blog"
                sx={{ 
                  mx: 1,
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  }
                }}
              >
                Blog
              </Button>
              <Button
                component={Link}
                to="/contact"
                sx={{ 
                  mx: 1,
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  }
                }}
              >
                Contact
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/contact"
                sx={{ 
                  ml: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 600
                }}
              >
                Book Session
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(107, 115, 255, 0.1)',
            boxShadow: '0px 8px 32px rgba(107, 115, 255, 0.15)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;