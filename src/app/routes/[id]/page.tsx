// material-ui
import { Typography } from "@mui/material";

export default function DetailRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        Detail Route Page {params.id}
      </Typography>
    </>
  );
}
