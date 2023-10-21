import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";

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
