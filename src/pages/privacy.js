import React from 'react';
import { Container, Typography, Box, Card, CardContent, Stack, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72, mx: 'auto', mb: 2 }}>
          <PrivacyTipIcon fontSize="large" />
        </Avatar>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, background: 'linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Privacy Policy
        </Typography>
      </Box>
      <Card sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, md: 4 }, background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)', border: '1px solid rgba(107, 115, 255, 0.1)' }}>
        <CardContent>
          <Typography variant="body1" paragraph>
            Seen Futures is committed to protecting your privacy. We only collect personal information necessary to provide our services, such as your name, contact details, and information relevant to your enquiry or care. Your data is never sold or shared with third parties except as required by law or to deliver our services.
          </Typography>
          <Typography variant="body1" paragraph>
            We use secure methods to store and process your information. You have the right to access, correct, or request deletion of your data at any time. For questions about our privacy practices, please contact us at <b>seenfutures.edinburgh@gmail.com</b>.
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

export default PrivacyPolicy;
