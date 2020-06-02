import express from "express";
import cors from "cors";
import path from "path";
import route from "./routes/routes";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(route);
app.use(express.json());
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(PORT, () => {
    console.log("Server On");
});
