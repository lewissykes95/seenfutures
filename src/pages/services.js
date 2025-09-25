// src/pages/Services.jsx
import { 
  Box, 
  Typography, 
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Paper,
  Avatar
} from '@mui/material';
import { 
  Person, 
  FamilyRestroom, 
  School, 
  Assessment, 
  VideoCall,
  Groups,
  CheckCircle,
  Schedule,
  ChevronRight
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Services = () => {

  const services = [
    {
      icon: <FamilyRestroom />,
      title: "Family sessions",
      subtitle: "Empowering the whole family",
      description: "Strategies and support for you and your child to create consistent, supportive environments.",
      features: [
        "Child-led play-based sessions",
        "Parent support strategies",
        "Home environment optimisation",
        "Skill acquisition through play and your daily routine"
      ],
      duration: "2 hours",
      frequency: "Weekly",
      color: "primary"
    },
    {
      icon: <VideoCall />,
      title: "Online consultations",
      subtitle: "Convenient online sessions",
      description: "Parent consultation delivered virtually for flexibility and accessibility.",
      features: [
        "Parent coaching via video",
        "Individualised strategies tailored to you and your child",
        "Online resource sharing",
        "Flexible scheduling"
      ],
      duration: "30-60 minutes",
      frequency: "1-2 times per week",
      color: "secondary"
    },
    {
      icon: <School />,
      title: "School Collaboration",
      subtitle: "Educational advocacy & support",
      description: "Working with educational teams to ensure appropriate accommodations and successful learning.",
      features: [
        "Optional add on alongside our family coaching and online consultations model",
        "In-school sessions",
        "Child Planning Meeting",
        "Teacher collaboration for goal setting"
      ],
      duration: "Varies",
      frequency: "As needed",
      color: "success"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We'll discuss your needs and answer any questions"
    },
    {
      step: "2", 
      title: "Assessment",
      description: "Comprehensive evaluation to understand your child's strengths and needs"
    },
    {
      step: "3",
      title: "Plan Development", 
      description: "Create a personalized therapy plan with specific goals"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Begin services with regular progress monitoring and adjustments"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      perspective: '1000px'
    }}>
      {/* Interactive Background Elements */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {/* Geometric Patterns */}
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: ['150px', '200px', '300px'][i % 3],
              height: ['150px', '200px', '300px'][i % 3],
              background: `linear-gradient(${45 * i}deg, ${i % 2 ? '#6495ED' : '#87CEEB'}15, ${i % 2 ? '#87CEEB' : '#6495ED'}05)`,
              borderRadius: i % 2 ? '50%' : '30%',
              filter: 'blur(40px)',
              animation: `float-${i} ${20 + i * 2}s infinite ease-in-out`,
              top: ['5%', '25%', '45%', '65%', '85%', '15%', '35%', '55%', '75%', '95%', '20%', '60%'][i],
              left: ['8%', '75%', '45%', '15%', '85%', '35%', '65%', '25%', '95%', '55%', '30%', '70%'][i],
              transform: `rotate(${i * 30}deg) scale(${1 + (i % 3) * 0.2})`,
              opacity: 0.4,
              mixBlendMode: 'soft-light'
            }}
          />
        ))}
        
        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={`line-${i}`}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #6495ED22, transparent)',
              top: `${20 + i * 15}%`,
              animation: `wave-${i} ${8 + i * 2}s infinite ease-in-out`,
              transform: `rotate(${i * 5}deg)`,
              opacity: 0.3
            }}
          />
        ))}
      </Box>

      {/* Main Content */}
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 12 }
      }}>
        <Container maxWidth="xl">
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 700, 
              mb: 3,
              background: 'linear-gradient(45deg, #6495ED, #87CEEB)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              How We Can Help
            </Typography>
            <Typography variant="h5" sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              mb: 4,
              color: 'text.secondary'
            }}>
              Every child and family is different — and so is the support we offer. At Seen Futures, 
              we provide flexible, child-led services designed to meet you where you are.
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }}>
            {services.map((service, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(100, 149, 237, 0.1)'
                  },
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid rgba(100, 149, 237, 0.1)',
                  borderRadius: '16px'
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      <Avatar sx={{ 
                        width: 56, 
                        height: 56, 
                        bgcolor: `${service.color}.light`,
                        color: `${service.color}.main`,
                        mb: 2
                      }}>
                        {service.icon}
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                        {service.subtitle}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Schedule fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {service.duration} | {service.frequency}
                      </Typography>
                    </Stack>
                    <Box sx={{ mt: 'auto' }}>
                      <Stack spacing={1}>
                        {service.features.map((feature, idx) => (
                          <Stack key={idx} direction="row" spacing={1} alignItems="center">
                            <CheckCircle fontSize="small" sx={{ color: `${service.color}.main` }} />
                            <Typography variant="body2">{feature}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Process Steps */}
          <Box sx={{ 
            background: 'linear-gradient(135deg, rgba(100, 149, 237, 0.05) 0%, rgba(135, 206, 235, 0.05) 100%)',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            mb: { xs: 6, md: 10 }
          }}>
            <Typography variant="h3" sx={{ 
              textAlign: 'center', 
              mb: 4,
              fontWeight: 700
            }}>
              Our Process
            </Typography>
            <Grid container spacing={4}>
              {processSteps.map((step, index) => (
                <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <Paper sx={{
                    p: 3,
                    height: '100%',
                    background: 'white',
                    borderRadius: '16px',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}>
                    <Typography variant="h2" sx={{ 
                      color: 'primary.main',
                      mb: 2,
                      fontWeight: 700
                    }}>
                      {step.step}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* CTA Section */}
          <Box sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, #6495ED15 0%, #87CEEB15 100%)',
            borderRadius: '24px'
          }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Send us a message to discuss how we can support your child and family.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ChevronRight />}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                background: 'linear-gradient(45deg, #6495ED, #87CEEB)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5a86de, #7ab9d9)'
                }
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;