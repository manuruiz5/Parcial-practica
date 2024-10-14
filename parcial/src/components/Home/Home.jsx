import PropTypes from "prop-types"; // Importa PropTypes para validar las propiedades del componente
import GamesList from "../GamesList/GamesList"; // Importa el componente GamesList para mostrar la lista de juegos
import styles from "./Home.module.css"; // Importa el archivo CSS para aplicar estilos al componente

// Define el componente funcional Home que recibe 'games' como prop
const Home = ({ games }) => {
  return (
    <div className={styles.homeContainer}> {/* Contenedor principal del componente */}
      <h2>Juegos Olímpicos</h2> {/* Título de la sección */}
      <button className={styles.addButton}>Agregar juego</button> {/* Botón para agregar un nuevo juego */}
      <GamesList games={games} /> {/* Renderiza el componente GamesList y le pasa 'games' como prop */}
    </div>
  );
};

// Define las PropTypes para validar las propiedades del componente
Home.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // El 'id' es una cadena y es requerido
      title: PropTypes.string.isRequired, // El 'title' es una cadena y es requerido
      description: PropTypes.string, // 'description' es una cadena, no es requerido
      players: PropTypes.string, // 'players' es una cadena, no es requerido
      categories: PropTypes.string, // 'categories' es una cadena, no es requerido
    })
  ).isRequired, // 'games' es un array de objetos y es requerido
};

export default Home; // Exporta el componente para que pueda ser utilizado en otros lugares
