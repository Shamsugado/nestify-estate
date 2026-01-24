import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import Listing from './models/listing.model.js';
dotenv.config();

mongoose.connect(process.env.MONGO_PASSWORD).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});

// app.use('/api/users', require('./routes/user.route.js').default);
// The above line is replaced with the following to use ES6 module import. As we have already imported userRouter.
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', Listing);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({ 
    success: false,
    statusCode,
    message,
   });

});