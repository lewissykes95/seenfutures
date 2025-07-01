
// src/components/Navbar.jsx
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
  Avatar
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['About', 'Services', 'FAQ', 'Blog', 'Contact'];

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
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button
              component={Link}
              to={`/${item.toLowerCase()}`}
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
              {item}
            </Button>
          </ListItem>
        ))}
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
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'primary.main',
                width: 40,
                height: 40,
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}
            >
              SF
            </Avatar>
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'primary.main',
                  lineHeight: 1.2
                }}
              >
                Seen Futures
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Autism Specialist
              </Typography>
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
              {navItems.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
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
                  {page}
                </Button>
              ))}
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
          keepMounted: true, // Better open performance on mobile.
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