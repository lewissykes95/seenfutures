// src/pages/About.jsx
import { 
  Box, 
  Typography, 
  Container,
  Grid,
  Card,
  Avatar,
  Chip,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  EmojiEvents, 
  CheckCircle, 
  Star 
} from '@mui/icons-material';
import emilyPhoto from '../images/IMG_5465.jpg';

const About = () => {
  const credentials = [
    "Master's in Applied Behavior Analysis",
    "Autism Specialist (CAS)",
    "10+ Years of Clinical Experience",
    "Registered Behavior Technician Supervisor"
  ];

  const specialties = [
    {
      title: "Early Intervention",
      description: "Supporting children ages 2-6 with foundational skills development"
    },
    {
      title: "Communication Development", 
      description: "Building verbal and non-verbal communication skills"
    },
    {
      title: "Social Skills Training",
      description: "Helping children navigate social interactions and friendships"
    },
    {
      title: "Behavioral Support",
      description: "Addressing challenging behaviors with positive strategies"
    },
    {
      title: "School Readiness",
      description: "Preparing children for successful academic experiences"
    },
    {
      title: "Family Coaching",
      description: "Empowering parents with tools and strategies for home"
    }
  ];

  const values = [
    "Every individual has unique strengths and potential",
    "Families are the most important part of the team",
    "Evidence-based practice leads to meaningful outcomes",
    "Compassionate care builds trust and progress",
    "Celebrating small wins creates lasting change"
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Hero Section */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
        <Grid size={12} md={4} sx={{ textAlign: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              src={emilyPhoto}
              alt="Seen Futures"
              sx={{ 
                width: { xs: 200, md: 250 },
                height: { xs: 200, md: 250 },
                mx: 'auto',
                mb: 3,
                border: '4px solid',
                borderColor: 'primary.main',
                boxShadow: '0px 8px 32px rgba(107, 115, 255, 0.2)'
              }}
            />
            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
              {[1,2,3,4,5].map((star) => (
                <Star key={star} sx={{ color: '#FFD700', fontSize: 24 }} />
              ))}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              4.9/5 from 150+ families
            </Typography>
          </Box>
        </Grid>
        
        <Grid size={12} md={8}>
          <Chip 
            label="Autism Specialist" 
            color="primary" 
            sx={{ mb: 3, fontSize: '0.875rem', fontWeight: 600 }}
          />
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Meet Emily
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Transforming lives through compassionate, evidence-based autism support
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            With over a decade of experience in applied behavior analysis, I've dedicated my career 
            to helping children and families in <b>Edinburgh and the Lothians, Scotland</b> navigate the autism journey with confidence and joy. 
            My approach combines cutting-edge research with genuine care, creating individualized 
            programs that celebrate each person's unique strengths.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            I believe that every child has incredible potential, and with the right support, 
            families can thrive together. My mission is to provide that support with warmth, 
            expertise, and unwavering commitment to your family's success.
          </Typography>
        </Grid>
      </Grid>

      {/* Credentials Section */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 8,
          background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)',
          border: '1px solid rgba(107, 115, 255, 0.1)'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
          Professional Credentials
        </Typography>
        <Grid container spacing={2}>
          {credentials.map((credential, index) => (
            <Grid size={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmojiEvents color="primary" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {credential}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Specialties Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 6, textAlign: 'center' }}>
          Areas of Expertise
        </Typography>
        <Grid container spacing={4}>
          {specialties.map((specialty, index) => (
            <Grid size={4} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)',
                  border: '1px solid rgba(107, 115, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 12px 40px rgba(107, 115, 255, 0.15)',
                  }
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
                  {specialty.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {specialty.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Values Section */}
      <Grid container spacing={6} alignItems="center">
        <Grid size={6} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            My Core Values
          </Typography>
          <List>
            {values.map((value, index) => (
              <ListItem key={index} sx={{ px: 0, py: 1 }}>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary={value}
                  primaryTypographyProps={{
                    variant: 'body1',
                    sx: { fontWeight: 500 }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        
        <Grid size={12} md={6}>
          <Card
            sx={{
              p: 4,
              background: 'linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3, opacity: 0.9 }}>
              Let's work together to unlock your child's potential and strengthen your family's bond.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Free Initial Consultation
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              No commitment required • 30-minute session • Personalized recommendations
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;