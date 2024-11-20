import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import "./Tokyo.scss";

function Tokyo() {
  return (
    <div className="tokyo-container">
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
          Explore Tokyo
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        {/* Section: What is Tokyo? */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            What is Tokyo?
          </Typography>
          <Typography variant="body1" paragraph>
            Tokyo is the capital of Japan and one of the most vibrant cities in
            the world. Known for its mix of ultramodern skyscrapers and
            centuries-old temples, Tokyo is a city of contrasts that has
            something to offer everyone. It is a global hub for business,
            culture, technology, and gastronomy.
          </Typography>
        </Box>

        <Divider />

        {/* Section: Where is Tokyo? */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            Where is Tokyo?
          </Typography>
          <Typography variant="body1" paragraph>
            Located on the eastern coast of Japan's largest island, Honshu,
            Tokyo is part of the Kanto region. It faces the Pacific Ocean and is
            surrounded by beautiful mountains, rivers, and bays. Its strategic
            location has made it a key cultural and economic center throughout
            history.
          </Typography>
        </Box>

        <Divider />

        {/* Section: Timeline of Tokyo's History */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            Timeline of Tokyo's History
          </Typography>
          <ul className="history-timeline">
            <li>
              <strong>1603:</strong> Tokyo, formerly known as Edo, becomes the
              center of political power under the Tokugawa Shogunate.
            </li>
            <li>
              <strong>1868:</strong> The Meiji Restoration marks the renaming of
              Edo to Tokyo and its establishment as the capital of Japan.
            </li>
            <li>
              <strong>1923:</strong> The Great Kanto Earthquake devastates Tokyo
              but sparks a period of rapid rebuilding.
            </li>
            <li>
              <strong>1945:</strong> Tokyo is heavily bombed during World War
              II, leading to another phase of reconstruction.
            </li>
            <li>
              <strong>1964:</strong> Tokyo hosts the Summer Olympics, showcasing
              its post-war resurgence.
            </li>
            <li>
              <strong>2020:</strong> Tokyo successfully hosts the delayed
              Olympics during the COVID-19 pandemic.
            </li>
          </ul>
        </Box>

        <Divider />

        {/* Section: What to Expect When Travelling to Tokyo */}
        <Box className="section">
          <Typography variant="h4" className="section-title">
            What to Expect When Travelling to Tokyo
          </Typography>
          <Typography variant="body1" paragraph>
            Travelling to Tokyo is an unforgettable experience. Here’s what you
            can expect:
          </Typography>
          <ul className="travel-tips">
            <li>
              <strong>Efficient Transportation:</strong> Tokyo's public
              transportation system is world-class, with extensive metro and
              train networks.
            </li>
            <li>
              <strong>Rich Culture:</strong> Experience traditional Japanese
              arts, tea ceremonies, and festivals alongside cutting-edge
              technology and pop culture.
            </li>
            <li>
              <strong>Amazing Food:</strong> From sushi and ramen to
              Michelin-starred restaurants, Tokyo is a food lover's paradise.
            </li>
            <li>
              <strong>Hospitality:</strong> The people of Tokyo are known for
              their kindness and respect for visitors.
            </li>
          </ul>
        </Box>
      </Container>
    </div>
  );
}

export default Tokyo;
