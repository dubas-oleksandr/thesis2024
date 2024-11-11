import type { FC } from "react";

import { CircularProgress, Box, Typography } from "@mui/material";

type LocationPercentageProps = {
  percentage: number;
};

const LocationPercentage: FC<LocationPercentageProps> = ({ percentage }) => {
  const getColor = (value: number) => {
    const red = Math.min(255, Math.max(0, 255 - value * 2.55));
    const green = Math.min(255, Math.max(0, value * 2.55));
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={80}
        style={{ color: getColor(percentage) }}
        sx={{ strokeLinecap: "round" }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h6"
          component="div"
          color="textSecondary"
          fontWeight="bold"
        >
          {`${Math.round(percentage)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationPercentage;
