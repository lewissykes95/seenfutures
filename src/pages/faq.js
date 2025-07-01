// src/pages/Faq.jsx
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container, Chip, Grid, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [{
  question: 'Do you offer virtual sessions?',
  answer: 'Yes, I offer both in-person and teletherapy sessions.'
}, {
  question: 'What age groups do you support?',
  answer: 'I work with children, teens, and their families.'
}, {
  question: 'What is ABA therapy?',
  answer: 'Applied Behavior Analysis (ABA) is an evidence-based approach to understanding and improving behavior.'
}, {
  question: 'How do I get started?',
  answer: 'Contact me to schedule a free consultation and discuss your family’s needs.'
}];

const Faq = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Chip
        label="Frequently Asked Questions"
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
        FAQ
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
        Answers to common questions about services, approach, and what to expect.
      </Typography>
    </Box>
    <Grid container spacing={4} justifyContent="center">
      {faqs.map((faq, idx) => (
        <Grid item xs={12} md={8} key={idx}>
          <Card sx={{ p: 2, mb: 2, border: '1px solid rgba(107, 115, 255, 0.1)', background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.03) 0%, rgba(255, 107, 157, 0.03) 100%)' }}>
            <Accordion sx={{ boxShadow: 'none', background: 'transparent' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Still have questions?
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Reach out for a free consultation or to discuss your family’s needs in detail.
      </Typography>
      <Chip
        label="Book a Free Consultation"
        color="primary"
        component="a"
        href="/contact"
        clickable
        sx={{ fontSize: '1rem', fontWeight: 600, px: 3, py: 2 }}
      />
    </Box>
  </Container>
);

export default Faq;