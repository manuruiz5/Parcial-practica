import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./GameDetails.module.css";

const GameDetails = ({ games }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca el juego con el id correspondiente
  const game = games.find((game) => game.id === id);

  // Si no se encuentra el juego, muestra un mensaje o redirige
  if (!game) {
    return <p>El juego no existe o los datos aún no están cargados.</p>;
  }

  return (
    <div className={styles.gameDetailsContainer}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Atrás
      </button>
      <h2>{game.title}</h2>
      <p>Descripción: {game.description}</p>
      <p>Jugadores: {game.players}</p>
      <p>Categorías: {game.categories}</p>
    </div>
  );
};

// Definir PropTypes para validar las props del componente
GameDetails.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      players: PropTypes.string,
      categories: PropTypes.string,
    })
  ).isRequired,
};

export default GameDetails;
