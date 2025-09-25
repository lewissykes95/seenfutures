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
  Star,
  ChevronRight
} from '@mui/icons-material';
import emilyPhoto from '../images/IMG_5465.jpg';
import logo from '../images/logo3.png';
import image1 from '../images/image1.png';
import { Link } from 'react-router-dom';

const Home = () => {

  const features = [
    {
      icon: <Psychology />,
      title: "About Seen Futures",
      description: "Neuroaffirming, child-led autism support in Edinburgh & West Lothian. We celebrate every child’s strengths and create joyful opportunities for growth.",
      linkText: "Learn more about who we are",
      link: "/about"
    },
    {
      icon: <FamilyRestroom />,
      title: "How Can We Help?",
      description: "Family-centred, play-based sessions tailored to your child. We walk alongside families, supporting communication, play, and emotional regulation.",
      linkText: "Find out more about our services",
      link: "/services"
    },
    {
      icon: <AutoAwesome />,
      title: "FAQ",
      description: "No diagnosis needed. We welcome children at any stage—whether you’re exploring next steps, waiting for assessment, or already have a diagnosis.",
      linkText: "View more FAQ",
      link: "/faq"
    },
    {
      icon: <Schedule />,
      title: "Contact Us",
      description: "Curious about our approach or ready to book a free discovery call? Get in touch to find out more. Serving Edinburgh & West Lothian.",
      linkText: "Fill out our initial contact form",
      link: "/contact"
    }
  ];

  const benefits = [
    "Communication and social skills",
    "Emotional Regulation focused",
    "Independent living skills",
    "Academic support",
    "Behavioural guidance"
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
        display: 'none', // Temporarily hiding the geometric patterns to see background
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

      {/* Hero Section */}
      <Box sx={{
        minHeight: '100vh',
        marginTop: '-64px', // Compensate for navbar height
        paddingTop: '84px', // Add extra padding to ensure content doesn't touch the navbar
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -5, // Extended overlap to ensure no gap
          left: 0,
          right: 0,
          height: '70px', // Increased height for smoother blend
          background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.85) 100%)',
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 65px, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)',
          zIndex: 0
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} sx={{
              height: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(circle at center, #6495ED08 0%, transparent 70%)',
                borderRadius: '30px',
                zIndex: 0
              }
            }}>
              <Box sx={{ 
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                width: '100%',
                p: { xs: 3, md: 5 }
              }}>
                {/* Enhanced Logo Container */}
                <Box sx={{ 
                  position: 'relative',
                  display: 'inline-block',
                  mt: 12,
                  mb: 8,
                  transformStyle: 'preserve-3d',
                  animation: 'float-main 6s infinite ease-in-out'
                }}>
                  <Box sx={{
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -30,
                      background: 'linear-gradient(45deg, #6495ED22 0%, #87CEEB22 100%)',
                      borderRadius: '60%',
                      animation: 'pulse-3d 4s infinite ease-in-out',
                      filter: 'blur(20px)',
                      transform: 'translateZ(-20px)'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: -15,
                      border: '2px dashed #6495ED22',
                      borderRadius: '50%',
                      animation: 'spin-3d 30s linear infinite'
                    }
                  }}>
                    <Box sx={{
                      position: 'relative',
                      background: '#FFFFFF',
                      borderRadius: '50%',
                      padding: '15px',
                      boxShadow: '0 8px 32px rgba(100, 149, 237, 0.15)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -5,
                        background: 'linear-gradient(45deg, #6495ED33, #87CEEB33)',
                        borderRadius: '50%',
                        filter: 'blur(10px)',
                        animation: 'pulse-glow 2s infinite alternate'
                      }
                    }}>
                      <img
                        src={logo}
                        alt="Seen Futures"
                        style={{ 
                          width: 360,
                          height: 360,
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: '50%',
                          border: '6px solid white',
                          boxShadow: 'inset 0 2px 15px rgba(255,255,255,0.6)',
                          transform: 'translateZ(20px)',
                          transition: 'all 0.5s ease-out'
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Enhanced Typography with Animation */}
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4,
                    lineHeight: 1.8,
                    color: 'grey.800',
                    fontSize: { xs: '1.25rem', md: '1.35rem' },
                    fontWeight: 500,
                    position: 'relative',
                    animation: 'fade-up 0.8s ease-out',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: { xs: '50%', md: 0 },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      bottom: -10,
                      width: 140,
                      height: 4,
                      background: 'linear-gradient(90deg, #6495ED, transparent)',
                      borderRadius: 2,
                      animation: 'width-expand 1s ease-out'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: { xs: '50%', md: 0 },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      bottom: -10,
                      width: 70,
                      height: 4,
                      background: 'linear-gradient(90deg, #87CEEB, transparent)',
                      borderRadius: 2,
                      animation: 'width-expand-delay 1.5s ease-out'
                    }
                  }}
                >
                  At Seen Futures, we partner with families across Edinburgh and West Lothian to offer child-led, individualised support for autistic children. With emotional regulation at the centre of everything we do, we create safe, joyful spaces where children are seen, families feel supported, and and everyone is empowered to grow together.
                </Typography>

                <Typography
                  variant="h5" 
                  sx={{ 
                    mb: 6,
                    color: 'grey.800',
                    fontSize: { xs: '1.25rem', md: '1.35rem' },
                    fontWeight: 500,
                    animation: 'fade-up 0.8s ease-out 0.2s backwards'
                  }}
                >
                  Get in touch today to find out more
                </Typography>

                {/* Enhanced Benefits Section */}
                <Box sx={{ 
                  mb: 6, 
                  position: 'relative',
                  animation: 'fade-up 0.8s ease-out 0.4s backwards'
                }}>
                  <Stack 
                    direction="row" 
                    spacing={2} 
                    flexWrap="wrap"
                    gap={2}
                    sx={{ 
                      justifyContent: { xs: 'center', md: 'flex-start' }
                    }}
                  >
                    {benefits.map((benefit, index) => (
                      <Chip
                        key={index}
                        icon={<CheckCircle sx={{ 
                          color: index % 2 === 0 ? '#FFB6C1 !important' : '#98FB98 !important',
                          animation: `fade-in 0.5s ease-out ${index * 0.1}s backwards`
                        }} />}
                        label={benefit}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid #6495ED33',
                          color: '#2C3E50',
                          py: 2.5,
                          animation: `slide-up 0.5s ease-out ${index * 0.1}s backwards`,
                          '& .MuiChip-label': {
                            px: 2,
                            fontWeight: 500,
                            fontSize: '1rem'
                          },
                          '&:hover': {
                            bgcolor: '#F0F8FF',
                            transform: 'translateY(-4px) scale(1.02)',
                            boxShadow: '0 8px 30px rgba(100, 149, 237, 0.2)',
                            '& .MuiChip-icon': {
                              transform: 'scale(1.1) rotate(5deg)'
                            }
                          },
                          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* Enhanced Button Group */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                  sx={{ 
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    animation: 'fade-up 0.8s ease-out 0.6s backwards'
                  }}
                >
                  <Button 
                    variant="contained" 
                    size="large" 
                    href="/contact"
                    component={Link}
                    to="/contact"
                    sx={{ 
                      px: 5,
                      py: 2.5,
                      fontSize: '1.15rem',
                      background: 'linear-gradient(45deg, #6495ED 0%, #87CEEB 100%)',
                      color: '#FFF',
                      fontWeight: 600,
                      borderRadius: '30px',
                      textTransform: 'none',
                      boxShadow: '0 4px 15px rgba(100, 149, 237, 0.2)',
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s ease'
                      },
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.02)',
                        boxShadow: '0 8px 30px rgba(100, 149, 237, 0.3)',
                        background: 'linear-gradient(45deg, #6495ED 20%, #87CEEB 120%)',
                        '&::before': {
                          transform: 'translateX(100%)'
                        }
                      }
                    }}
                  >
                   Send us a message
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large" 
                    to="/about"
                    component={Link}
                    sx={{ 
                      px: 5,
                      py: 2.5,
                      fontSize: '1.15rem',
                      borderColor: '#6495ED',
                      color: '#6495ED',
                      fontWeight: 600,
                      borderRadius: '30px',
                      textTransform: 'none',
                      borderWidth: '2px',
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, transparent, rgba(100,149,237, 0.1), transparent)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s ease'
                      },
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.02)',
                        borderColor: '#6495ED',
                        background: 'rgba(100, 149, 237, 0.05)',
                        boxShadow: '0 8px 30px rgba(100, 149, 237, 0.15)',
                        '&::before': {
                          transform: 'translateX(100%)'
                        }
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Features Section */}
      <Box sx={{ 
        py: { xs: 10, md: 15 }, 
        position: 'relative',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F8FF 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(180deg, transparent, #F0F8FF)',
          transform: 'translateY(-100%)'
        }
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item size={{ xs: 12, md: 6 }} key={index} sx={{
                animation: `fade-up 0.8s ease-out ${index * 0.2}s backwards`
              }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '30px',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    border: '1px solid rgba(100, 149, 237, 0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(100, 149, 237, 0.15)',
                      '& .feature-icon': {
                        transform: 'rotate(-8deg) scale(1.1)',
                        boxShadow: '0 12px 25px rgba(100, 149, 237, 0.25)'
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '6px',
                      background: 'linear-gradient(90deg, #6495ED, #87CEEB)',
                      opacity: 0.7
                    }
                  }}
                >
                  <Box sx={{ p: { xs: 4, md: 5 } }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: 3
                    }}>
                      <Box
                        className="feature-icon"
                        sx={{
                          mr: 3,
                          p: 2.5,
                          borderRadius: '20px',
                          background: index === 0 ? 'linear-gradient(45deg, #FFB6C1 0%, #FFC0CB 100%)' :
                                     index === 1 ? 'linear-gradient(45deg, #98FB98 0%, #90EE90 100%)' :
                                     index === 2 ? 'linear-gradient(45deg, #87CEFA 0%, #B0E0E6 100%)' :
                                                 'linear-gradient(45deg, #DDA0DD 0%, #E6E6FA 100%)',
                          color: '#FFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: index === 0 ? '0 8px 20px rgba(255, 182, 193, 0.3)' :
                                    index === 1 ? '0 8px 20px rgba(152, 251, 152, 0.3)' :
                                    index === 2 ? '0 8px 20px rgba(135, 206, 250, 0.3)' :
                                                '0 8px 20px rgba(221, 160, 221, 0.3)',
                          transform: 'rotate(-5deg)',
                          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          '& svg': {
                            fontSize: '2rem',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                          }
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          color: '#2C3E50',
                          fontSize: '1.4rem',
                          lineHeight: 1.3,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: 0,
                            width: 40,
                            height: 3,
                            background: 'linear-gradient(90deg, #6495ED, transparent)',
                            borderRadius: 2
                          }
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: '#2C3E50',
                        mb: 4,
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        opacity: 0.85
                      }}
                    >
                      {feature.description}
                    </Typography>
                    <Button
                      variant="text"
                      component={Link}
                      to={feature.link}
                      endIcon={<ChevronRight sx={{
                        transition: 'transform 0.3s ease',
                        '.MuiButton-root:hover &': {
                          transform: 'translateX(4px)'
                        }
                      }} />}
                      sx={{
                        color: '#6495ED',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        p: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(100, 149, 237, 0.05)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {feature.linkText}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced CTA Section */}
      <Box sx={{ 
        py: { xs: 10, md: 15 }, 
        background: 'linear-gradient(180deg, #F0F8FF 0%, #FFFFFF 100%)'
      }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              background: 'linear-gradient(135deg, #6495ED 0%, #87CEEB 100%)',
              borderRadius: '40px',
              p: { xs: 6, md: 10 },
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transform: 'translateZ(0)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 70%)',
                animation: 'shine 8s infinite linear'
              }
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ 
              fontWeight: 800, 
              color: '#FFF',
              mb: 3,
              position: 'relative',
              textShadow: '0 2px 15px rgba(0,0,0,0.1)',
              animation: 'fade-up 0.8s ease-out'
            }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="h5" sx={{ 
              mb: 6, 
              color: '#FFF', 
              opacity: 0.95,
              fontWeight: 500,
              position: 'relative',
              maxWidth: '800px',
              mx: 'auto',
              animation: 'fade-up 0.8s ease-out 0.2s backwards'
            }}>
              Schedule a free consultation to discuss your child's needs and how we can help.
            </Typography>
            <Button
              variant="contained"
              size="large"
              to="/contact"
              component={Link}
              sx={{
                bgcolor: '#FFF',
                color: '#6495ED',
                px: 8,
                py: 3,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: '35px',
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: 'fade-up 0.8s ease-out 0.4s backwards',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.8), transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s ease'
                },
                '&:hover': {
                  bgcolor: '#FFF',
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
                  '&::before': {
                    transform: 'translateX(100%)'
                  }
                }
              }}
            >
              Send us a message
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Enhanced Animations */}
      <Box
        sx={{
          '@keyframes pulse-3d': {
            '0%': { transform: 'translateZ(-20px) scale(1)', opacity: 0.5 },
            '50%': { transform: 'translateZ(-30px) scale(1.05)', opacity: 0.3 },
            '100%': { transform: 'translateZ(-20px) scale(1)', opacity: 0.5 }
          },
          '@keyframes spin-3d': {
            '0%': { transform: 'rotateZ(0deg)' },
            '100%': { transform: 'rotateZ(360deg)' }
          },
          '@keyframes float-main': {
            '0%': { transform: 'translateZ(0) translateY(0)' },
            '50%': { transform: 'translateZ(20px) translateY(-10px)' },
            '100%': { transform: 'translateZ(0) translateY(0)' }
          },
          '@keyframes pulse-glow': {
            '0%': { opacity: 0.5, transform: 'scale(1)' },
            '100%': { opacity: 0.8, transform: 'scale(1.1)' }
          },
          '@keyframes fade-up': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          },
          '@keyframes width-expand': {
            '0%': { width: 0, opacity: 0 },
            '100%': { width: 140, opacity: 1 }
          },
          '@keyframes width-expand-delay': {
            '0%': { width: 0, opacity: 0 },
            '50%': { width: 0, opacity: 0 },
            '100%': { width: 70, opacity: 1 }
          },
          '@keyframes slide-up': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          },
          '@keyframes shine': {
            '0%': { transform: 'translateX(-100%) rotate(45deg)' },
            '100%': { transform: 'translateX(100%) rotate(45deg)' }
          },
          ...Object.fromEntries([...Array(12)].map((_, i) => [
            `@keyframes float-${i}`,
            {
              '0%': { transform: `rotate(${i * 30}deg) translate(0, 0)` },
              '50%': { transform: `rotate(${i * 30}deg) translate(${20 + i * 5}px, ${30 + i * 2}px)` },
              '100%': { transform: `rotate(${i * 30}deg) translate(0, 0)` }
            }
          ])),
          '@keyframes wave-0': {
            '0%': { transform: 'translateX(-100%) rotate(0deg)' },
            '100%': { transform: 'translateX(100%) rotate(0deg)' }
          }
        }}
      />
    </Box>
  );
};

export default Home;