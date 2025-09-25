import { 
  Box, 
  Typography, 
  Container,
  Grid,
  Link,
  IconButton,
  Stack,
  Divider
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn,
  Facebook,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

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
            Autism specialist providing compassionate, evidence-based 
            therapy for children, teens, and families.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton 
              color="primary" 
              aria-label="Facebook"
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
            <IconButton 
              color="primary" 
              aria-label="LinkedIn"
              sx={{ 
                transition: 'all 0.3s ease-in-out',
                '&:hover': { 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  transform: 'translateY(-3px)'
                } 
              }}
            >
              <LinkedIn />
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
                href={`/${page.toLowerCase()}`}
                color="text.secondary"
                underline="none"
                sx={{ 
                  display: 'block',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateX(8px)',
                    textShadow: '0 0 0.5px currentColor'
                  }
                }}
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
              { name: 'Individual Therapy', id: 'individual-therapy' },
              { name: 'Group Sessions', id: 'group-programs' },
              { name: 'Family Support', id: 'family-coaching' },
              { name: 'School Consultation', id: 'school-collaboration' },
              { name: 'Assessment Services', id: 'behavioral-assessment' }
            ].map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                color="text.secondary"
                underline="none"
                sx={{ 
                  display: 'block',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateX(8px)',
                    textShadow: '0 0 0.5px currentColor'
                  }
                }}
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
                Edinburgh and the Lothians, Scotland
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
          <Link href="/privacy" color="text.secondary" underline="none">
            Privacy Policy
          </Link>
          <Link href="/terms" color="text.secondary" underline="none">
            Terms & Conditions
          </Link>
          <Link href="/accessibility" color="text.secondary" underline="none">
            Accessibility
          </Link>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default Footer;