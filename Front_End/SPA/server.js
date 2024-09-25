import express, { static as _static } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
const __dirname = import.meta.dirname;

app.use(_static(path.resolve(__dirname)));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html")).status(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
