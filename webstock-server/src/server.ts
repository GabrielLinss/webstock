import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import routes from "./routes";
import { errors } from "celebrate";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
