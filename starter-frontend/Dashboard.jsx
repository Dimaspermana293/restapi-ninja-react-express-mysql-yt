import React from "react";
import "./styles/Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <button className="add-button">
        <Link className="btn-add">Tambah Data</Link>
      </button>

      {/* Panggil Data dari API */}
      <div className="ninja-cards">
        <div className="ninja-card">
          <h2 className="ninja-title">Naruto</h2>
          <p>
            <strong>Klan:</strong> Uzumaki
          </p>
          <p>
            <strong>Jurus:</strong> Sharingan
          </p>
          <p>
            <strong>Asal:</strong> Konohagakure
          </p>
          <div className="card-buttons">
            <button className="card-button">
              <Link className="btn-update">Update</Link>
            </button>
            <button className="card-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
