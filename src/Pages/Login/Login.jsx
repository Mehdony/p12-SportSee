import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { whereAreWe } from "../../config";
import styles from "./Login.module.css";

function Login() {
  // permet de stocker l'id de l'utilisateur
  const [id, setId] = useState("");
  // permet de naviguer entre les pages
  const navigate = useNavigate();
  // permet de changer l'id de l'utilisateur
  const handleChange = (e) => {
    setId(e.target.value);
  };


  // permet de naviguer vers la page Home avec l'id de l'utilisateur
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        Bienvenue sur l'application de suivi de l'activité des utilisateurs
      </h1>
      <p>
        data from <span>{whereAreWe}</span>
      </p>
      <input type="text" value={id} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>Envoyer</button>
    </div>
  );
}

export default Login;
