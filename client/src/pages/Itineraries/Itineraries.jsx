import React from 'react';
import '../../assets/styles/util/variables.scss'

function Itineraries() {
  return (
    <div className="itineraries-container">
      <h1>Tokyo Itineraries</h1>
      <p className="intro">
        Tokyo is a city of endless possibilities. Whether you're staying for a few days or an extended trip, there's something for everyone. From iconic landmarks to serene day trips, let us guide you through the perfect Tokyo experience.
      </p>

      {/* 3-Day Itinerary */}
      <section className="itinerary">
        <h2>3-Day Itinerary: Highlights of Tokyo</h2>
        <p>
          If you only have a few days in Tokyo, focus on the highlights! This itinerary is designed to give you a taste of Tokyo’s vibrant culture, history, and modernity.
        </p>
        <ul>
          <li>
            <strong>Day 1:</strong> Explore Asakusa (Senso-ji Temple), take a boat ride to Odaiba, and end with a walk in the futuristic Shinjuku area.
          </li>
          <li>
            <strong>Day 2:</strong> Visit the Meiji Shrine, shop in Harajuku’s Takeshita Street, and enjoy the vibrant nightlife of Shibuya.
          </li>
          <li>
            <strong>Day 3:</strong> Stroll through Ueno Park and its museums, explore Akihabara for electronics and anime, and wind down in Ginza for upscale dining.
          </li>
        </ul>
      </section>

      {/* 5-7 Day Itinerary */}
      <section className="itinerary">
        <h2>5-7 Day Itinerary: Deep Dive into Tokyo</h2>
        <p>
          With a bit more time, dive deeper into Tokyo's neighborhoods and enjoy exciting day trips to nearby destinations.
        </p>
        <ul>
          <li>
            <strong>Day 1-3:</strong> Follow the 3-day itinerary to cover Tokyo's highlights.
          </li>
          <li>
            <strong>Day 4:</strong> Explore Ikebukuro's Sunshine City, the Edo-Tokyo Museum, and Ryogoku (Sumo Town).
          </li>
          <li>
            <strong>Day 5:</strong> Spend time in the quieter Yanaka neighborhood, visit the Ghibli Museum (pre-booking required), and enjoy an evening in Roppongi.
          </li>
          <li>
            <strong>Day 6:</strong> Day trip options:
            <ul>
              <li>
                <strong>Kamakura:</strong> Visit the Great Buddha, Hokokuji Temple (Bamboo Forest), and Hase-dera Temple.
              </li>
              <li>
                <strong>Yokohama:</strong> Explore Minato Mirai, Cup Noodles Museum, and Chinatown.
              </li>
              <li>
                <strong>Kawagoe:</strong> Wander through this charming Edo-period town, with its preserved streets and Kawagoe Hikawa Shrine.
              </li>
            </ul>
          </li>
          <li>
            <strong>Day 7:</strong> Return to Tokyo to enjoy a mix of relaxation and last-minute shopping in Odaiba or Ginza.
          </li>
        </ul>
      </section>

      {/* 7+ Day Itinerary */}
      <section className="itinerary">
        <h2>7+ Day Itinerary: A Complete Tokyo Adventure</h2>
        <p>
          For those staying longer, this itinerary covers Tokyo’s attractions while also including nearby overnight trips for a truly unforgettable experience.
        </p>
        <ul>
          <li>
            <strong>Day 1-7:</strong> Follow the 5-7 day itinerary.
          </li>
          <li>
            <strong>Day 8:</strong> Take an overnight trip to one of the following:
            <ul>
              <li>
                <strong>Kusatsu Onsen:</strong> Relax in one of Japan’s most famous hot spring towns.
              </li>
              <li>
                <strong>Hakone:</strong> Enjoy views of Mount Fuji, visit the Open-Air Museum, and stay at a traditional ryokan.
              </li>
              <li>
                <strong>Nikko:</strong> Discover the stunning Toshogu Shrine and Kegon Falls.
              </li>
            </ul>
          </li>
          <li>
            <strong>Day 9+:</strong> Return to Tokyo for additional exploration or relaxation.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Itineraries;
