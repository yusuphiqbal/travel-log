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
      min: -90,
      max: 90,
    },
    longitude: {
      type: Number,
      required: true,
      min: -180,
      max: 180,
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
