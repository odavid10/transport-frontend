"use client";

import Link from "next/link";

// material-ui
import {
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// project imports
import { RobotHi } from "./assets/illustration/RobotHi";
import { RobotHiResponsive } from "./assets/illustration/RobottHiResponsive";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant={useMediaQuery(theme.breakpoints.down("md")) ? "h3" : "h2"}
        textAlign={"center"}
      >
        Bienvenido
      </Typography>
      <Grid
        container
        mt={1}
        spacing={6}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          {useMediaQuery(theme.breakpoints.down("md")) ? (
            <RobotHiResponsive />
          ) : (
            <RobotHi />
          )}
        </Grid>
        <Grid item xs={12}>
          <Link href="/routes" passHref>
            <Button variant="contained" color="secondary">
              Visita nuestras rutas
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
