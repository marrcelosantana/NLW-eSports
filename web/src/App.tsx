import { useEffect, useState } from "react";
import axios from "axios";

import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";

import { Game } from "./models/Game";

import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "./assets/logo-nlw-esports.svg";

import "./styles/main.css";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [open, setOpen] = useState(false);

  function loadGames() {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }

  useEffect(() => {
    loadGames();
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
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <CreateAdBanner />
        <CreateAdModal setOpen={setOpen} loadGames={loadGames} />
      </Dialog.Root>
    </div>
  );
}

export default App;
