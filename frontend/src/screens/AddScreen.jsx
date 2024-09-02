import React, { useState } from "react";
import "./styles/Form.css";
import axios from "axios";

const AddScreen = () => {
  const [formData, setFormData] = useState({
    nama: "",
    klan: "Uzumaki",
    jurus: "",
    asal: "Konohagakure",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/ninja/", formData);
      alert("Ninja berhasil ditambahkan!");
      setFormData({
        nama: "",
        klan: "Uzumaki",
        jurus: "",
        asal: "Konohagakure",
      });
    } catch (error) {
      console.error("Gagal menambahkan ninja!", error);
      alert("Gagal menambahkan ninja!");
    }
  };

  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Tambah Ninja</h2>
        <form className="update-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukkan nama ninja"
              onChange={handleChange}
              value={formData.nama}
              required
            />
          </div>

          <div className="form-group">
            <label for="klan">Klan</label>
            <select
              id="klan"
              name="klan"
              onChange={handleChange}
              value={formData.klan}
              required
            >
              <option value="uzumaki">Uzumaki</option>
              <option value="uchiha">Uchiha</option>
              <option value="hyuga">Hyuga</option>
              <option value="senju">Senju</option>
            </select>
          </div>

          <div className="form-group">
            <label for="jurus">Jurus</label>
            <input
              type="text"
              id="jurus"
              name="jurus"
              placeholder="Masukkan jurus ninja"
              onChange={handleChange}
              value={formData.jurus}
              required
            />
          </div>

          <div className="form-group">
            <label for="asal">Asal</label>
            <select
              id="asal"
              name="asal"
              onChange={handleChange}
              value={formData.asal}
              required
            >
              <option value="konohagakure">Konohagakure</option>
              <option value="sunagakure">Sunagakure</option>
              <option value="kirigakure">Kirigakure</option>
              <option value="kumogakure">Kumogakure</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Tambah
          </button>
        </form>
      </div>
    </>
  );
};

export default AddScreen;
