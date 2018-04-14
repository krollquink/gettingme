
module.exports.homelist = function(req,res){
	res.render('locations-list',{
		title:'Lo8cr - find a place to work with Wifi',
	pageHeader: {
		title : 'Lo8cr',
	    strapline:' Find a place to work with Wifi near you!'
	},
		locations:[
		{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},
		{
			name: 'Cafe Heroes',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},
		{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		}

		]
	});
};

module.exports.locationInfo = function(req,res){
	res.render('location-info',{title:'Locations'})
};

module.exports.addReview = function(req,res){
	res.render('location-add-review',{title:'Add review'})
};
