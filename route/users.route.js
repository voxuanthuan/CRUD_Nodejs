const express = require('express');
const router = express.Router();
const controller = require('../controller/users.controller.js');

router.get('/', controller.index);

router.get('/create', controller.getCreate);

router.post('/create', controller.postCreate);

router.get('/update/:userId', controller.getUpdate);

router.post('/update', controller.postUpdate);

router.get('/delete/:userId', controller.getDelete);

router.get('/detail/:userId', controller.getDetail);

module.exports = router;