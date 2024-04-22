import Link from "next/link";
import Image from "next/image";

// material-ui
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

// project imports
import { RouteProps } from "@/app/utils";
import Logo from "../../../../public/img/placeholder-img.webp";
import classes from "./routeCard.module.css";

export const RouteCard = ({ route }: RouteProps) => {
  return (
    <Link href={`/routes/${route.id}`} passHref>
      <Card className={classes["route-card"]}>
        <CardActionArea>
          <Image
            src={Logo}
            alt={`${route.name} route`}
            placeholder="blur"
            priority
            width={0}
            height={0}
            className={classes.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {route.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {route.origin.name} {"->"} {route.destination.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
