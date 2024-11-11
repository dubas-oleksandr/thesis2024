import type { FC } from "react";

import { Fragment } from "react";
import { Box, Divider, List } from "@mui/material";
import LocationItem from "./LocationItem.tsx";

export type LocationListProps = {
  locations: { name: string; percentage: number; imageUrl: string }[];
};

const LocationList: FC<LocationListProps> = ({ locations }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 2,
      }}
    >
      <List>
        {locations.map((location, index) => (
          <Fragment key={index}>
            <LocationItem
              key={index}
              name={location.name}
              percentage={location.percentage}
              imageUrl={location.imageUrl}
            />
            {index !== locations.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

export default LocationList;
