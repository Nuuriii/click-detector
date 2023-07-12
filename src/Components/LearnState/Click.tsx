import { useState, useEffect } from "react";
import { Buttons } from "../Tools/Buttons";
import "./Click.css";

export const Click = () => {
   const [value, setValue] = useState(0);

   useEffect(() => {
      value > 0
         ? (document.title = `Sudah Click sebanyak ${value}`)
         : (document.title = "Halo . . .");
   });

   return (
      <div className='container'>
         <h1>Penghitung Click</h1>
         <p>Silahkan Di-Click</p>
         <p>
            Kamu sudah mengeklik sebanyak: <span>{value}</span>
         </p>
         <p className='secret'>
            {value === 10 || value === 20
               ? `Selamat kamu Sudah mengeklik sebanyak ${value}`
               : ""}
         </p>
         <Buttons
            className='btn'
            Click={() => setValue(value + 1)}
            text='Click Saya'
         />
      </div>
   );
};
