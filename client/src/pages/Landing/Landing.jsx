import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import "./Landing.scss";

function Landing() {
  const message = "Welcome to Tokyo Travel Tips!";

  return (
    <div className="landing-container">
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "var(--primary-color)", // Using SASS variable
          color: "var(--text-color)",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "var(--font-family)" }}
        >
          Tokyo Travel Tips
        </Typography>
      </Box>

      {/* Content Section */}
      <Container
        maxWidth="md"
        sx={{
          marginTop: "2rem",
          color: "var(--text-color)",
          fontFamily: "var(--font-family)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Discover the Greatest City in the World!
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our website! Here, we provide everything you need to know
          about Tokyo, whether you're a first-time visitor or a seasoned
          traveler. Learn about the city's rich history, get valuable travel
          tips, and even share your own experiences with others.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore Tokyo like never before and make your journey unforgettable.
        </Typography>

        {/* Call to Action */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--button-bg-color)",
              color: "var(--form-bg-color)",
              "&:hover": {
                backgroundColor: "var(--button-hover-color)",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Landing;
