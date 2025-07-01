// src/pages/Faq.jsx
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => (
  <Box>
    <Typography variant="h4" gutterBottom>
      FAQ
    </Typography>
    {[{
      question: 'Do you offer virtual sessions?',
      answer: 'Yes, I offer both in-person and teletherapy sessions.'
    }, {
      question: 'What age groups do you support?',
      answer: 'I work with children, teens, and their families.'
    }].map((faq, idx) => (
      <Accordion key={idx}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default Faq;