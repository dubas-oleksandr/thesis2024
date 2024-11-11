import type { FC } from "react";

import { useNavigate } from "react-router-dom";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import LocationPercentage from "./LocationPercentage.tsx";
import { E_ROUTE } from "../../enums/enums.ts";

export type LocationItemProps = {
  name: string;
  percentage: number;
  imageUrl: string;
};

const LocationItem: FC<LocationItemProps> = ({
  name,
  percentage,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${E_ROUTE.LOCATION}/${name}`);
  };

  return (
    <ListItem alignItems="center" sx={{ paddingX: 0 }} onClick={handleClick}>
      <ListItemAvatar>
        <Avatar
          alt="Location Image"
          src={imageUrl}
          sx={{ width: 56, height: 56 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="h5" fontWeight="normal" fontStyle="italic">
            {name}
          </Typography>
        }
        sx={{ ml: 2 }}
      />
      <LocationPercentage percentage={percentage} />
    </ListItem>
  );
};

export default LocationItem;
