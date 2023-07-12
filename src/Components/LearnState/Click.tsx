import { useState, useEffect } from "react";
import { Buttons } from "../Tools/Buttons";
import "./Click.css";

export const Click = () => {
   const [value, setValue] = useState(0);

   useEffect(() => {
      document.title = `Sudah Click sebanyak ${value}`;
   });

   return (
      <div className='container'>
         <h1>Penghitung Click</h1>
         <p>Silahkan Di-Click</p>
         <p>
            Kamu sudah mengeklik sebanyak: <span>{value}</span>
         </p>
         <Buttons
            className='btn'
            Click={() => setValue(value + 1)}
            text='Click Saya'
         />
      </div>
   );
};
