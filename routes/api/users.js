const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { user } = require('../../constants/user');
const Joi = require('joi');
require('dotenv').config();

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const secret = process.env.SECRET;

router.post('/login', async (req, res, next) => {
  const { error } = joiSchema.validate(req.body);
  if (error) res.status(400).json({ message: 'Bad request' });

  const { email, password } = req.body;

  if (email !== user.email || user.password !== password) {
    res.status(400).json({ message: 'Incorrect login or password' });
  }

  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
    },
  });
});

module.exports = router;
