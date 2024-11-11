import type { RouteObject } from "react-router-dom";

import NavigationLayout from "./components/layout/NavigationLayout.tsx";

import HomePage from "./pages/HomePage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import ResultsPage from "./pages/ResultsPage.tsx";
import LocationPage from "./pages/LocationPage.tsx";
import Page404 from "./pages/Page404.tsx";

import { E_ROUTE } from "./enums/enums.ts";

const routes: RouteObject[] = [
  {
    element: <NavigationLayout />,
    children: [
      {
        path: E_ROUTE.HOME,
        element: <HomePage />,
      },
      {
        path: E_ROUTE.SETTINGS,
        element: <SettingsPage />,
      },
      {
        path: E_ROUTE.RESULTS,
        element: <ResultsPage />,
      },
      {
        path: E_ROUTE.LOCATION + "/:locationId",
        element: <LocationPage />,
      },
    ],
  },
  {
    path: E_ROUTE.SIGNIN,
    element: <SignInPage />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export default routes;
