import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GameDetails from "./components/GameDetails/GameDetails";

const App = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  // GET all games
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/games");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  // GET a game by ID
  const fetchGameById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/games/${id}`);
      const data = await response.json();
      setSelectedGame(data[0]); // Asumimos que data es un array con un único elemento
    } catch (error) {
      console.error("Error fetching game by ID:", error);
    }
  };

  // DELETE a game by ID
  const deleteGameById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/games/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setGames((prevGames) => prevGames.filter((game) => game.id !== id));
      
      } else {
        console.error('Error deleting game');
      }
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home games={games} deleteGameById={deleteGameById} />} />
        <Route path="/game/:id" element={<GameDetails games={games} fetchGameById={fetchGameById} selectedGame={selectedGame}  />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
