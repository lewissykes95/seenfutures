// src/pages/About.jsx
import { 
  Box, 
  Typography, 
  Container,
  Grid,
  Card,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  EmojiEvents, 
  CheckCircle, 
  Star,
  Psychology,
  FamilyRestroom
} from '@mui/icons-material';

const About = () => {
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 8 } }}>
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '-20px',
            background: 'radial-gradient(circle at center, #6495ED08 0%, transparent 70%)',
            borderRadius: '30px',
            transform: 'translateZ(-10px)',
            zIndex: -1
          }
        }}>
          <Typography variant="h2" sx={{ 
            fontWeight: 700, 
            mb: 2,
            background: 'linear-gradient(45deg, #6495ED, #87CEEB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            🌟 About Seen Futures
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Welcome to Our Journey of Connection and Growth
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8,
            maxWidth: '800px',
            margin: '0 auto',
            color: 'text.secondary'
          }}>
            At Seen Futures, we believe every child deserves to feel safe, understood, and celebrated for who they are. Our work is all about helping autistic children and their families build connection, confidence, and calm through play and partnership.<br /><br />
            We are based in Edinburgh and West Lothian, supporting children, parents, and schools with a neuroaffirming, child-led approach that puts emotional regulation at the centre of everything we do.
          </Typography>
        </Box>

        {/* Meet Emily Section */}
        <Box sx={{ 
          mb: 8,
          p: 6,
          borderRadius: '30px',
          background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 3,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #6495ED, #87CEEB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Meet Emily
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.15rem', 
            lineHeight: 1.7, 
            mb: 3,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Hi, I'm Emily Sykes, the founder of Seen Futures. With more than a decade of experience, I bring both professional knowledge and hands-on practice to the families I support. I've spent my career working alongside autistic children and their families, and I know how important it is for children to feel truly seen.
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.15rem', 
            lineHeight: 1.7, 
            mb: 3,
            textAlign: 'center'
          }}>
            I created Seen Futures to bring together what I believe matters most:
          </Typography>
          <List sx={{ maxWidth: '800px', margin: '0 auto' }}>
            <ListItem>
              <ListItemIcon>
                <Star sx={{ color: '#FFD700' }} />
              </ListItemIcon>
              <ListItemText 
                primary="A child-led, play-based approach that makes learning feel natural and joyful."
                sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Star sx={{ color: '#FFD700' }} />
              </ListItemIcon>
              <ListItemText 
                primary="A focus on emotional regulation, so children feel safe before anything else."
                sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Star sx={{ color: '#FFD700' }} />
              </ListItemIcon>
              <ListItemText 
                primary="A strong partnership with families, because lasting change happens when everyone feels supported."
                sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Values Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 4,
            background: 'linear-gradient(45deg, #6495ED, #87CEEB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Our Values
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.7, mb: 6 }}>
            At Seen Futures, our values guide every session, every conversation, and every relationship.
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <FamilyRestroom sx={{ fontSize: 40, color: '#6495ED' }} />,
                title: "Families as Partners",
                description: "Collaborating closely with parents and carers for consistent support."
              },
              {
                icon: <Psychology sx={{ fontSize: 40, color: '#6495ED' }} />,
                title: "Child-Led & Playful",
                description: "Learning follows each child's lead through engaging, hands-on play."
              },
              {
                icon: <Star sx={{ fontSize: 40, color: '#6495ED' }} />,
                title: "Safe, Supportive and Individualised",
                description: "Emotional regulation and co-regulation are at the heart of every session, with plans tailored to each child's strengths."
              }
            ].map((value, index) => (
              <Grid size={12} key={index}>
                <Card sx={{ 
                  p: 4, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  borderRadius: '20px',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}>
                  <Box sx={{ mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Approach Section */}
        <Box sx={{ 
          mb: 6, 
          p: 6, 
          borderRadius: '30px',
          background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 4,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #6495ED, #87CEEB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Our Approach
          </Typography>
          <Grid container spacing={3}>
            {[
              "Neuroaffirming — celebrating differences, not trying to change who a child is",
              "Play-based — using fun, hands-on learning led by children's interests",
              "Prioritises emotional wellbeing — placing regulation and co-regulation before anything else",
              "Flexible and individualised — every strategy and goal is tailored to your child and family"
            ].map((text, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card sx={{ 
                  p: 3,
                  height: '100%',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  border: '1px solid rgba(100,149,237,0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <CheckCircle sx={{ color: '#6495ED', mt: 0.5 }} />
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                      {text}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" sx={{ 
            fontSize: '1.15rem', 
            lineHeight: 1.7, 
            mt: 4,
            textAlign: 'center',
            color: 'text.secondary'
          }}>
            We believe learning should feel safe, joyful, and meaningful.<br /><br />
            Please get in touch to learn more about us, our values and our approach.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;