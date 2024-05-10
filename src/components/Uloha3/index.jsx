// Zadání 1: Vytvořte stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypište místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změňte `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

import { useState } from 'react';

export const Uloha3 = () => {
  const [stavPocasi, setStavPocasi] = useState('možná');

  const handleClick = () => {
    if (stavPocasi === "možná") {
      setStavPocasi("ano");
    } else if (stavPocasi === "ano") {
      setStavPocasi("ne");
    } else {
      setStavPocasi("možná");
    }
  };

  return (
    <>
      <h3>Prší v Brně: {stavPocasi}</h3>
      <button onClick={handleClick}>změnit</button>
    </>
  );
};
