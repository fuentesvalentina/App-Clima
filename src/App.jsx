//console.log(import.meta.env.VITE_API_KEY); para visualizar la variable

import { Try } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Container, Typography, Box, TextField } from "@mui/material";
import { useState } from "react";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;

export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    setLoading(true);
    try {
      if (!city.trim()) throw { mesage: "El campo de ciudad es obligatorio" };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weather App
      </Typography>
      <Box
        sx={{ display: "grid", gap: 2 }}
        component={"form"}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Cargando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
}
