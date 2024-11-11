import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
