// material-ui
import { Box, Divider, Typography } from "@mui/material";

// project imports
import { APP_VERSION } from "../utils";

export const Footer = () => {
  return (
    <>
      <Divider sx={{ backgroundColor: "grey.700" }} />
      <Box display={"flex"} justifyContent={"center"}>
        <Typography variant="overline" align="center" color={"grey.500"}>
          Copyright © 2024 Transport Inc. V-{APP_VERSION}
        </Typography>
      </Box>
    </>
  );
};
