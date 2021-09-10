export default {
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/travelLog',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
};
