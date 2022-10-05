require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/Userrouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/', (req, res) => {
  res.send('web server running');
});
app.use('/api/user', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running : ${port}`);
});
