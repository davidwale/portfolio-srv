const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMailRoute = require('./route/sendMail');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', sendMailRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});