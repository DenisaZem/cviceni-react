// Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládejte do stavu, co uživatel napsal.
// Zadání 2: Mezi tagy `<b></b>` vložte napsaný text.
// Zadání 3. V dalším odstavci `<p>` zobrazte, kolik má text znaků.
// Zadání 4. Poslední odstavec zobrazte pouze v případě, že je text kratší než 8 znaků.
import { useState } from 'react';

export const Bonus1 = () => {
  const [heslo, setHeslo] = useState('');

  const handleChange = (event) => {
    setHeslo(event.target.value);
  };

  return (
    <>
      <label>
        Napiš něco: < input  onChange={handleChange}/>
      </label>
      <p>
        Do políčka výše uživatel napsal: <b>{heslo}</b>
      </p>
      <p>Počet znaků: {heslo.length}</p>
      <p>{heslo.length <= 8 ? `Jako heslo by text neobstál.` : ""}</p>
    </>
  );
};
