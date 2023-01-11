import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";

import logoImg from "./assets/logo-nlw-esports.svg";

import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu duo está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl="/game-2.png" title="Dota 2" adsCount={3} />
      </div>
      <CreateAdBanner />
    </div>
  );
}

export default App;
