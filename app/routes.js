'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const weblist = require('./controllers/weblist.js');

router.get('/', start.index);

router.get('/dashboard', dashboard.index);
router.get('/dashboard/deleteWebList/:id', dashboard.deleteWebList);
router.post('/dashboard/addSource', dashboard.addSource);

router.get('/weblist/:id', weblist.index);
router.get('/weblist/:id/deletesite/:siteid', weblist.deleteSite);
router.post('/weblist/:id/addsite', weblist.addSite);

router.get('/about', about.index);

module.exports = router;
