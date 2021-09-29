import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`The server is listening on ${PORT}`);
});
