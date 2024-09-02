import React from "react";
import "./styles/Form.css";

const AddScreen = () => {
  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Tambah Ninja</h2>
        <form className="update-form">
          <div className="form-group">
            <label for="name">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukkan nama ninja"
              required
            />
          </div>

          <div className="form-group">
            <label for="klan">Klan</label>
            <select id="klan" name="klan" required>
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
              required
            />
          </div>

          <div className="form-group">
            <label for="asal">Asal</label>
            <select id="asal" name="asal" required>
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
