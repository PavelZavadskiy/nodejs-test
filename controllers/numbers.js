const { getPercent } = require('../models/numbers');
const Joi = require('joi');

const joiSchema = Joi.object({
  number: Joi.number().required(),
});

const getPercentByNumber = async (req, res, next) => {
  if (isNaN(req.params.number)) res.status(400).json({ message: 'Bad request' });
  try {
    const result = getPercent(req.params.number);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getPercentByNumberBody = async (req, res, next) => {
  const { error } = joiSchema.validate(req.body);
  if (error) res.status(400).json({ message: 'Bad request' });
  try {
    const result = getPercent(req.body.number);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPercentByNumber,
  getPercentByNumberBody,
};
