"use client";
import { useState } from "react";

// material-ui
import { Box, CircularProgress, Typography } from "@mui/material";

// project imports
import { RouteDetail } from "../components";

const route = {
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
};

export default function DetailRoute({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        Detail Route Page {params.id.replace(/.(?=.{5})/g, ".")}
      </Typography>
      <Box mt={5} bgcolor={"#F5F5F1"} borderRadius={"10px"}>
        {loading ? (
          <CircularProgress color="inherit" />
        ) : (
          <RouteDetail route={route} />
        )}
      </Box>
    </>
  );
}
