import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://shubhammazumdar94:shubhammazumdar94@epeteam2.uuvz2cr.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5001;



mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

