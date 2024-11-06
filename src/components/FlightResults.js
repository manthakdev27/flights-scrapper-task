import React from "react";
import FlightCard from "./FlightCard";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

const FlightResults = ({ flights, loading }) => {
  if (!flights || flights.length === 0) {
    return (
      <Card sx={{ marginTop: 3 }}>
        <CardContent>
          {loading ? (
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" align="center">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <CircularProgress
                    size={24}
                    color="inherit"
                    sx={{ marginRight: 1 }}
                  />
                  Loading...
                </Box>
              </Typography>
            </Box>
          ) : (
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" color="error" align="center">
                No flights found.
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Box sx={{ marginTop: 3 }}>
      {flights.map((itinerary, index) => {
        const flightLeg = flightDetails.legs[0]; // Extract first leg of the flight
        const airlineInfo = flightLeg.carriers.marketing[0]; // Marketing carrier info
        const formattedDepartureTime = new Date(flightLeg.departure).toLocaleString();
        const formattedArrivalTime = new Date(flightLeg.arrival).toLocaleString();

        return (
          <FlightCard
            key={index}
            flightNumber={flightLeg.segments[0].flightNumber}
            airline={airlineInfo.name}
            price={itinerary.price.formatted}
            departure={formattedDepartureTime}
            arrival={formattedArrivalTime}
            duration={flightLeg.durationInMinutes}
          />
        );
      })}
    </Box>
  );
};

export default FlightResults;
