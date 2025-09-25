// src/pages/Faq.jsx
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container, Chip, Grid, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const faqs = [
	{
		question: 'Where are you based?',
		answer: 'Seen Futures operates in Edinburgh and West Lothian. We provide in-person support locally and, where appropriate, remote sessions for parents or carers.',
	},
	{
		question: 'How do sessions work?',
		answer:
			'Sessions are usually weekly, in your home and last 2 hours, tailored to your child’s interests and needs. However, this structure is flexible to ensure you and your child feel engaged and comfortable. We also offer online sessions or a combination of the two.',
	},
	{
		question: 'How do I begin services?',
		answer:
			'You can contact us via the website form, email, or phone. We typically start with a free discovery call to understand your child’s needs, answer any questions you may have and discuss the best support approach to suit you.',
	},
	{
		question: 'When are you available to begin services?',
		answer:
			'Services are subject to availability. You can contact us to discuss your preferred times, but please note that Seen Futures cannot guarantee a session times will be available immediately. We will work with you to find the earliest possible slot that fits your child’s and family’s needs.',
	},
	{
		question: 'Do we need an autism diagnosis to access your services?',
		answer:
			'No diagnosis is required. We welcome children at any stage — whether you’re exploring next steps, waiting for an assessment, or already have a diagnosis. Our focus is on meeting your child where they are and supporting your family right away.',
	},
	{
		question: 'What ages do you work with?',
		answer:
			'We support autistic children typically from early years through primary school age. Each child’s needs and developmental stage are taken into account when planning sessions.',
	},
	{
		question: 'What does “child-led” mean in practice?',
		answer:
			'Child-led means we follow your child’s interests, pace, and motivations. Learning is integrated into play and activities your child enjoys, creating meaningful engagement and natural opportunities for growth.',
	},
	{
		question: 'Are parents involved in sessions?',
		answer: 'Absolutely. Parents and carers are valued partners in our work and key to a successful partnership.',
	},
	{
		question: 'Can sessions be adapted for children with different needs or abilities?',
		answer: 'Yes! Every session is individualised to the child’s interests, strengths, and developmental goals.',
	},
	{
		question: 'How long does it take to see progress?',
		answer:
			'Every child is different. Some respond quickly to strategies, while others need more time. We focus on small, meaningful steps and celebrate each success along the way.',
	},
	{
		question: 'What is play-based learning?',
		answer:
			'Play-based learning uses engaging, hands-on activities to teach skills naturally. It supports emotional regulation, communication, problem-solving, and confidence in a way that feels fun for the child.',
	},
	{
		question: 'How do you support emotional regulation?',
		answer:
			'We prioritise emotional wellbeing first. This means helping children feel calm and secure, using co-regulation techniques and structured strategies so they can engage more effectively with learning and social interactions.',
	},
	{
		question: 'What does “neuroaffirming” mean?',
		answer:
			'Neuroaffirming means we celebrate your child’s unique way of being, rather than trying to change them to fit a typical mould. We focus on strengths, interests, and authentic self-expression.',
	},
	{
		question: 'What is your professional background?',
		answer:
			'Emily Sykes, founder of Seen Futures, has been working with autistic children since 2015. She holds two MSc degrees in related fields, Level 2 certification in Pivotal Response Treatment (PRT) and has completed numerous training courses as part of her ongoing professional development. Please note, Emily is not a Board Certified Behaviour Analyst (BCBA), UK-SBA Accredited Behaviour Analyst (UKBA cert), or Speech and Language Therapist (SLT). Seen Futures follows strict business and professional standards, including PVG (Protecting Vulnerable Groups) registration.',
	},
	{
		question: 'How is information shared between families and professionals?',
		answer:
			'Communication is collaborative and secure. We share progress updates and strategies with families, and where agreed, with schools or other professionals to ensure consistent support. Ahead of starting services, Seen Futures will share their full Privacy policy with you.',
	},
];

const Faq = () => (
	<Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
		<Box sx={{ textAlign: 'center', mb: 8 }}>
			<Chip
				label="Frequently Asked Questions (FAQ)"
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
					WebkitTextFillColor: 'transparent',
				}}
			>
				FAQ
			</Typography>
			<Typography variant="h5" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mb: 4 }}>
				About Our Services
			</Typography>
		</Box>
		<Grid container spacing={4} justifyContent="center">
			{faqs.map((faq, idx) => (
				<Grid item xs={12} md={8} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Card
						sx={{
							p: 2,
							mb: 2,
							border: '1px solid rgba(107, 115, 255, 0.1)',
							background:
								'linear-gradient(135deg, rgba(107, 115, 255, 0.03) 0%, rgba(255, 107, 157, 0.03) 100%)',
							width: 1000,
						}}
					>
						<Accordion sx={{ boxShadow: 'none', background: 'transparent' }}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant="h6" sx={{ fontWeight: 600 }}>
									{faq.question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ minHeight: { xs: 80, md: 100 } }}>
								<Typography variant="body1" color="text.secondary">
									{faq.answer}
								</Typography>
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
				label="Send us a message"
				color="primary"
				to="/contact"
				component={Link}
				clickable
				sx={{ fontSize: '1rem', fontWeight: 600, px: 3, py: 2 }}
			/>
		</Box>
	</Container>
);

export default Faq;