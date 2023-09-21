import mongoose from 'mongoose';
import { MONGODB_URI } from '@config';
import { logger } from '@/utils/logger';

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info(`MongoDB Connected To Database`);
    const db = mongoose.connection; // Access the database connection created by Mongoose
    const usersCollection = db.collection('studens'); // Replace 'users' with your actual collection name
  } catch (error) {
    logger.error(error);
  }
};

export default connectDatabase;
