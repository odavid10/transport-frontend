// material-ui
import { Typography } from "@mui/material";

// project imports
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h1">Home page</Typography>
    </main>
  );
}
