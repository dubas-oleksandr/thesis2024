import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import CriteriaSettings from "../components/criteria/CriteriaSettings.tsx";
import { E_ROUTE } from "../enums/enums.ts";

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate(E_ROUTE.HOME);
  };

  return (
    <Stack alignItems="flex-start" pt={2}>
      <Typography variant="h4" fontWeight="bold">
        Criteria Settings
      </Typography>
      <Typography variant="body2" fontStyle="italic">
        Tune the weights of each criterion using slider and find locations that
        meet your expectations.
      </Typography>
      <CriteriaSettings onSave={handleSave} />
    </Stack>
  );
};

export default SettingsPage;
