import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import listRoutes from "./routes/lists.js";
import mediaRoutes from "./routes/media.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/lists", listRoutes);
app.use("/media", mediaRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
   res.send("Welbome to the Back End!");
});

const PORT = process.env.PORT || 5000;

mongoose
   .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() =>
      app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
   )
   .catch((error) => console.log(error.message));
