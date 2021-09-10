import mongoose from 'mongoose';

import Log from '../interfaces/log';

const schema = new mongoose.Schema<Log>(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    visitDate: {
      type: Date,
      required: true,
    },
    description: String,
    comments: String,
    image: String,
  },
  { timestamps: true }
);

const Log = mongoose.model<Log>('Log', schema);

export default Log;
