import React from 'react';
import { Container, Typography, Card, CardContent, Box, Stack, Avatar } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Accessibility = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72, mx: 'auto', mb: 2 }}>
          <AccessibilityNewIcon fontSize="large" />
        </Avatar>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, background: 'linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Accessibility Statement
        </Typography>
      </Box>
      <Card sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, md: 4 }, background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)', border: '1px solid rgba(107, 115, 255, 0.1)' }}>
        <CardContent>
          <Typography variant="body1" paragraph>
            Seen Futures is committed to making our website and services accessible to everyone, including people with disabilities. We strive to meet or exceed accessibility standards and welcome feedback to improve your experience.
          </Typography>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleIcon color="success" />
              <Typography variant="body1">Responsive design for all devices</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleIcon color="success" />
              <Typography variant="body1">Alt text for images and clear navigation</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleIcon color="success" />
              <Typography variant="body1">Keyboard and screen reader friendly</Typography>
            </Stack>
          </Stack>
          <Typography variant="body1" paragraph>
            If you encounter any accessibility barriers, please contact us at <b>seenfutures.edinburgh@gmail.com</b> and we will do our best to assist you.
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 4 }}>
            <CheckCircleIcon color="success" />
            <Typography variant="body2" color="text.secondary">
              Last updated: July 2025
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Accessibility;
