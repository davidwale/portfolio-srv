const express = require('express');
const router = express.Router();
const transporter = require('../transporter');
require('dotenv').config();

router.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.senderMail,
    subject: `Contact form submission from ${name}`,
    text: `user email: ${email} \n
    Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Thank you for reaching out. I will get back to you shortly!');
  });
});

module.exports = router;