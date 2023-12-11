import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-orange-200 min-h-screen">
      <div className="bg-blue-800">ini logo</div>
      <div className="grid grid-cols-2">
        <section className="kiri w-full h-screen bg-red-300 items-center flex flex-col">
          <h1>SKINGENIE</h1>
          <p>unlock your skin</p>
          <p>Discover your perfect skin</p>
          <div className="flex flex-row gap-8">
            <button>
              <Link to="/skintype">input your type</Link>
            </button>
            <button>
              <Link to="/recommendation">Get Recommendation</Link>
            </button>
          </div>
        </section>
        <section className="kanan bg-green-400 h-screen w-full">
          ini bagian kanan
        </section>
      </div>
    </div>
  );
}

export default Home;
