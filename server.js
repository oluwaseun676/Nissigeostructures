const express = require('express');
const mongoose = require("mongoose");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit')
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
// Set security headers with Helmet
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use((err, req, res, next) => {
  console.error(err.stack);
s.status(500).send('Something went wrong!');}

mongoose.connect('mongodb://127.0.0.1:27017/hydronissi2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend", "HTML", "homepage.html"));
  console.log("File sent Welcome to the homepage");
  return;
});

const serviceRoutes = require('./Backend/Route/route.js');
app.use('/services', serviceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
