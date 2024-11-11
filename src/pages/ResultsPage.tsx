import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import LocationList from "../components/location/LocationsList.tsx";
import { E_ROUTE } from "../enums/enums.ts";

const mockedLocations = [
  {
    name: "Location 33",
    percentage: 90,
    imageUrl:
      "https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Location 20",
    percentage: 85,
    imageUrl:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Location 91",
    percentage: 75,
    imageUrl:
      "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Location 25",
    percentage: 70,
    imageUrl:
      "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Location 9",
    percentage: 40,
    imageUrl:
      "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ResultsPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: 600,
        width: "100%",
        margin: "auto",
        mt: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Best Locations
      </Typography>
      <Typography variant="body2" fontStyle="italic">
        Here are the travel locations based on your preferences.
      </Typography>
      <LocationList locations={mockedLocations} />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(E_ROUTE.SETTINGS)}
        >
          Change Criteria
        </Button>
      </Box>
    </Box>
  );
};

export default ResultsPage;
