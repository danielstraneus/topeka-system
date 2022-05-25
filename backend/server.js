import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 1337;
import hamsters from "./routes/hamsters.js";

const staticFolder = path.join(__dirname, "/../dist/");

const staticImages = path.join(__dirname, "/public/img/");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use((req, res, next) => {
  console.log(`Logger: ${req.method}  ${req.url} `, req.body);
  next();
});

// Static
app.use(express.static(staticFolder));
app.use("/img", express.static(staticImages));

// Routes
app.use("/hamsters", hamsters);
app.all("*", (req, res) => {
  res.sendFile(staticFolder + "index.html");
});

// Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
