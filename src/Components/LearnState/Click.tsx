import { useState, useEffect } from "react";
import { Buttons } from "../Tools/Buttons";
import "./Click.css";

export const Click = () => {
   const [value, setValue] = useState(0);

   useEffect(() => {
      value > 0
         ? (document.title = `Sudah Click sebanyak ${value}`)
         : (document.title = "Halo . . .");

      const secret: any = document.querySelector(".secret");
      value === 10 || value === 20
         ? secret.classList.add("see")
         : secret.classList.add("hidden");

      value !== 10 && value !== 20
         ? secret.classList.remove("see")
         : secret.classList.remove("hidden");

      console.log(secret);
   });

   return (
      <div className='container'>
         <h1>Penghitung Click</h1>
         <p>Silahkan Di-Click</p>
         <p>
            Kamu sudah mengeklik sebanyak: <span>{value}</span>
         </p>
         <p className='secret '>
            {value === 10 || value === 20
               ? `Selamat kamu Sudah mengeklik sebanyak `
               : ""}
            <span>{value === 10 || value === 20 ? `${value}` : ""}</span>
         </p>
         <Buttons
            className='btn'
            Click={() => setValue(value + 1)}
            text='Click Saya'
         />
      </div>
   );
};
