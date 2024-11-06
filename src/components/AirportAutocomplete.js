import React, { useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import axios from "axios";

const AirportAutocomplete = ({ label, onSelect }) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    
    const fetchAirports = async () => {
      if (inputValue) {
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