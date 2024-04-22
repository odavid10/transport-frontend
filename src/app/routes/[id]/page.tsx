"use client";

// material-ui
import { Box, CircularProgress, Typography } from "@mui/material";

// project imports
import { useGetRoutes } from "@/app/hooks";
import { RouteDetail } from "../components";

export default function DetailRoute({ params }: { params: { id: string } }) {
  const { route, loading } = useGetRoutes(params.id);

  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        Detail Route Page {params.id.replace(/.(?=.{5})/g, ".")}
      </Typography>
      <Box
        mt={5}
        bgcolor={"#F5F5F1"}
        borderRadius={"10px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {loading ? (
          <CircularProgress color="inherit" sx={{ marginY: "20px" }} />
        ) : (
          <RouteDetail route={route} />
        )}
      </Box>
    </>
  );
}
