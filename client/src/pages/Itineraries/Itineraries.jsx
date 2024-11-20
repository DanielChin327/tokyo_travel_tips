import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import "./Itineraries.scss";

function Itineraries() {
  return (
    <div className="itinerary-container">
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "var(--primary-color)",
          color: "var(--form-bg-color)",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "var(--font-family)" }}
        >
          Tokyo Itineraries
        </Typography>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        {/* Introduction */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            Endless Things to Do in Tokyo
          </Typography>
          <Typography variant="body1" paragraph>
            Tokyo is a city that offers endless adventures for everyone. Whether
            you’re staying for a weekend, a week, or even longer, there’s
            something to match your interests and time. Explore these curated
            itineraries to make the most of your visit to Tokyo and beyond!
          </Typography>
        </Box>

        <Divider />

        {/* 3-Day Itinerary */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            3-Day Itinerary: A Taste of Tokyo
          </Typography>
          <Typography variant="body1" paragraph>
            Perfect for first-time visitors or short stays, this itinerary
            covers the essentials of Tokyo’s highlights.
          </Typography>
          <ul>
            <li>
              <strong>Day 1:</strong> Explore Asakusa and visit Senso-ji Temple,
              then take a walk around Ueno Park and its museums. End the day in
              Akihabara for an evening of anime and electronics.
            </li>
            <li>
              <strong>Day 2:</strong> Stroll through the iconic Shibuya
              Crossing, visit Meiji Shrine, and shop in Harajuku and Omotesando.
              Wrap up the day with a view from Tokyo Tower or Tokyo Skytree.
            </li>
            <li>
              <strong>Day 3:</strong> Discover Tsukiji Outer Market for fresh
              sushi, enjoy Odaiba’s futuristic attractions, and take a Tokyo Bay
              cruise to see the city from a different perspective.
            </li>
          </ul>
        </Box>

        <Divider />

        {/* 5 to 7-Day Itinerary */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            5-7 Day Itinerary: Dive Deeper into Tokyo
          </Typography>
          <Typography variant="body1" paragraph>
            For a week-long adventure, this itinerary includes all the Tokyo
            essentials plus day trips to nearby destinations.
          </Typography>
          <ul>
            <li>
              <strong>Days 1-3:</strong> Follow the 3-day itinerary to cover
              Tokyo’s must-see attractions.
            </li>
            <li>
              <strong>Day 4:</strong> Visit Shinjuku’s Gyoen National Garden,
              explore the Tokyo Metropolitan Government Building for free
              cityscapes, and experience Kabukicho’s nightlife.
            </li>
            <li>
              <strong>Day 5:</strong> Take a day trip to Kamakura to see the
              Great Buddha and serene temples, or Yokohama for the Cup Noodles
              Museum and vibrant Chinatown.
            </li>
            <li>
              <strong>Day 6:</strong> Explore Tokyo’s lesser-known neighborhoods
              like Kichijoji and Nakano Broadway for unique shops and dining.
            </li>
            <li>
              <strong>Day 7:</strong> For another day trip, visit the historic
              streets of Kawagoe, known as “Little Edo,” for a taste of
              traditional Japan.
            </li>
          </ul>
        </Box>

        <Divider />

        {/* 7+ Day Itinerary */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            7+ Day Itinerary: Explore Tokyo and Beyond
          </Typography>
          <Typography variant="body1" paragraph>
            If you have more than a week, combine the Tokyo highlights with
            relaxing getaways to nearby destinations.
          </Typography>
          <ul>
            <li>
              <strong>Days 1-7:</strong> Follow the 5-7 day itinerary.
            </li>
            <li>
              <strong>Day 8:</strong> Stay overnight at Kusatsu Onsen, a famous
              hot spring town with rejuvenating baths and scenic views.
            </li>
            <li>
              <strong>Day 9:</strong> Head to Hakone for a relaxing stay at a
              traditional ryokan, visit the Hakone Open-Air Museum, and enjoy
              views of Mt. Fuji.
            </li>
            <li>
              <strong>Day 10:</strong> Explore Nikko, home to the stunning
              Toshogu Shrine and breathtaking nature, before returning to Tokyo.
            </li>
          </ul>
        </Box>
      </Container>
    </div>
  );
}

export default Itineraries;
