const express = require('express');
const controllerNumbers = require('../../controllers/numbers');
const {isAuthorized} = require('../../controllers/auth');

const router = express.Router();

router.post('/:number', isAuthorized, controllerNumbers.getPercentByNumber);
router.post('/', isAuthorized, controllerNumbers.getPercentByNumberBody);

module.exports = router;
