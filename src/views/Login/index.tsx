import { useEffect } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/session/sessionSlice";
import { useNavigate } from "react-router";
import { Box, Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import treeLogo from "../../assets/tree1.png";

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
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <>
      <Box sx={{ position: "absolute" }}></Box>
      <Stack
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          gap: "100px",
        }}
        textAlign="center"
        flexDirection="column"
      >
        <Stack alignItems="center">
          <img src={treeLogo} height="200px" width="200px" />
        </Stack>
        <Stack justifyContent="center" textAlign="center">
          <Typography variant="h3" px={8}>
            TreePlanter
          </Typography>
        </Stack>
        <Stack textAlign="center">
          <Typography variant="body1" px={8} textAlign="center">
            Planting Dreams, Nurturing Nature.
          </Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <GoogleLogin
            width="341px"
            onSuccess={handleOnSuccess}
            onError={handleOnError}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
