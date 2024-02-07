const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT; 
const sendMail = require("./controllers/sendMail");
app.get('/', (req, res) => {
  res.send('I am a server');
});
app.get("/mail", sendMail);
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is live on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

start();
