import penizeUrl from './penize.svg';
import './kasicka.css';
import { useState } from 'react';

// Zadání 1: Přichystejte v komponentě `Kasicka` proměnnou pro počet uložených peněz s výchozí hodnotou podle prop proměnné `pocatecniStav`.
// Zadání 2: Prvním tlačítkem přidejte pět a druhým nastav na nulu.
// Zadání 3: Počet peněz vypište.

const Kasicka = ({ pocatecniStav }) => {

  const [stav, setStav] = useState(0)

  const petikoruna =()=>{
    setStav(stav+5)
  }

  const vysipati =()=>{
    setStav(0)
  }

  return (
    <div className="kasicka">
      <h3>
        <img src={penizeUrl} width={24} height={24} alt="" /> Peníze v kasičce: {stav} Kč
      </h3>
      <button onClick={petikoruna}>přihodit pětikorunu</button> <button onClick={vysipati}>vysypat</button>
    </div>
  );
};

export const Bonus2 = () => {
  return (
    <>
      {[0, 20, 50, 8].map((hodnota, i) => (
        <Kasicka pocatecniStav={hodnota} key={i} />
      ))}
    </>
  );
};
