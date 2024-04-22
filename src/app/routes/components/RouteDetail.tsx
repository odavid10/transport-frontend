import { RouteProps } from "@/app/utils";

// material-ui
import { Box, Chip, Typography } from "@mui/material";

// third-party
import moment from "moment";

export const RouteDetail = ({ route }: RouteProps) => {
  return (
    <Box padding={5} gap={2}>
      <Typography variant="h4" color="inherit">
        {route.name}{" "}
        <Chip
          label={route.status}
          color={route.status === "Active" ? "success" : "error"}
        />
      </Typography>
      <Typography variant="h5" color="inherit">
        {route.origin.name} - {route.destination.name}
      </Typography>
      <Typography variant="h5" color="inherit">
        Precio: {route.price}$
      </Typography>
      <Typography variant="h5" color="inherit">
        Capacidad de la unidad: {route.capacity} asientos
      </Typography>
      <Typography variant="h6" color="inherit">
        Hora de salida:{" "}
        {moment(route.departureTime).format("HH:mm") || "Not Available"}
      </Typography>
      <Typography variant="h6" color="inherit">
        Hora de llegada:{" "}
        {moment(route.arrivalTime).format("HH:mm") || "Not Available"}
      </Typography>
    </Box>
  );
};
