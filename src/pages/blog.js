// src/pages/Blog.jsx
import { Box, Typography, Container, Chip, Card, Grid } from '@mui/material';

const Blog = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Chip 
        label="Insights & Resources" 
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
        Blog
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
        Helpful resources and tips for families navigating autism support.
      </Typography>
    </Box>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 4, textAlign: 'center', border: '1px solid rgba(107, 115, 255, 0.1)', background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.03) 0%, rgba(255, 107, 157, 0.03) 100%)' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Coming Soon
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Our blog will feature expert advice, family stories, and practical strategies for supporting children and teens with autism. Stay tuned!
          </Typography>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default Blog;
