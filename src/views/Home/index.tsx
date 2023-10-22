import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import { useAddUserCCMutation } from "../../redux/api/carbbynApi";

const Home = () => {
  const [plantedTrees, setPlantedTrees] = useState(0);
  const [treesToPlant, setTreesToPlant] = useState(1);
  const [addUserCC] = useAddUserCCMutation();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.session.token);
  const TREE_CO2_ABSORTION = 0.04;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return (
    <>
      <div>Tu bd drzewko</div>
      Ilosc drzewek posadzonych: {plantedTrees}
      <div>
        <button onClick={() => setTreesToPlant((prev) => prev + 1)}>+</button>
        Drzewka do posadzenia: {treesToPlant}
        <button
          disabled={treesToPlant <= 0}
          onClick={() => setTreesToPlant((prev) => prev - 1)}
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => {

              setPlantedTrees((prev) => prev + treesToPlant);
            
            addUserCC({email: 'panpietruszka221@gmail.com', cc: (treesToPlant*TREE_CO2_ABSORTION)})
            setTreesToPlant(0);
          }}
        >
          Zasadz
        </button>
      </div>
    </>
  );
};

export default Home;
