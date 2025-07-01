// src/pages/Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Box, 
  TextField, 
  Typography, 
  Button,
  Container,
  Grid,
  Card,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material';
import { 
  Phone, 
  Email, 
  LocationOn,
  Schedule,
  CheckCircle,
  Send,
  AutoAwesome,
  Psychology,
  AccessTime
} from '@mui/icons-material';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    hearAbout: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Handle input changes
  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.parentName.trim()) {
      errors.parentName = 'Parent/Guardian name is required';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[?\d\s\-()]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS using environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Config:', { serviceId, templateId, publicKey });
      
      // Check if EmailJS is properly configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS not properly configured. Please check your environment variables.');
      }
      
      // Prepare email parameters
      const templateParams = {
        from_name: formData.parentName,
        from_email: formData.email,
        phone: formData.phone,
        child_name: formData.childName,
        child_age: formData.childAge,
        hear_about: formData.hearAbout,
        message: formData.message,
        reply_to: formData.email,
        email: formData.email
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully!');
      
      // Reset form and show success message
      setFormData({
        parentName: '',
        phone: '',
        email: '',
        childName: '',
        childAge: '',
        hearAbout: '',
        message: ''
      });
      
      setShowSuccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone />,
      title: "Phone",
      value: "(555) 123-4567",
      description: "Call for immediate assistance",
      color: "primary"
    },
    {
      icon: <Email />,
      title: "Email",
      value: "emily@autismtherapy.com",
      description: "Send us a detailed message",
      color: "secondary"
    },
    {
      icon: <LocationOn />,
      title: "Office",
      value: "123 Therapy Lane, Wellness City, WC 12345",
      description: "Visit us for in-person sessions",
      color: "success"
    },
    {
      icon: <Schedule />,
      title: "Hours",
      value: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
      description: "We're here when you need us",
      color: "info"
    }
  ];

  const benefits = [
    "Free 30-minute initial consultation",
    "Personalized therapy recommendations",
    "Flexible scheduling options",
    "Insurance verification assistance",
    "Family-centered approach"
  ];

  const reasons = [
    {
      icon: <AutoAwesome />,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: <Psychology />,
      title: "Expert Guidance",
      description: "Get professional advice from day one"
    },
    {
      icon: <AccessTime />,
      title: "Flexible Scheduling",
      description: "Sessions that fit your family's lifestyle"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip 
          label="Let's Start Your Journey" 
          color="primary" 
          sx={{ mb: 3, fontSize: '0.875rem', fontWeight: 600 }}
        />
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            mb: 3,
            background: 'linear-gradient(45deg, #6B73FF 30%, #FF6B9D 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Get In Touch
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
          Ready to take the first step? We're here to support you and your family every step of the way.
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Card sx={{ p: { xs: 3, md: 4 }, height: 'fit-content' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
              Schedule Your Free Consultation
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 3 } }}>
              <Grid container spacing={3}>
                <Grid size={6}>
                  <TextField 
                    fullWidth 
                    label="Parent/Guardian Name" 
                    required 
                    variant="outlined"
                    value={formData.parentName}
                    onChange={handleInputChange('parentName')}
                    error={!!formErrors.parentName}
                    helperText={formErrors.parentName}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField 
                    fullWidth 
                    label="Phone Number" 
                    required 
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    error={!!formErrors.phone}
                    helperText={formErrors.phone}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField 
                    fullWidth 
                    label="Email Address" 
                    required 
                    type="email" 
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField 
                    fullWidth 
                    label="Child's Name" 
                    variant="outlined"
                    value={formData.childName}
                    onChange={handleInputChange('childName')}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField 
                    fullWidth 
                    label="Child's Age" 
                    variant="outlined"
                    value={formData.childAge}
                    onChange={handleInputChange('childAge')}
                  />
                </Grid>
                <Grid size={12}>
                  <FormControl 
                    fullWidth 
                    variant="outlined"
                  >
                    <InputLabel>How did you hear about us?</InputLabel>
                    <Select 
                      label="How did you hear about us?"
                      value={formData.hearAbout}
                      onChange={handleInputChange('hearAbout')}
                    >
                      <MenuItem value="google">Google Search</MenuItem>
                      <MenuItem value="referral">Doctor/Therapist Referral</MenuItem>
                      <MenuItem value="friend">Friend/Family</MenuItem>
                      <MenuItem value="social">Social Media</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth 
                    label="Tell us about your needs and goals" 
                    multiline 
                    rows={4} 
                    variant="outlined"
                    placeholder="Share any specific concerns, goals, or questions you have. This helps us prepare for our conversation and provide the most relevant guidance."
                    value={formData.message}
                    onChange={handleInputChange('message')}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 4 }}>
                <Button 
                  type="submit"
                  variant="contained" 
                  color="primary" 
                  size="large"
                  startIcon={<Send />}
                  fullWidth={{ xs: true, sm: false }}
                  disabled={isSubmitting}
                  sx={{ 
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
                </Button>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  We'll contact you within 24 hours to schedule your consultation
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Contact Info & Benefits */}
        <Grid size={12}>
          <Stack spacing={4}>
            {/* Contact Methods */}
            <Paper sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>
              <Stack spacing={3}>
                {contactMethods.map((method, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: `${method.color}.main`,
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                      }}
                    >
                      {method.icon}
                    </Avatar>
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {method.title}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5, wordBreak: 'break-word' }}>
                        {method.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {method.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* What You Get */}
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)',
                border: '1px solid rgba(107, 115, 255, 0.1)'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                What You Get
              </Typography>
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={benefit}
                      primaryTypographyProps={{
                        variant: 'body1',
                        fontWeight: 500
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>

            {/* Why Choose Us */}
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Why Families Choose Us
              </Typography>
              <Stack spacing={3}>
                {reasons.map((reason, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        width: 40,
                        height: 40,
                      }}
                    >
                      {reason.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {reason.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {reason.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* Emergency Contact */}
            <Card
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, #6B73FF 0%, #FF6B9D 100%)',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Need Immediate Support?
              </Typography>
              <Typography variant="body2" paragraph sx={{ opacity: 0.9, mb: 2 }}>
                For urgent behavioral concerns or crisis situations
              </Typography>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<Phone />}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                  fontWeight: 600
                }}
              >
                Call Emergency Line
              </Button>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      {/* Success Message */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thank you! Your consultation request has been submitted successfully. We'll contact you within 24 hours.
        </Alert>
      </Snackbar>

      {/* Error Message */}
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowError(false)} 
          severity="error" 
          sx={{ width: '100%' }}
        >
          Sorry, there was an error sending your message. Please try again or contact us directly.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
