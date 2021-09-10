import mongoose from 'mongoose';

import config from './config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri);
  } catch (error) {
    process.exit(1);
  }
};

export default connectDB;
