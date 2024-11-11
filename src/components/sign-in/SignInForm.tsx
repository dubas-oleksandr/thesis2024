import type { FC, FormEvent } from "react";

import { useState } from "react";
import { Button, FormHelperText, Stack, TextField } from "@mui/material";

export type SignInFormProps = {
  onSubmit: () => void;
};

const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("Username or password is incorrect");

  const validateForm = () => {
    return username.length >= 6 && password.length >= 8;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Stack alignItems="center">
      {error && <FormHelperText error>{error}</FormHelperText>}
      <Stack component="form" gap={2} onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Username"
          placeholder="Enter username"
          size="small"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
        <TextField
          type="password"
          label="Password"
          placeholder="Enter password"
          size="small"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!validateForm()}
        >
          Sign In
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignInForm;
