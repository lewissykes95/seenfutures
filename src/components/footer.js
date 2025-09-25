import { 
  Box, 
  Typography, 
  Container,
  Grid,
  IconButton,
  Stack,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Email, 
  Phone, 
  LocationOn,
  Facebook,
  Instagram,
  LinkedIn
} from '@mui/icons-material';
import './footer.css';

const Footer = () => (
  <Box 
    component="footer"
    sx={{ 
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'hidden',
      mt: 8,
      py: 8,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(100, 149, 237, 0.2), transparent)'
      }
    }}
  >
    {/* Background geometric patterns */}
    <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      opacity: 0.1,
      zIndex: 0
    }}>
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: ['200px', '300px', '250px'][i],
            height: ['200px', '300px', '250px'][i],
            background: `linear-gradient(${45 * i}deg, #6495ED15, #87CEEB05)`,
            borderRadius: i % 2 ? '50%' : '30%',
            filter: 'blur(40px)',
            top: ['10%', '50%', '30%'][i],
            left: ['5%', '70%', '40%'][i],
            transform: `rotate(${i * 30}deg)`,
            opacity: 0.4,
            mixBlendMode: 'soft-light'
          }}
        />
      ))}
    </Box>

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={3}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #6495ED, #87CEEB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}
          >
            Seen Futures
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            paragraph
            sx={{
              maxWidth: '90%',
              lineHeight: 1.8
            }}
          >
            Autism specialist providing compassionate, play-based 
            therapy for children and families.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton 
              color="primary" 
              aria-label="Facebook"
              to="https://www.facebook.com/share/16U9W6RrUY/?mibextid=wwXIfr"
              component={Link}
              sx={{ 
                transition: 'all 0.3s ease-in-out',
                '&:hover': { 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  transform: 'translateY(-3px)'
                } 
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton 
              color="primary" 
              aria-label="Instagram"
              to="https://www.instagram.com/seenfutures?igsh=MW53d2x6ZTJ4ZnpqZQ=="
              component={Link}
              sx={{ 
                transition: 'all 0.3s ease-in-out',
                '&:hover': { 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  transform: 'translateY(-3px)'
                } 
              }}
            >
              <Instagram />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: 'text.primary'
            }}
          >
            Quick Links
          </Typography>
          <Stack spacing={1.5}>
            {['About', 'Services', 'FAQ', 'Contact'].map((page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase()}`}
                style={{ 
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.3s ease-in-out'
                }}
                className="footer-link"
              >
                {page}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: 'text.primary'
            }}
          >
            Services
          </Typography>
          <Stack spacing={1.5}>
            {[
              { name: 'Family Sessions', id: 'individual-therapy' },
              { name: 'Online Sessions', id: 'group-programs' },
              { name: 'School Collaboration', id: 'family-coaching' }
            ].map((service) => (
              <Link
                key={service.id}
                to="/services"
                style={{ 
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.3s ease-in-out'
                }}
                className="footer-link"
              >
                {service.name}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: 'text.primary'
            }}
          >
            Contact Info
          </Typography>
          <Stack spacing={3}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1.5,
                transition: 'all 0.3s ease-in-out',
                '&:hover': { transform: 'translateX(8px)' }
              }}
            >
              <Phone 
                color="primary" 
                sx={{ 
                  fontSize: 20,
                  p: 0.8,
                  borderRadius: '50%',
                  bgcolor: 'primary.light',
                  color: 'primary.dark'
                }} 
              />
              <Typography variant="body2" color="text.secondary">
                07494717859
              </Typography>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1.5,
                transition: 'all 0.3s ease-in-out',
                '&:hover': { transform: 'translateX(8px)' }
              }}
            >
              <Email 
                color="primary" 
                sx={{ 
                  fontSize: 20,
                  p: 0.8,
                  borderRadius: '50%',
                  bgcolor: 'primary.light',
                  color: 'primary.dark'
                }} 
              />
              <Typography variant="body2" color="text.secondary">
                seenfutures.edinburgh@gmail.com
              </Typography>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 1.5,
                transition: 'all 0.3s ease-in-out',
                '&:hover': { transform: 'translateX(8px)' }
              }}
            >
              <LocationOn 
                color="primary" 
                sx={{ 
                  fontSize: 20,
                  p: 0.8,
                  borderRadius: '50%',
                  bgcolor: 'primary.light',
                  color: 'primary.dark',
                  mt: 0.2
                }} 
              />
              <Typography variant="body2" color="text.secondary">
                Edinburgh and West Lothian, Scotland
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Divider 
        sx={{ 
          my: 6,
          opacity: 0.1,
          background: 'linear-gradient(90deg, transparent, rgba(100, 149, 237, 0.5), transparent)'
        }} 
      />
      
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', sm: 'center' },
          gap: 2,
          textAlign: { xs: 'center', sm: 'left' }
        }}
      >
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ opacity: 0.8 }}
        >
          © {new Date().getFullYear()} Seen Futures Autism Therapy. All rights reserved.
        </Typography>
        <Stack 
          direction="row" 
          spacing={3}
          sx={{ 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            '& a': {
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: 'primary.main',
                textShadow: '0 0 0.5px currentColor'
              }
            }
          }}
        >
          <Link to="/privacy" className="footer-link" component={Link}>
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-link" component={Link}>
            Terms & Conditions
          </Link>
          <Link to="/accessibility" className="footer-link" component={Link}>
            Accessibility
          </Link>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default Footer;