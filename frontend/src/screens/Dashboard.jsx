import React, { useEffect, useState } from "react";
import "./styles/Dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [ninja, setNinja] = useState([]);

  useEffect(() => {
    const fetchAllNinja = async () => {
      try {
        const respon = await axios.get("http://localhost:8800/ninja/");
        setNinja(respon.data);
        console.log(respon.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNinja();
  }, []);

  //   Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/ninja/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <button className="add-button">
        <Link to={"/add"} className="btn-add">
          Tambah Data
        </Link>
      </button>

      {/* Panggil Data dari API */}
      <div className="ninja-cards">
        {ninja.map((ninja) => (
          <div className="ninja-card" key={ninja.id}>
            <h2 className="ninja-title">{ninja.nama}</h2>
            <p>
              <strong>Klan:</strong> {ninja.klan}
            </p>
            <p>
              <strong>Jurus:</strong> {ninja.jurus}
            </p>
            <p>
              <strong>Asal:</strong> {ninja.asal}
            </p>
            <div className="card-buttons">
              <button className="card-button">
                <Link to={`/update/${ninja.id}`} className="btn-update">
                  Update
                </Link>
              </button>
              <button
                className="card-button"
                onClick={() => handleDelete(ninja.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
