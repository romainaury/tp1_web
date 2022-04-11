import { useEffect, useState } from "react";
import { CardComponent as Card } from "./components/card/CardComponent";
import { CardListComponent as CardList } from "./components/card/CardListComponent";

function App() {
  const [championsDispo, setChampionsDispo] = useState([]);
  const [championsDeck, setChampionsDeck] = useState([]);

  const [modifyingDeck, setModifyingDeck] = useState(false);

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then(
        (data) =>
          championsDispo.length === 0 && setChampionsDispo(data.sort(compare))
      )
      .catch(console.log);
  }, []);

  const ajouterChampion = (champion) => {
    setChampionsDispo(championsDispo.filter((c) => c !== champion));
    championsDeck.push(champion);
    championsDeck.sort(compare);
    setChampionsDeck(championsDeck);
  };

  const retirerChampion = (champion) => {
    setChampionsDeck(championsDeck.filter((c) => c !== champion));
    championsDispo.push(champion);
    championsDispo.sort(compare);
    setChampionsDispo(championsDispo);
  };

  const toggleModifyingDeck = () => {
    setModifyingDeck(!modifyingDeck)
  }

  return (
    <div
      className="d-flex flex-column vh-100 overflow-hidden position-relative"
    >
      <button disabled={modifyingDeck && championsDeck.length !== 20} className={"btn btn-light"} onClick={toggleModifyingDeck}>{modifyingDeck ? "Sauvegarder" : "Modifier"}</button>
      <nav className="p-2 mb-0 bg-dark text-white flex-shrink-1">
        League of Stones
      </nav>
      <div className=" mx-0 my-0 px-0 py-0 d-flex flex-lg-row flex-shrink-1 flex-row justify-content-center position-relative overflow-hidden">
        <CardList title={`Cartes disponibles`} isSplited={modifyingDeck} dark={false}>
          {championsDispo.map((champion) => {
            return (
              <Card
                key={champion.id}
                isSplited={modifyingDeck}
                champion={champion}
                onClick={modifyingDeck ? ajouterChampion : () => { /* No callback when not modifying*/ }}
              />
            );
          })}
        </CardList>
        {(modifyingDeck) && (
          <CardList title={`Mon deck ${championsDeck.length}/20`} dark={true}>
            {championsDeck.map((champion) => {
              return (
                <Card
                  key={champion.id}
                  isSplited={true}
                  champion={champion}
                  onClick={retirerChampion}
                />
              );
            })}
          </CardList>
        )}
      </div>
    </div>
  );
}

export default App;
