// src/pages/Home.jsx
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Paper, 
  Container,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import { 
  Psychology, 
  FamilyRestroom, 
  AutoAwesome, 
  Schedule,
  CheckCircle,
  Star
} from '@mui/icons-material';
import emilyPhoto from '../images/IMG_5465.jpg';
import logo from '../images/logo3.png';

const Home = () => {

  const features = [
    {
      icon: <Psychology />,
      title: "Personalized Approach",
      description: "Every therapy plan is tailored to your child's unique needs and strengths"
    },
    {
      icon: <FamilyRestroom />,
      title: "Family-Centered",
      description: "We involve the whole family in the therapeutic process for lasting success"
    },
    {
      icon: <AutoAwesome />,
      title: "Evidence-Based",
      description: "Using proven ABA techniques and the latest research in autism support"
    },
    {
      icon: <Schedule />,
      title: "Flexible Scheduling",
      description: "Convenient session times that work with your family's schedule"
    }
  ];

  const benefits = [
    "Improved communication skills",
    "Enhanced social interactions", 
    "Better emotional regulation",
    "Increased independence",
    "Academic support",
    "Behavioral guidance"
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 1, md: 2 }, px: { xs: 1, sm: 1, md: 2 } }}>
      <Grid container spacing={8} alignItems="center">
        <Grid size={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Paper
              sx={{ 
                margin: 2,
                borderRadius: '10%', 
                overflow: 'hidden', 
                backgroundColor: 'transparent',
                position: 'relative',
                '&::before': {
                  content: '""',
                  background: 'linear-gradient(45deg, #6B73FF, #FF6B9D)',
                  borderRadius: '50%',
                  zIndex: -1,
                  animation: 'pulse 3s ease-in-out infinite',
                }
              }}
              elevation={0}
            >
              <img
                src={logo}
                alt="Seen Futures"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block' 
                }}
              />
            </Paper>

          </Box>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{ 
                mb: 4,
                lineHeight: 1.6,
                maxWidth: { md: '90%' }
              }}
            >
              Helping children, teens, and families thrive together through personalized, 
              behavior-based therapy and evidence-based support.
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                href="/contact"
                sx={{ 
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                Book a Free Consultation
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                href="/services"
                sx={{ 
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid size={12} md={6}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Chip 
              label="Autism Specialist" 
              color="primary" 
              sx={{ 
                mb: 3,
                px: 2,
                py: 1,
                fontSize: '0.875rem',
                fontWeight: 600
              }} 
            />
            <Paper
              sx={{ 
                borderRadius: '50%', 
                overflow: 'hidden', 
                width: { xs: '280px', sm: '350px', md: '400px' },
                height: { xs: '280px', sm: '350px', md: '400px' },
                mx: 'auto',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: -20,
                  bottom: -20,
                  background: 'linear-gradient(45deg, #6B73FF, #FF6B9D)',
                  borderRadius: '50%',
                  zIndex: -1,
                  animation: 'pulse 2s ease-in-out infinite',
                }
              }}
              elevation={0}
            >
              <img
                src={emilyPhoto}
                alt="Seen Futures"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block' 
                }}
              />
            </Paper>
            
            <Card
              sx={{
                position: 'absolute',
                bottom: { xs: -30, md: -20 },
                right: { xs: '40%', md: '30%' },
                zIndex: 2,
                maxWidth: 220,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(107, 115, 255, 0.1)',
                boxShadow: 6,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Stack direction="row" spacing={0.5} sx={{ mb: 1 }}>
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} sx={{ color: '#FFD700', fontSize: 16 }} />
                  ))}
                </Stack>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
                  "Emily transformed our family's daily life. Highly recommend!"
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  - Parent testimonial
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom
          sx={{ mb: 6, fontWeight: 600, marginTop: 6 }}
        >
          Why Choose Our Approach?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={6} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)',
                  border: '1px solid rgba(107, 115, 255, 0.1)',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
        <Grid size={12} md={6}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Positive Outcomes for Your Family
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
            Our comprehensive approach focuses on building skills that matter most 
            for daily life, helping your child reach their full potential.
          </Typography>
          <Grid container spacing={2}>
            {benefits.map((benefit, index) => (
              <Grid size={12} sm={6} md={4} key={index}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CheckCircle color="success" />
                  <Typography variant="body1">{benefit}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid size={12} md={6}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)',
              borderRadius: 4,
              p: 4,
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3, opacity: 0.9 }}>
              Schedule a free consultation to discuss your child's needs and how we can help.
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              size="large"
              href="/contact"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
                px: 4,
                py: 2,
              }}
            >
              Book Free Consultation
            </Button>
          </Box>
        </Grid>
      </Grid>

      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </Container>
  );
};

export default Home;