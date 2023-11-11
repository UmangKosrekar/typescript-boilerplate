import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
dotenv.config({ path: path.join(__dirname, "../.env") });

const main = () => {
  console.log("process.env.DatabaseName", process.env.DatabaseName);
  mongoose
    .connect(`mongodb://localhost:27017/${process.env.DatabaseName}`)
    .then(() => {
      console.log("Database Connected!!!");
    })
    .catch((err) => {
      console.log("Error in connecting DB");
      console.log(err);
    });
};

export default main;
