import type { FC } from "react";

import { Box, Divider, Typography, Stack, Button } from "@mui/material";
import { ExternalLink, MapPin, Globe } from "react-feather";
import LocationPercentage from "./LocationPercentage.tsx";

export type LocationDetailsProps = {
  id: string;
};

const LocationDetails: FC<LocationDetailsProps> = ({ id }) => {
  console.log(id);

  return (
    <Box
      sx={{
        maxWidth: 345,
        margin: "auto",
        mt: 2,
        p: 2,
      }}
    >
      <img
        src="https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Location Image"
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
      <Stack spacing={2} mt={2}>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            Локація 33
          </Typography>
          <LocationPercentage percentage={90} />
        </Stack>
        <Divider />
        <Stack gap={1}>
          <Typography variant="body1" fontStyle="italic">
            Опис
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Чудове місце для гастрономічних відкриттів, яке здивує вас
            різноманітністю смаків. Місцеві ресторани пропонують страви з свіжих
            інгредієнтів, приготовані за традиційними рецептами.
          </Typography>
        </Stack>
        <Stack gap={1}>
          <Typography variant="body1" fontStyle="italic">
            Дії
          </Typography>
          <Stack spacing={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<MapPin />}
              endIcon={<ExternalLink size={18} />}
            >
              View on Google Maps
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Globe />}
              endIcon={<ExternalLink size={18} />}
            >
              View on TripAdvisor
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LocationDetails;
