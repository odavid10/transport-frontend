// material-ui
import { Typography } from "@mui/material";

// project imports
import styles from "../../page.module.css";

export default function DetailRoute({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <Typography variant="h1">Detail Route Page {params.id}</Typography>
    </main>
  );
}
