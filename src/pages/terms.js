import React from 'react';
import { Container, Typography, Card, CardContent, Box, Stack, Avatar } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Terms = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72, mx: 'auto', mb: 2 }}>
          <GavelIcon fontSize="large" />
        </Avatar>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, background: 'linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Terms & Conditions
        </Typography>
      </Box>
      <Card sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, md: 4 }, background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)', border: '1px solid rgba(107, 115, 255, 0.1)' }}>
        <CardContent>
          <Typography variant="body1" paragraph>
            By using Seen Futures' services, you agree to our terms and conditions. All information provided on this website is for general guidance and does not constitute professional advice. Services are subject to availability and suitability. We reserve the right to update these terms at any time.
          </Typography>
          <Typography variant="body1" paragraph>
            For any questions regarding our terms, please contact us at <b>seenfutures.edinburgh@gmail.com</b>.
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

export default Terms;
