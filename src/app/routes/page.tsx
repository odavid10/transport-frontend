"use client";

// material-ui
import { Typography, Grid, CircularProgress } from "@mui/material";

// project imports
import { RouteCard } from "./components";
import { useGetRoutes } from "../hooks";

export default function Routes() {
  const { routes = [], loading } = useGetRoutes();

  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        Nuestras rutas
      </Typography>
      <Grid container spacing={2} mt={3}>
        {loading ? (
          <CircularProgress color="inherit" sx={{ marginX: "auto" }} />
        ) : (
          routes.map((route) => (
            <Grid
              key={route.id}
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              display={"flex"}
              justifyContent={"center"}
            >
              <RouteCard route={route} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
