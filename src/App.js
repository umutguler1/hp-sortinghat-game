import CharactersHouses from "./components/CharactersHouses";
import Header from "./Layout/Header";
import sortinghat from "./assets/sortinghat.png";
import gryffindor from "./assets/gryffindor.png";
import slytherin from "./assets/slytherin.png";
import hufflepuff from "./assets/hufflepuff.png";
import ravenclaw from "./assets/ravenclaw.png";

import { useState } from "react";

function App() {
  const [playButtonClicked, setPlayButtonClicked] = useState(false);
  return (
    <div className="">
      <Header setPlayButtonClicked={setPlayButtonClicked} />
      {!playButtonClicked && (
        <div className="grid text-center">
          <div className="grid grid-cols-3 text-center place-items-center gap-y-8">
            <div>
              <img src={gryffindor} alt="" width={200} />
              <img src={hufflepuff} alt="" width={200} />
            </div>
            <img src={sortinghat} alt="" width={400} />
            <div>
              <img src={slytherin} alt="" width={200} />
              <img src={ravenclaw} alt="" width={200} />
            </div>
          </div>
          <div className="grid gap-y-12 mt-4">
            <p className="text-4xl">
              Guess the Houses of Harry Potter Characters and Check Your Score!
            </p>
            <button
              onClick={() => setPlayButtonClicked(true)}
              className="py-4 px-8 text-3xl rounded-lg bg-custom-teal w-fit hover:scale-150 transition-all place-self-center"
            >
              START THE GAME!
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 px-8">
        {playButtonClicked && <CharactersHouses />}
      </div>
    </div>
  );
}

export default App;
