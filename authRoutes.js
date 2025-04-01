const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'User Registered', user });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Signin Route
router.post('/signin', async (req, res) => {
  try {
    const { rollNo, password } = req.body;
    const user = await User.findOne({ rollNo, password });
    if (user) {
      res.status(200).send({ message: 'Login Successful', user });
    } else {
      res.status(401).send({ message: 'Invalid Credentials' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
