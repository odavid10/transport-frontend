import type { Metadata } from "next";

// material-ui
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from "@mui/material";

// project imports
import { theme } from "./theme";
import { Footer, Navbar } from "./components";
import "./globals.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transport App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box component="main">
              <Toolbar />
              <main className={styles.main}>
                <Container
                  maxWidth="xl"
                  sx={{
                    minHeight: "80vh",
                    paddingX: 0,
                    backgroundColor: "#F5E6FC",
                    borderRadius: "10px",
                    paddingY: 3,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {children}
                </Container>
              </main>
            </Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
