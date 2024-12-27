import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});