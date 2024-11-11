import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { Compass } from "react-feather";
import { E_ROUTE } from "../enums/enums.ts";

// const HomePage = () => {
//   const navigate = useNavigate();
//
//   const handleButtonClick = () => {
//     navigate(E_ROUTE.SETTINGS);
//   };
//
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//     >
//       <Button variant="text" color="primary" onClick={handleButtonClick}>
//         Set the criteria
//       </Button>
//     </Box>
//   );
// };
//
// export default HomePage;

const HomePage = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate(E_ROUTE.SETTINGS);
  };

  const handleResultsClick = () => {
    navigate(E_ROUTE.RESULTS);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSettingsClick}
        >
          Change criteria
        </Button>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<Compass />}
          onClick={handleResultsClick}
        >
          Determine locations
        </Button>
      </Stack>
    </Box>
  );
};

export default HomePage;
