import express from "express";
import usersRoute from "./routes/userRoute.js";
import "./database/connection.js";

const app = express();

app.use(express.json());

app.use("/user", usersRoute);

app.listen(3000, (err) => {
  console.log(`server running successfully at - http://www.localhost:3000`);
});