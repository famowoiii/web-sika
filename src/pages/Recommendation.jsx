import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Recommendation() {
  return (
    <div className="bg-orange-50 h-11/12">
      <div className=" flex flex-row justify-between mx-3   pt-2">
        <div className="bg-orange-50 font-bold font-serif text-xl ">
          SkinGenie
        </div>
        <button className="border-solid border-amber-900 border-2 rounded-full p-1 hover:bg-amber-900 hover:text-white">
          <Link to="/">back to Homepage</Link>
        </button>
      </div>
      <div className="grid grid-cols-2  ">
        <section
          className="kiri w-full h-128 bg-orange-50 items-center flex flex-col 
     "
        >
          <img
            src="src\assets\objek.png"
            alt=""
            style={{ minWidth: 300 }}
            className="pt-24"
          />
        </section>
        <section className="kanan pt-32 gap-5 bg-orange-50 min-h-11/12  w-full">
          <h1 className="font-serif font-bold mb-1 text-amber-900  text-3xl">
            SKIN TYPE CHECK TUTORIAL
          </h1>
          <p className="mb-4 italic">
            Berikut adalah tips dan metode umum yang dapat digunakan sebagai
            panduan awal untuk menentukan jenis kulit
          </p>
          <ul className="list-none gap-3">
            <li>
              <p className="font-medium text-base text-amber-700 italic">
                1. Bersihkan Wajah
              </p>
              <p>
                {" "}
                Cuci wajah anda dengan pembersih uyang lembut untuk
                menghilangkan kotoran dan minya
              </p>
            </li>

            <li>
              <p className="font-medium text-base text-amber-700 italic">
                2. Biarkan Kering
              </p>
              <p>
                {" "}
                Biarkan wajah anda kering secara alami atau tepuk-tepuk dengan
                handuk bersih
              </p>
            </li>

            <li>
              <p className="font-medium text-base text-amber-700 italic">
                3. Tidak Menggunakan Produk
              </p>
              <p>
                Jangan menggunakan produk perawatan kulit apapun selama beberapa
                jam sebelum melakukan pengecekan kondisi kulit
              </p>
            </li>
          </ul>
        </section>
      </div>
      <div className="">
        <div className="tulis text-lg text-orange-700 italic anfooter flex items-center justify-center text-center p-4">
          Jika kulit terasa kencang dan kering secara keseluruhan, kemungkinan
          anda memiliki jenis kulit kering. Jika kulit tetap lembab sepanjang
          hari, anda mungkin memiliki jenis kulit normal atau berminyak
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
