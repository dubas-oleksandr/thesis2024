import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import LocationDetails from "../components/location/LocationDetails.tsx";
import { ArrowLeft } from "react-feather";
import { E_ROUTE } from "../enums/enums.ts";

const LocationPage = () => {
  const { locationId } = useParams();
  const navigate = useNavigate();

  if (!locationId) {
    return <Navigate to={E_ROUTE.HOME} />;
  }

  return (
    <Stack alignItems="flex-start" pt={2}>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        startIcon={<ArrowLeft size={15} />}
        onClick={() => navigate(E_ROUTE.HOME)}
      >
        Back
      </Button>
      <LocationDetails id={locationId} />
    </Stack>
  );
};

export default LocationPage;
