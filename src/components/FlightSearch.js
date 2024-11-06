import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AirportAutocomplete from "./AirportAutocomplete";
import SearchIcon from "@mui/icons-material/Search";

const FlightSearch = ({ onSearch, loading, setLoading }) => {
  const [fromSkyId, setFromSkyId] = useState("");
  const [toSkyId, setToSkyId] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fromSkyId && toSkyId && date) {
      setLoading(true);
      setError("");
      try {
        await onSearch({
          fromEntityId: fromSkyId,
          toEntityId: toSkyId,
          departDate: date,
        });
      } catch (err) {
        setError("Failed to fetch flights. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
        Find Your Flights
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Grid container spacing={2}>
          <Grid item size={6}>
            <AirportAutocomplete label="Where from?" onSelect={setFromSkyId} />
          </Grid>
          <Grid item size={6}>
            <AirportAutocomplete label="Where to?" onSelect={setToSkyId} />
          </Grid>
        </Grid>
        <TextField
          label="Departure"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: new Date().toISOString().split("T")[0], // Disable previous dates
          }}
          sx={{ marginTop: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          sx={{
            marginTop: 2,
            borderRadius: "50px",
            textTransform: "none",
            fontSize: "16px",
            padding: "10px 24px",
            backgroundColor: "#1A73E8",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Explore"}
        </Button>
      </Box>
  
    </Paper>
  );
};

export default FlightSearch;
