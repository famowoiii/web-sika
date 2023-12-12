import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SkinType() {
  // State untuk menyimpan data produk
  const [produk, setProduk] = useState([]);
  // State untuk menyimpan label yang dipilih
  const [selectedLabel, setSelectedLabel] = useState(null);
  // State untuk menyimpan skin type yang dipilih
  const [selectedSkinType, setSelectedSkinType] = useState(null);

  useEffect(() => {
    // Ambil data produk dari sumber data (misalnya, dari API)
    fetch("/csvjson.json")
      .then((response) => response.json())
      .then((data) => setProduk(data));
  }, []);

  // Get unique labels and skin types
  const uniqueLabels = [...new Set(produk.map((product) => product.Label))];
  const uniqueSkinTypes = [
    ...new Set(produk.map((product) => product.SkinType)),
  ];

  // Filter products based on selected label and skin type
  const filteredProducts = produk.filter(
    (product) =>
      (!selectedLabel || product.Label === selectedLabel) &&
      (!selectedSkinType || product.SkinType === selectedSkinType)
  );

  return (
    <div className="w-full bg-orange-50 min-h-screen  flex flex-col justify-center ">
      <div className=" flex flex-row justify-between mx-3   pt-2">
        <div className="bg-orange-50 font-bold font-serif text-xl ">
          SkinGenie
        </div>
        <button className="border-solid border-amber-900 border-2 rounded-full p-1 hover:bg-amber-900 hover:text-white">
          <Link to="/">back to Homepage</Link>
        </button>
      </div>
      <div className="justify-center pt-32 flex flex-col items-center">
        <h1 className="font-serif font-bold  text-3xl">
          LETS GET RECOMMENDATION
        </h1>
        <p className=" font-lg  text-xl">
          Dapatkan rekomendasi produk perawatan kulit yang sesuai dengan
          kebutuhan anda
        </p>
      </div>
      <div className="justify-center flex flex-row gap-80 ">
        <div>
          <p>Product type</p>
          <div>
            {uniqueLabels.map((label, index) => (
              <button
                key={index}
                className={`border-solid border-2 border-amber-900 mx-1 p-1 rounded-full  ${
                  selectedLabel === label ? "bg-amber-900 text-white" : ""
                }`}
                onClick={() => setSelectedLabel(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p>Notable Effect</p>
          <div>
            {uniqueSkinTypes.map((skinType, index) => (
              <button
                key={index}
                className={`border-solid border-2 border-amber-900 mx-1  p-1 rounded-full ${
                  selectedSkinType === skinType ? "bg-amber-900 text-white" : ""
                }`}
                onClick={() => setSelectedSkinType(skinType)}
              >
                {skinType}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex item-center justify-center pt-2">
        {filteredProducts.length > 0 ? (
          <table className="table-auto items-center justify-center border-4 border-amber-900 border-b-amber-900">
            <thead>
              <tr>
                <th className=" border-4 border-amber-900 border-b-amber-900">
                  No
                </th>
                <th className=" border-4 border-amber-900 border-b-amber-900">
                  Nama Produk
                </th>
                <th className=" border-4 border-amber-900 border-b-amber-900">
                  brand
                </th>
                <th className=" border-4 border-amber-900 border-b-amber-900">
                  review
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{product.Name}</td>
                  <td>{product.Brand}</td>
                  <td>{product.Rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">
            {selectedLabel || selectedSkinType
              ? "Tidak ada produk yang sesuai."
              : "Pilih Product type dan Notable Effect untuk melihat produk."}
          </p>
        )}
      </div>
    </div>
  );
}

export default SkinType;
