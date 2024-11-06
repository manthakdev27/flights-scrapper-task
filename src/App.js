import React, { useState } from "react";
import FlightSearch from "./components/FlightSearch";
import FlightResults from "./components/FlightResults";
import Header from "./components/Header";
import axios from "axios";
import { Container } from "@mui/material";
import MockJSON from "./MockJSON";  // Import MockJSON for mock data

// Use the environment variable to decide whether to fetch live data or use mock data
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === "true";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async ({ fromEntityId, toEntityId, departDate }) => {
    setLoading(true);

    if (USE_MOCK_DATA) {
      // If mock data is enabled, use the mock JSON
      try {
        const response = await MockJSON;
        const flightData = response.data.data.itineraries;
        setFlights(flightData);
      } catch (error) {
        console.error("Error using mock data:", error);
        setLoading(false);
      }
    } else {
      const options = {
        method: "GET",
        url: "https://sky-scanner3.p.rapidapi.com/flights/search-one-way",
        params: { fromEntityId, toEntityId, departDate },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        const flightData = response.data.data.itineraries;
        setFlights(flightData);
      } catch (error) {
        console.error("Error fetching live flight data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <Header />

      <FlightSearch
        onSearch={handleSearch}
        loading={loading}
        setLoading={setLoading}
      />

      <FlightResults flights={flights} loading={loading} />
    </Container>
  );
};

export default App;
