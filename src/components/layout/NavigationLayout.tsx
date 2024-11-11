import { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Stack,
} from "@mui/material";
import { Home, Settings } from "react-feather";
import { E_ROUTE } from "../../enums/enums.ts";

const NavigationLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(-1);

  useEffect(() => {
    if (location.pathname === E_ROUTE.HOME) {
      setValue(0);
    } else if (location.pathname === E_ROUTE.SETTINGS) {
      setValue(1);
    } else {
      setValue(-1);
    }
  }, [location.pathname]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        flex: "1",
      }}
    >
      <Stack p={2} sx={{ flex: 1, overflow: "auto" }}>
        <Outlet />
      </Stack>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
            if (newValue === 0) {
              navigate(E_ROUTE.HOME);
            } else if (newValue === 1) {
              navigate(E_ROUTE.SETTINGS);
            }
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default NavigationLayout;
