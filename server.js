const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
  try {
    const result = await axios.get("https://fakestoreapi.com/products");
    return res.json(result.data);
  } catch (error) {
    console.log(error);
  }
});

// app.get("/query", (req, res) => {
//   req.query.title = "PM Frank";
//   console.log(req.query);
//   res.send("quack quack");
// });

// app.post("/api", (req, res) => {
//   req.body.title = "Drop";
//   console.log(req.body);
//   res.send("Suxxess");
// });

app.listen(PORT, () => {
  console.log(`listen at http://localhost:${PORT}`);
});
