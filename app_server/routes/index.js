var express = require('express');
var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var router = express.Router();

/* main route */
router.get('/', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/locations/review/new', ctrlLocations.addReview);





router.get('/about', ctrlOthers.others);







module.exports = router;
