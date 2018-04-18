
var express = require('express');
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');
var router = express.Router();
router.get('/location',ctrlLocations.locationInfo);
