import { useEffect } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/session/sessionSlice";
import { useNavigate } from "react-router";
import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.session.token);

  const handleOnSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;

    dispatch(setToken(credential ?? ""));

    navigate("/");
  };

  const handleOnError = () => {
    console.log("login failed");
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  return (
    <Stack justifyContent="center" height="100vh">
      <Stack>
        <Typography variant="body1" px={8} textAlign="center" mb={16}>
          Tu se posadz drzewka
        </Typography>
        <Stack direction="row" justifyContent="center">
          <GoogleLogin
            containerProps={{ style: { padding: "20px" } }}
            width="341px"
            onSuccess={handleOnSuccess}
            onError={handleOnError}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
