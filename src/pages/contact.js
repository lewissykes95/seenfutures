// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material';

function Contact() {
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
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));

    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = 'service_bh92rw9';
      const contactTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT;
      const autoReplyTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_AUTOREPLY;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        parent_name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        child_name: formData.childName,
        child_age: formData.childAge,
        hear_about: formData.hearAbout,
        message: formData.message,
        to: 'seenfutures.edinburgh@gmail.com',
        to_email: 'seenfutures.edinburgh@gmail.com',
        name: formData.parentName,
        to_name: "Seen Futures Team",
        reply_to: formData.email,
        recipient: 'seenfutures.edinburgh@gmail.com'
      };


      try {
        await emailjs.send(serviceId, contactTemplateId, templateParams, publicKey);

        // Send auto-reply to THEM
        const autoReplyParams = {
            name: formData.parentName,
            to_name: formData.parentName,
            child_name: formData.childName,
            email: formData.email,
            from_email: "seenfutures.edinburgh@gmail.com",
            from_name: "Seen Futures Team",
            reply_to: "seenfutures.edinburgh@gmail.com",
          };


        await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);

        // Reset form only if both emails were sent successfully
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
      } catch (emailError) {
        console.error('Detailed EmailJS Error:', emailError);
        throw new Error(emailError.text || 'Failed to send email. Please check your EmailJS configuration.');
      }
    } catch (error) {
      console.error('Error details:', error);
      setErrorMessage(error.message);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: { xs: 4, md: 8 },
      px: { xs: 2, sm: 3, md: 4 }
    }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Contact Us
          </Typography>
          <Typography variant="h5" color="text.secondary">
            We'll contact you as soon as possible to discuss how we can help
          </Typography>
        </Box>

        <Card sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Parent/Guardian Name"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange('parentName')}
                  error={Boolean(formErrors.parentName)}
                  helperText={formErrors.parentName}
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  error={Boolean(formErrors.phone)}
                  helperText={formErrors.phone}
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  error={Boolean(formErrors.email)}
                  helperText={formErrors.email}
                  required
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Child's Name"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange('childName')}
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  fullWidth
                  label="Child's Age"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange('childAge')}
                />
              </Grid>
              <Grid size={12}>
                <FormControl fullWidth>
                  <InputLabel>How did you hear about us?</InputLabel>
                  <Select
                    value={formData.hearAbout}
                    onChange={handleInputChange('hearAbout')}
                    label="How did you hear about us?"
                  >
                    <MenuItem value="Google">Google</MenuItem>
                    <MenuItem value="Facebook">Facebook</MenuItem>
                    <MenuItem value="Friend">Friend/Family</MenuItem>
                    <MenuItem value="Professional">Healthcare Professional</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                />
              </Grid>
              <Grid size={12} sx={{ textAlign: 'center', mt: 2 }}>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>

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
          Your message has been sent successfully!
        </Alert>
      </Snackbar>

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
          {errorMessage || 'There was an error sending your message. Please try again.'}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
