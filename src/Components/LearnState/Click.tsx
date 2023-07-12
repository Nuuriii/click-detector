import { useState, useEffect } from "react";
import { Buttons } from "../Tools/Buttons";
import "./Click.css";

export const Click = () => {
   // state untuk menyimpan nilai click
   const [value, setValue] = useState(0);

   // fungsi untuk menampilkan element rahasia
   const showElement = (element: HTMLElement) => {
      value % 10 === 0 && value > 0
         ? element.classList.add("show")
         : element.classList.add("hidden");
   };

   // fungsi untuk menyembunyikan element rahasia
   const hiddenElement = (element: HTMLElement) => {
      value % 10 === 0 && value > 0
         ? element.classList.remove("hidden")
         : element.classList.remove("show");
   };

   // fungsi untuk mengecek nilai click dan menampilkannya ke judul web
   const checkValue = () => {
      value > 0
         ? (document.title = `${value} Click`)
         : (document.title = "Halo . . .");
   };

   // fungsi untuk memilih tag HTML yang terdapat class dengan nama secret
   const secretElement = () => {
      const secret: HTMLElement = document.querySelector(".secret")!;
      return secret;
   };

   // gunakan useEffect untuk menjalankan fungsi
   useEffect(() => {
      checkValue();

      //jalankan fungsi untuk menampilkan dan menyembunyikan element
      //isi parameter dengan fungsi yang memilih element yang classnya secret
      showElement(secretElement());
      hiddenElement(secretElement());

      //console.log buat mengecek apakah function untuk menampilkan dan menyembunyikan element berfungsi sesuai yang kita mau
      console.log(secretElement());
   });

   return (
      <div className='container'>
         <h1>Penghitung Click</h1>
         <p>Silahkan Di-Click</p>
         <p>
            Kamu sudah mengeklik sebanyak: <span>{value}</span>
         </p>

         {/* Element rahasia yang akan tampil ketika user telah mencapai nilai tertentu */}
         <p className='secret hidden'>
            {/* Jika nilai dari state sudah kelipatan 10 maka akan tampil text yang sudah diatur akan tampil tulisan apa */}
            {value % 10 === 0 ? `Selamat kamu Sudah mengeklik sebanyak ` : ""}
            <span>{value % 10 === 0 ? ` ${value} ` : ""}</span>
            kali
         </p>

         {/* import button dari komponent Buttons, kemudian isi dengan props yang telah dibuat di Componennya */}
         <Buttons
            className='btn'
            // Setiap kali tombol Click saya diklik maka nilainya akan bertanbah satu
            Click={() => setValue(value + 1)}
            text='Click Saya'
         />
      </div>
   );
};
