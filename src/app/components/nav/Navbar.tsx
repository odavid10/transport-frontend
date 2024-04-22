import Link from "next/link";

// material-ui
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

// project imports
import { NavSidebar } from "..";
import { navItems } from "./navItems";

export const Navbar = () => {
  return (
    <AppBar
      component="nav"
      sx={{
        boxShadow: { xs: "", sm: "none" },
        backgroundImage: {
          xs: "",
          sm: "linear-gradient(180deg, #ffffff 51%, rgba(255, 255, 255, 0) 99%)",
        },
        backgroundColor: { xs: "#FFF", sm: "rgba(0,0,0,0)" },
        paddingX: "2%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              {navItems.map((item) => (
                <Link key={item.url} href={item.url}>
                  <Typography
                    variant="overline"
                    color={"textPrimary"}
                    textTransform={"none"}
                    mr={"22px"}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" color="initial">
              Transport App
            </Typography>
            <NavSidebar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
