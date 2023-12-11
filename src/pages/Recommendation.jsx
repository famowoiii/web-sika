import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Recommendation() {
  return (
    <div className="bg-orange-200 h-11/12">
      <div className=" flex justify-between mx-3">
        <div className="bg-blue-800">ini logo</div>
        <button>
          <Link to="/">Kembali ke Homepage</Link>
        </button>
      </div>
      <div className="grid grid-cols-2  ">
        <section
          className="kiri w-full h-screen bg-red-300 items-center flex flex-col 
     "
        >
          Ini gambar
        </section>
        <section className="kanan bg-green-400 h-screen  w-full">
          ini bagian kanann
        </section>
      </div>
      <div>
        jika kulit terasa kencang dan kering Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Facilis minus totam dolorem modi nulla sed
        eius quia, laudantium dignissimos quo, molestias praesentium nobis unde
        minima?
      </div>
    </div>
  );
}

export default Recommendation;
