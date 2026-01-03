import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO_PASSWORD).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const app = express();

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});

// app.use('/api/users', require('./routes/user.route.js').default);
// The above line is replaced with the following to use ES6 module import. As we have already imported userRouter.
app.use('/api/user', userRouter);