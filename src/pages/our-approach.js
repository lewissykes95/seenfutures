import React from "react";
import { Container, Box, Typography, Chip, Grid, Card } from "@mui/material";

const OurApproach = () => {
  const frameworks = [
    "SCERTS",
    "ESDM",
    "ABA",
    "PRT"
  ];

  const additionalFrameworks = [
    "Zone of Regulation",
    "Natural Language Acquisition"
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Chip
          label="Our Approach"
          color="primary"
          sx={{ mb: 3, fontSize: "0.875rem", fontWeight: 600 }}
        />
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
            background: "linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Approach
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}
        >
          Discover our philosophy and methods for supporting individuals and
          families living with autism.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              p: 4,
              textAlign: "center",
              border: "1px solid rgba(107, 115, 255, 0.1)",
              background:
                "linear-gradient(135deg, rgba(107, 115, 255, 0.03) 0%, rgba(255, 107, 157, 0.03) 100%)",
            }}
          >
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Our approach is rooted in compassion, play-based practice, and
              collaboration with families. We believe in celebrating every
              milestone, empowering parents, and creating individualised plans that
              honor each child's strengths and needs.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Drawing on a range of frameworks and evidence based practises:
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {frameworks.map((framework, index) => (
                <Grid item key={index}>
                  <Chip
                    label={framework}
                    sx={{
                      backgroundColor: "rgba(107, 115, 255, 0.1)",
                      color: "text.primary",
                      fontWeight: 500,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2} justifyContent="center">
                {additionalFrameworks.map((framework, index) => (
                  <Grid item key={index}>
                    <Chip
                      label={framework}
                      sx={{
                        backgroundColor: "rgba(107, 115, 255, 0.1)",
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurApproach;
