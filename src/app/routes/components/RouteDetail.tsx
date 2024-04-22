// material-ui
import { Box, Chip, Typography } from "@mui/material";

// third-party
import moment from "moment";

// project imports
import { RouteProps } from "@/app/utils";

export const RouteDetail = ({ route }: RouteProps) => {
  return (
    <Box padding={5} gap={2}>
      <Typography variant="h4" color="inherit">
        {route?.name || "N/A"}{" "}
        <Chip
          label={route?.status}
          color={route?.status === "Active" ? "success" : "error"}
        />
      </Typography>
      <Typography variant="h5" color="inherit">
        {route?.origin.name || "N/A"} - {route?.destination.name || "N/A"}
      </Typography>
      <Typography variant="h5" color="inherit">
        Precio: {route?.price || "N/A"}$
      </Typography>
      <Typography variant="h5" color="inherit">
        Capacidad de la unidad: {route?.capacity || "N/A"} asientos
      </Typography>
      <Typography variant="h6" color="inherit">
        Hora de salida:{" "}
        {moment(route?.departureTime).format("HH:mm") || "Not Available"}
      </Typography>
      <Typography variant="h6" color="inherit">
        Hora de llegada:{" "}
        {moment(route?.arrivalTime).format("HH:mm") || "Not Available"}
      </Typography>
    </Box>
  );
};
