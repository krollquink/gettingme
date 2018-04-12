
module.exports.homelist = function(req,res){
	res.render('location-list',{title:'Home'})
};

module.exports.locationInfo = function(req,res){
	res.render('location-info',{title:'Locations'})
};

module.exports.addReview = function(req,res){
	res.render('location-add-review',{title:'Add review'})
};
