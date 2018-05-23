var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.reviewsReadOne = function (req,res) {
	if(req.params.reviewid && req.params){
		console.log(req.params.reviewid);
		Loc
			.findById(req.params.locationid)
			.select('name reviews')
			.exec(
				function(err, location){
					var review, response;
					if(!location){
						sendJsonResponse(res, 404, 
							{"message" : "locationid not found"
						});
						return;
					}else if(err) {
						sendJsonResponse(res, 404, err);
						return;
					}
					console.log(location.reviews.id(req.params.reviewid))
					if(location.reviews && location.reviews.length > 0) {
						review = location.reviews.id(req.params.reviewid);
						if(!review){
							sendJsonResponse(res, 404,
								{"message" : "reviewid not found"
							});
						}else {
							response = {
								location : {
									name : location.name,
									id : req.params.locationid
								},
								review : review
							};
							sendJsonResponse(res, 200, response);
							return;
						}
					}else{
						sendJsonResponse(res, 404, 
							{ " message" :" No review Found"}
						);
					}
				});
		
	}else {
		sendJsonResponse(res, 404, {
			"message" : "Not found, locationid reviewid are both required"
		});
	};	
	};	

module.exports
