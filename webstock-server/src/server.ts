import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(3333, () => {
    console.log('Running on port 3333');
});