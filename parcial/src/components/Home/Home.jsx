import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GamesList from "../GamesList/GamesList";
import styles from "./Home.module.css";

const Home = ({ games, deleteGameById }) => {
  return (
    <div className={styles.homeContainer}>
      <h2>Juegos Olímpicos</h2>
      <Link to="/add-game">
        <button className={styles.addButton}>Agregar juego</button>
      </Link>
      <GamesList games={games} deleteGameById={deleteGameById} />
    </div>
  );
};

Home.propTypes = {
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

export default Home;
