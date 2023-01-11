import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";

import logoImg from "./assets/logo-nlw-esports.svg";

import "./styles/main.css";
import { useEffect, useState } from "react";
import { Game } from "./models/Game";

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu duo está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>
      <CreateAdBanner />
    </div>
  );
}

export default App;
