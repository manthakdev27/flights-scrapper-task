import React from "react";
import { AppBar, Toolbar, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container
          maxWidth="md"
          sx={{
            marginTop: 1,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "#fff",
              letterSpacing: 0.5,
              fontSize: "28px",
              textTransform: "uppercase",
            }}
          >
            Book Your Flights
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: 2,
              opacity: 0.85,
            }}
          >
            Search, compare, and find the best flights with ease.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
