import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-orange-50 min-h-screen">
      <div className="bg-orange-50 font-bold font-serif text-xl p-2">
        SkinGenie
      </div>
      <div className="grid grid-cols-2">
        <section className="kiri w-full h-screen pt-44  items-center flex flex-col">
          <h1 className="font-serif font-bold  text-6xl">SKINGENIE</h1>
          <p className="text-2xl">unlock your skin</p>
          <p className="text-2xl">Discover your perfect match</p>
          <div className="flex flex-row gap-8 pt-5  ">
            <button className="border-solid text-xl p-2 border-amber-900 hover:bg-amber-800 hover:text-white border-2 rounded-full">
              <Link to="/skintype">input your type</Link>
            </button>
            <button className="border-solid border-amber-900 p-2  hover:bg-amber-800 hover:text-white text-xl  rounded-full border-2">
              <Link to="/recommendation">Get Recommendation</Link>
            </button>
          </div>
        </section>
        <section className="kanan pt-32 drop-shadow-xl pl-20 h-screen w-full">
          <div>
            <img src="src\assets\objek.png" alt="" style={{ minWidth: 360 }} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
