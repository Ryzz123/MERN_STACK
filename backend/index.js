import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

// koneksikan mongoose ke mongodb, secara otomatis mongodb membuat database nya
mongoose.connect("mongodb://localhost:27017/fullstack_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// lakukan koneksi ke database mongooDb
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

// lakukan cors
app.use(cors());
app.use(express.json());

// gunakan UserRoute
app.use(UserRoute);

// cek sudah terkoneksi ke server express js, 5000 menunjukan koneksi ke 5000
app.listen(5000, () => console.log("Server up and running..."));