const express = require('express');
const controllerNumbers = require('../../controllers/numbers');

const router = express.Router();

router.post('/:number', controllerNumbers.getPercentByNumber);
router.post('/', controllerNumbers.getPercentByNumberBody);

module.exports = router;
