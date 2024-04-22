// material-ui
import { Typography, Grid } from "@mui/material";

// project imports
import { RouteCard } from "./components";

const rutas = [
  {
    _id: "6622f885a9d99c589c9bca3c",
    status: "Active",
    name: "Prueba routes",
    origin: {
      name: "Los teques",
      lat: 10.5,
      long: -50.48,
    },
    destination: {
      name: "San Antonio de los altos",
      lat: 10.5,
      long: -50.48,
    },
    price: 10,
    capacity: 50,
    departureTime: "Fri Apr 19 2024 08:00:00 GMT-0400 (hora de Venezuela)",
    arrivalTime: "Fri Apr 19 2024 09:00:00 GMT-0400 (hora de Venezuela)",
    id: "6622f885a9d99c589c9bca3c",
  },
  {
    _id: "6622f952faa3e7560f6c0dac",
    status: "Active",
    name: "Prueba routes",
    origin: {
      name: "El valle",
      lat: 10.5,
      long: -50.48,
    },
    destination: {
      name: "Petare",
      lat: 10.5,
      long: -50.48,
    },
    price: 1,
    capacity: 1,
    departureTime: "Fri Apr 19 2024 08:00:00 GMT-0400 (hora de Venezuela)",
    arrivalTime: "Fri Apr 19 2024 09:00:00 GMT-0400 (hora de Venezuela)",
    id: "6622f952faa3e7560f6c0dac",
  },
];

export default function Routes() {
  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        Routes Page
      </Typography>
      <Grid container spacing={2} mt={3}>
        {rutas.map((ruta) => (
          <Grid
            key={ruta.id}
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <RouteCard route={ruta} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
