import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';



const app = express();
const PORT = 5000;

import neckRoutes from './routes/neck.js';
import baseRoutes from './routes/base.js';
import sleevesRoutes from './routes/sleeves.js';

app.use(bodyParser.json());
app.use(cors());
app.use('/neck', neckRoutes);
app.use('/base', baseRoutes);
app.use('/sleeves', sleevesRoutes);
 
app.use('/public', express.static('./public'));




app.listen(PORT, () => console.log(`Server Running on Port: http://localhost/${PORT} `));







