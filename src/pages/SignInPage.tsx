import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import SignInForm from "../components/sign-in/SignInForm.tsx";
import { E_ROUTE } from "../enums/enums.ts";

const SignInPage = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(E_ROUTE.HOME);
  };

  return (
    <Stack flex={1} gap={4} justifyContent="center" alignItems="center">
      <Typography variant="h4">Sign In</Typography>
      <SignInForm onSubmit={onSubmit} />
    </Stack>
  );
};

export default SignInPage;
