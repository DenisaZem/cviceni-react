// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypište do `<output></output>` jejich součet.

import { useState } from "react";

export const Bonus4 = () => {

  const [cislo1, setCislo1] = useState(0);
  const [cislo2, setCislo2] = useState(0);


  const handleChangeCislo1 =(event)=>{
    setCislo1(Number(event.target.value))
  }

  const handleChangeCislo2 =(event)=>{
    setCislo2(Number(event.target.value))
  }

  const soucet = cislo1+cislo2

  return (
    <>
      <input type="number" defaultValue="0" value={cislo1} onChange={handleChangeCislo1} /> +
      <input type="number" defaultValue="0" value={cislo2} onChange={handleChangeCislo2}/> = <output>{soucet}</output>
    </>
  );
};
