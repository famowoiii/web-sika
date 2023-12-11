import React, { useState, useEffect } from "react";

function SkinType() {
  // State untuk menyimpan data produk
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    // Ambil data produk dari sumber data (misalnya, dari API)
    fetch("/csvjson.json")
      .then((response) => response.json())
      .then((data) => setProduk(data));
  }, []);

  // Fungsi untuk merender tabel produk
  const renderTable = () => {
    if (produk.length === 0) {
      return <p>Tidak ada data produk.</p>;
    }

    return (
      <table className="table-auto">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>brand</th>
            <th>review</th>
          </tr>
        </thead>
        <tbody>
          {produk.map((product, index) => (
            <tr key={index}>
              <td>{product.nama}</td>
              <td>{product.merek}</td>
              <td>{product.harga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="w-full bg-orange-200 min-h-screen">
      <div>
        <h1>LETS GET RECOMMENDATION</h1>
        <p>
          Dapatkan rekomendasi produk perawatan kulit yang sesuai dengan
          kebutuhan anda
        </p>
      </div>
      <div>
        <div>
          <p>Product type</p>
          <button>ini tombol produk</button>
        </div>
        <div>
          <p>Notable Effect</p>
          <button>ini tombol efek</button>
        </div>
      </div>
      <div>{renderTable()}</div>
    </div>
  );
}

export default SkinType;
