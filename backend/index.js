const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Endpoints
app.get("/", (req, res) => {
  res.json("hello this is backend!");
});

// GET ALL DATA NINJA
app.get("/ninja", (req, res) => {
  const queryPrompt = "SELECT * FROM ninja";
  db.query(queryPrompt, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET NINJA BY ID
app.get("/ninja/:id", (req, res) => {
  const ninjaId = req.params.id;
  const queryPrompt = "SELECT * FROM ninja WHERE id = ?";

  db.query(queryPrompt, [ninjaId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json({ message: "Ninja tidak ada" });
    return res.json(data[0]);
  });
});

// POST DATA NINJA
app.post("/ninja", (req, res) => {
  const queryPrompt =
    "INSERT INTO ninja(`nama`, `klan`, `jurus`, `asal`) VALUES (?)";
  const values = [req.body.nama, req.body.klan, req.body.jurus, req.body.asal];

  db.query(queryPrompt, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data Ninja berhasil ditambahkan!");
  });
});

// DELETE DATA NINJA BY ID
app.delete("/ninja/:id", (req, res) => {
  const ninjaId = req.params.id;
  const queryPrompt = "DELETE FROM ninja WHERE id=?";

  db.query(queryPrompt, [ninjaId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data Ninja berhasil dihapus!");
  });
});

// PUT UPDATE DATA NINJA BY ID
app.put("/ninja/:id", (req, res) => {
  const ninjaId = req.params.id;
  const { nama, klan, jurus, asal } = req.body;
  const queryPrompt =
    "UPDATE ninja SET `nama` = ?, `klan` = ?, `jurus` = ?, `asal` = ? WHERE id = ?";

  db.query(queryPrompt, [nama, klan, jurus, asal, ninjaId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data Ninja berhasil diupdate!");
  });
});

// SERVER
app.listen(8800, () => {
  console.log("Terkoneksi ke Localhost: 8800!");
});
