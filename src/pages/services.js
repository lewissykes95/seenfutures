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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  Schedule
} from '@mui/icons-material';

const Services = () => {

  const services = [
    {
      icon: <Person />,
      title: "Individual Therapy",
      subtitle: "One-on-one personalized support",
      description: "Comprehensive behavioral therapy tailored to your child's specific needs, strengths, and goals.",
      features: [
        "Customized behavior intervention plans",
        "Skill-building activities",
        "Progress tracking and data collection",
        "Regular family updates"
      ],
      duration: "60-90 minutes",
      frequency: "1-3 times per week",
      color: "primary"
    },
    {
      icon: <FamilyRestroom />,
      title: "Family Coaching",
      subtitle: "Empowering the whole family",
      description: "Training and support for parents and siblings to create consistent, supportive environments.",
      features: [
        "Parent training sessions",
        "Sibling support strategies",
        "Home environment optimization",
        "Crisis management techniques"
      ],
      duration: "45-60 minutes",
      frequency: "Weekly or bi-weekly",
      color: "secondary"
    },
    {
      icon: <School />,
      title: "School Collaboration",
      subtitle: "Educational advocacy & support",
      description: "Working with educational teams to ensure appropriate accommodations and successful learning.",
      features: [
        "IEP/504 plan development",
        "Teacher training and consultation",
        "Classroom observations",
        "Academic goal setting"
      ],
      duration: "Varies",
      frequency: "As needed",
      color: "success"
    },
    {
      icon: <Assessment />,
      title: "Behavioral Assessment",
      subtitle: "Comprehensive evaluation services",
      description: "Thorough assessments to understand behaviors and develop effective intervention strategies.",
      features: [
        "Functional behavior assessments",
        "Skill assessments",
        "Environmental evaluations",
        "Detailed reporting"
      ],
      duration: "2-4 hours",
      frequency: "Initial + follow-ups",
      color: "info"
    },
    {
      icon: <VideoCall />,
      title: "Teletherapy",
      subtitle: "Convenient online sessions",
      description: "High-quality therapy services delivered virtually for flexibility and accessibility.",
      features: [
        "Live video sessions",
        "Interactive online activities",
        "Parent coaching via video",
        "Flexible scheduling"
      ],
      duration: "45-60 minutes",
      frequency: "1-2 times per week",
      color: "warning"
    },
    {
      icon: <Groups />,
      title: "Group Programs",
      subtitle: "Social skills development",
      description: "Small group sessions focused on building social communication and peer interaction skills.",
      features: [
        "Age-appropriate groups",
        "Social skills curriculum",
        "Peer interaction practice",
        "Real-world application"
      ],
      duration: "60 minutes",
      frequency: "Weekly",
      color: "error"
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
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip 
          label="Evidence-Based Services" 
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
          My Services
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Comprehensive autism support services designed to help your child thrive 
          and your family grow stronger together
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent={'center'} margin={4}>
        {services.map((service, index) => {
          const idMap = {
            'Individual Therapy': 'individual-therapy',
            'Group Programs': 'group-programs',
            'Family Coaching': 'family-coaching',
            'School Collaboration': 'school-collaboration',
            'Behavioral Assessment': 'behavioral-assessment',
            'Teletherapy': 'teletherapy'
          };
          const sectionId = idMap[service.title] || '';
          return (
            <Grid size={6} sm={6} md={4} lg={3} key={index}>
              <Card
                id={sectionId}
                sx={{
                  height: '100%',
                  p: 3,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 12px 40px rgba(107, 115, 255, 0.15)',
                  },
                  margin: 2,
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: `${service.color}.main`,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>

                  <List dense sx={{ mb: 3 }}>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle color="success" sx={{ fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {service.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {service.frequency}
                      </Typography>
                    </Box>
                  </Box>

                  <Button 
                    variant="outlined" 
                    color={service.color}
                    fullWidth
                    href="/contact"
                    sx={{ mt: 'auto' }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Process Section */}
      <Paper 
        sx={{ 
          p: 6, 
          mb: 8,
          background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)',
          border: '1px solid rgba(107, 115, 255, 0.1)'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 6, textAlign: 'center' }}>
          How We Work Together
        </Typography>
        <Grid container spacing={4}>
          {processSteps.map((step, index) => (
            <Grid size={6} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  {step.step}
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Card
        sx={{
          p: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)',
          color: 'white'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
          Every journey begins with a single step. Let's take that step together.
        </Typography>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2}
          sx={{ justifyContent: 'center' }}
        >
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
            Schedule Free Consultation
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            href="/about"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'white',
              },
              px: 4,
              py: 2,
            }}
          >
            Learn About Emily
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default Services;