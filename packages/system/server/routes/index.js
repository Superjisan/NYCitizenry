'use strict';

module.exports = function(System, app, auth, database) {

	// Home route
	var index = require('../controllers/index');
	app.route('/')
		.get(index.render);
  app.route('/whichDistrict')
  .post(index.whichDistrict)

};
