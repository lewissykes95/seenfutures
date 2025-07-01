// src/components/Footer.jsx
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
      borderTop: '1px solid rgba(107, 115, 255, 0.1)',
      mt: 8,
      py: 6
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid size={12}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 3
            }}
          >
            Emily Davis
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Certified autism specialist providing compassionate, evidence-based 
            therapy for children, teens, and families.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton 
              color="primary" 
              aria-label="Facebook"
              sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
              <Facebook />
            </IconButton>
            <IconButton 
              color="primary" 
              aria-label="Instagram"
              sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
              <Instagram />
            </IconButton>
            <IconButton 
              color="primary" 
              aria-label="LinkedIn"
              sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Grid>

        <Grid size={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {['About', 'Services', 'FAQ', 'Blog', 'Contact'].map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase()}`}
                color="text.secondary"
                underline="hover"
                sx={{ 
                  display: 'block',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {page}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Grid size={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Services
          </Typography>
          <Stack spacing={1}>
            {[
              'Individual Therapy',
              'Group Sessions', 
              'Family Support',
              'School Consultation',
              'Assessment Services'
            ].map((service) => (
              <Typography
                key={service}
                variant="body2"
                color="text.secondary"
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {service}
              </Typography>
            ))}
          </Stack>
        </Grid>

        <Grid size={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Contact Info
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone color="primary" sx={{ fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                (555) 123-4567
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email color="primary" sx={{ fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                emily@autismtherapy.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <LocationOn color="primary" sx={{ fontSize: 20, mt: 0.2 }} />
              <Typography variant="body2" color="text.secondary">
                123 Therapy Lane<br />
                Wellness City, WC 12345
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

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
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Emily Davis Autism Therapy. All rights reserved.
        </Typography>
        <Stack 
          direction="row" 
          spacing={3}
          sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link href="/privacy" color="text.secondary" underline="hover">
            Privacy Policy
          </Link>
          <Link href="/terms" color="text.secondary" underline="hover">
            Terms of Service
          </Link>
          <Link href="/accessibility" color="text.secondary" underline="hover">
            Accessibility
          </Link>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default Footer;