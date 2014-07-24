'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Representatives = new Module('Representatives');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Representatives.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Representatives.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Representatives.menus.add({
        title: 'representatives example page',
        link: 'representatives example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Representatives.settings({
	'someSetting': 'some value'
    }, function(err, settings) {
	//you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Representatives.settings({
	'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Representatives.settings(function(err, settings) {
	//you now have the settings object
    });
    */

    return Representatives;
});
