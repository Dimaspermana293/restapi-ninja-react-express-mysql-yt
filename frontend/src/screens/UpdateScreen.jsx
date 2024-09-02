import React, { useEffect, useState } from "react";
import "./styles/Form.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateScreen = () => {
  const [nama, setNama] = useState("");
  const [klan, setKlan] = useState("");
  const [jurus, setJurus] = useState("");
  const [asal, setAsal] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  //   Ambil data dari API
  useEffect(() => {
    const fetchAllNinja = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/ninja/${id}`);
        const ninja = response.data;
        setNama(ninja.nama);
        setKlan(ninja.klan);
        setJurus(ninja.jurus);
        setAsal(ninja.asal);
      } catch (error) {
        console.error("Gagal mendapatkan data ninja!", error);
      }
    };
    fetchAllNinja();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/ninja/${id}`, {
        nama,
        klan,
        jurus,
        asal,
      });
      alert("Ninja berhasil diperbarui!");
      // Setelah update, kembali ke halaman dashboard
      navigate("/");
    } catch (error) {
      console.error("Gagal memperbarui ninja!", error);
      alert("Gagal memperbarui ninja!");
    }
  };

  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Update Ninja</h2>
        <form className="update-form" onSubmit={handleUpdate}>
          <div className="form-group">
            <label for="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama ninja"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="klan">Klan</label>
            <select
              id="klan"
              name="klan"
              value={klan}
              onChange={(e) => setKlan(e.target.value)}
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
              value={jurus}
              onChange={(e) => setJurus(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="asal">Asal</label>
            <select
              id="asal"
              name="asal"
              value={asal}
              onChange={(e) => setAsal(e.target.value)}
            >
              <option value="konohagakure">Konohagakure</option>
              <option value="sunagakure">Sunagakure</option>
              <option value="kirigakure">Kirigakure</option>
              <option value="kumogakure">Kumogakure</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateScreen;
