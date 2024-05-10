import './ukazatel-uspechu.css';
import { useState } from 'react';

// Zadání 1: Použijte prop `barva` ve style atributu.
// Zadání 2: Přidejte komponentě číselný stav od nuly do sta, který bude reprezentovat postup.
// Zadání 3: Po kliknutí na tlačítko zvětšete stav o deset. Nejvýše ale do sta.
// Zadání 4. Nastavte prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.

const UkazatelPokroku = ({ barva }) => {

  const [postup, setPostup] = useState(0)

  const zvyseni =()=>{
    setPostup(Math.min(postup+10,100))
  }

  return (
    <div className="ukazatel-uspechu">
      <div className="ukazatel-uspechu__ramecek">
        <div
          className="ukazatel-uspechu__postup"
          style={{
            width: `${postup}%`,
            backgroundColor: `#${barva}`,
          }}
        ></div>
      </div>
      <button onClick={zvyseni}>postoupit o 10 %</button>
    </div>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <UkazatelPokroku barva="blue" />
      <UkazatelPokroku barva="green" />
      <UkazatelPokroku barva="purple" />
    </>
  );
};
