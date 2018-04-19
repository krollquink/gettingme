var express = require('express');
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');
var router = express.Router();


//location
//router.get('/locations', ctrlLocations.locationsListByDistance);
router.get('/locations', ctrlLocations.locationsCreate);
//router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
//router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
//router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);
//
//
////reviews
//router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
//router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
//router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
//router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);


module.exports = router;
