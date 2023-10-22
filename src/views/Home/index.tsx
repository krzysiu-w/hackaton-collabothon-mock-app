import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import treeLogo from "../../assets/tree2.png";

const Home = () => {
  const [plantedTrees, setPlantedTrees] = useState(0);
  const [treesToPlant, setTreesToPlant] = useState(1);
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.session.token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  const plantTrees = (amount: number) => {
    setPlantedTrees((prev) => prev + amount);
    setTreesToPlant(0);
  };

  return (
    <>
      <Box>
        <IconButton>
          <MenuRoundedIcon />
        </IconButton>
      </Box>
      <Grid
        marginTop={5}
        gap="20px"
        container
        justifyContent="center"
        textAlign="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src={treeLogo} height="200px" width="200px" />
        </Grid>
        {plantedTrees > 0 && (
          <Grid item xs={12}>
            You already planted {plantedTrees} trees!
          </Grid>
        )}
        <Grid item xs={12}>
          <IconButton onClick={() => setTreesToPlant((prev) => prev + 1)}>
            <ArrowDropUpRoundedIcon sx={{ height: "100px", width: "100px" }} />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          {treesToPlant}
        </Grid>
        <Grid item xs={12}>
          <IconButton
            onClick={() =>
              treesToPlant > 0 && setTreesToPlant((prev) => prev - 1)
            }
          >
            <ArrowDropDownRoundedIcon
              sx={{ height: "100px", width: "100px" }}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid textAlign="center" item xs={12}>
        <Button
          onClick={() => plantTrees(treesToPlant)}
          variant="contained"
          size="large"
          color="success"
        >
          Plant!
        </Button>
      </Grid>
    </>
  );
};

export default Home;
