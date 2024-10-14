import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Asegúrate de importar PropTypes
import styles from "./AddGame.module.css"; // Importa el archivo de estilos

const AddGame = ({ onAddGame }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [players, setPlayers] = useState("");
  const [categories, setCategories] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = { title, description, players, categories };
    onAddGame(newGame);
    navigate("/"); // Vuelve a la página de inicio después de agregar el juego
  };

  return (
    <div className={styles.addGameContainer}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Atrás
      </button>
      <h2>Agregar nuevo juego</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Cantidad de participantes:</label>
          <input
            type="text"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Categorías:</label>
          <input
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Agregar juego</button>
      </form>
    </div>
  );
};

// Validación de props
AddGame.propTypes = {
  onAddGame: PropTypes.func.isRequired,
};

export default AddGame;
