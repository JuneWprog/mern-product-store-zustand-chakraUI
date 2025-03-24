import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import { connectDB } from "./config/db.js";
import path from "path";
// import cors from "cors"; 

//cors is not needed as we are using proxy in client side int vite.config.js
/**
 * server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
 * 
 */

dotenv.config();
const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/products", productRoutes);
app.get("/api", function (req, res) {
    res.status(200).json({message : "Hello World"});
});

// Handle 404
app.use(function (req, res) {
    res.sendStatus(404);
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}




connectDB()
    .then(
        app.listen(PORT, function () {
            console.log(`App listening on port ${PORT}!`)
        })
    ).catch(err => {
        console.log(err);
    });