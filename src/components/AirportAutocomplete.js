import React, { useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import axios from "axios";
import MockJSON from "../MockJSON";  // Import MockJSON for mock data

// Use the environment variable to decide whether to fetch live data or use mock data
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === "true";

const AirportAutocomplete = ({ label, onSelect }) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    
    const fetchAirports = async () => {
      if (inputValue) {
        if (USE_MOCK_DATA) {
          try {
            const response = await MockJSON;
            const airportsData = response.auto.data;

            const airports = airportsData.map((airport) => ({
              title: airport.presentation.title,
              skyId: airport.navigation.relevantFlightParams.skyId,
            }));
            setOptions(airports);
          } catch (error) {
            console.error("Mock data fetch failed", error);
          }
        } else {
          const options = {
            method: "GET",
            url: "https://sky-scanner3.p.rapidapi.com/flights/auto-complete",
            params: { query: inputValue },
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
              "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
            },
          };

          try {
            const response = await axios.request(options);
            const airportsData = response.data.data;

            const airports = airportsData.map((airport) => ({
              title: airport.presentation.title,
              skyId: airport.navigation.relevantFlightParams.skyId,
            }));
            setOptions(airports);
          } catch (error) {
            console.error("API call failed", error);
          }
        }
      }
    };

    fetchAirports();
  }, [inputValue]);

  return (
    <Autocomplete
      freeSolo
      options={options}
      getOptionLabel={(option) => option.title}
      onChange={(event, newValue) => {
        if (newValue) {
          onSelect(newValue.skyId);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    />
  );
};

export default AirportAutocomplete;