import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const FlightCard = ({
  flightNumber,
  airline,
  price,
  departure,
  arrival,
  duration,
}) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {airline} Flight {flightNumber}
        </Typography>
        <Typography color="text.secondary">Price: {price}</Typography>
        <Typography color="text.secondary">Departure: {departure}</Typography>
        <Typography color="text.secondary">Arrival: {arrival}</Typography>
        <Typography color="text.secondary">
          Duration: {duration} minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
};

export default FlightCard;
