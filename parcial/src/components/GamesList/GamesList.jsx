import styles from "./GamesList.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const GamesList = ({ games, deleteGameById }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.gamesList}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameBox}>
          <h3>{game.title}</h3>
          <button
            className={styles.detailsButton}
            onClick={() => navigate(`/game/${game.id}`)}>
            Detalles
          </button>
          <button className={styles.deleteButton}
          onClick={() => deleteGameById(game.id)}
          >Borrar</button>
        </div>
      ))}
    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      players: PropTypes.string,
      categories: PropTypes.string,
    })
  ).isRequired,
  deleteGameById: PropTypes.func.isRequired,
};

export default GamesList;
