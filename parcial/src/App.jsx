import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GameDetails from "./components/GameDetails/GameDetails";

const App = () => {
  const [games, setGames] = useState([]);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path="/game/:id" element={<GameDetails games={games} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
