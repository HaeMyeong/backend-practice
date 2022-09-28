'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.crtl')

router.get('/', ctrl.homepage);

router.get('/login', ctrl.login);

module.exports = router;