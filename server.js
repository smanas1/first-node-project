const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./Routes/TaskRouter");

const PORT = process.env.PORT || 6092;
app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("db" + err));

app.use("/api", routes);
app.get("/", function (req, res) {
  res.send("sfs");
});

app.listen(PORT, () => {
  console.log(`server is runing http://localhost:${PORT}`);
});
