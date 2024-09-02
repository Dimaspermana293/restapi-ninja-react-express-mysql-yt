import React from "react";
import "./styles/Form.css";

const UpdateScreen = () => {
  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Update Ninja</h2>
        <form className="update-form">
          <div className="form-group">
            <label for="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama ninja"
            />
          </div>

          <div className="form-group">
            <label for="klan">Klan</label>
            <select id="klan" name="klan">
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
            />
          </div>

          <div className="form-group">
            <label for="asal">Asal</label>
            <select id="asal" name="asal">
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
