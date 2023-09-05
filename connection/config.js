const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://yashj8682:yashjain@cluster0.du2h0ii.mongodb.net/';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
