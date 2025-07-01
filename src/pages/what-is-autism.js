import React from "react";
import { Container, Box, Typography, Chip, Grid, Card } from "@mui/material";

const WhatIsAutism = () => (
  <Container
    maxWidth="lg"
    sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}
  >
    <Box sx={{ textAlign: "center", mb: 8 }}>
      <Chip
        label="What is Autism?"
        color="primary"
        sx={{ mb: 3, fontSize: "0.875rem", fontWeight: 600 }}
      />
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 3,
          background:
            "linear-gradient(135deg, #6495ED 0%, #BFD7FF 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        What is Autism?
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}
      >
        Learn about autism spectrum disorder, its characteristics, and how
        support can make a difference.
      </Typography>
    </Box>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            p: 4,
            textAlign: "center",
            border:
              "1px solid rgba(107, 115, 255, 0.1)",
            background:
              "linear-gradient(135deg, rgba(107, 115, 255, 0.03) 0%, rgba(255, 107, 157, 0.03) 100%)",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Autism spectrum disorder (ASD) is a developmental condition that
            affects how people communicate, interact, and experience the world.
            Every individual with autism is unique, with their own strengths and
            challenges. Early support and understanding can help children and
            families thrive.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default WhatIsAutism;
